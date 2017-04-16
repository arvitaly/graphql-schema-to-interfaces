import { writeFileSync } from "fs";
import { buildClientSchema, GraphQLSchema, introspectionQuery } from "graphql";
import fetch from "node-fetch";
import generate from ".";
export interface IOpts {
    schema?: string;
    graphqlSchema?: string;
    api?: string;
    optionalFields?: boolean;
}
class Main {
    constructor(protected file: string, protected opts: IOpts) {

    }
    public async run() {
        // Read JSON-schema
        let schemaJSON: any;
        let schema: GraphQLSchema;
        if (this.opts.graphqlSchema) {
            schema = require(this.opts.graphqlSchema).default;
        } else {
            if (this.opts.schema) {
                // tslint:disable-next-line:no-var-requires
                this.log("Require schema from " + this.opts.schema);
                schemaJSON = require(this.opts.schema).data;
            } else {
                if (this.opts.api) {
                    this.log("Require schema from  server " + this.opts.api);
                    schemaJSON = (await this.getSchemaFromServer(this.opts.api)).data;
                    this.log("Fetched schema from server successfully");
                } else {
                    throw new Error("Should be setted api-server or schema-file");
                }
            }
            schema = buildClientSchema(schemaJSON);
        }
        const isOptionalFields = this.opts.optionalFields ? true : undefined;
        const interfacesString = generate(schema, { isOptionalFields });
        // Writing...
        this.log("Write schema to " + this.file);
        writeFileSync(this.file, "// tslint:disable:max-line-length member-ordering\n" + interfacesString + "\n");
    }
    protected async getSchemaFromServer(api: string) {
        const result = await fetch(api, {
            method: "POST",
            body: JSON.stringify({ query: introspectionQuery }),
            headers: { "Content-Type": "application/json" },
        });
        return (await result.json());
    }
    protected log(...m: any[]) {
        console.log.apply(console, m);
    }
}
export default Main;
