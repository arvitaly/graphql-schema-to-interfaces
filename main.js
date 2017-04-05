"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const graphql_1 = require("graphql");
const node_fetch_1 = require("node-fetch");
const _1 = require(".");
class Main {
    constructor(file, opts) {
        this.file = file;
        this.opts = opts;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // Read JSON-schema
            let schemaJSON;
            if (this.opts.schema) {
                // tslint:disable-next-line:no-var-requires
                this.log("Require schema from " + this.opts.schema);
                schemaJSON = require(this.opts.schema).data;
            }
            else {
                if (this.opts.api) {
                    this.log("Require schema from  server " + this.opts.api);
                    schemaJSON = (yield this.getSchemaFromServer(this.opts.api)).data;
                    this.log("Fetched schema from server successfully");
                }
                else {
                    throw new Error("Should be setted api-server or schema-file");
                }
            }
            const schema = graphql_1.buildClientSchema(schemaJSON);
            const isOptionalFields = this.opts.optionalFields ? true : undefined;
            const interfacesString = _1.default(schema, { isOptionalFields });
            // Writing...
            this.log("Write schema to " + this.file);
            fs_1.writeFileSync(this.file, "// tslint:disable:max-line-length member-ordering\n" + interfacesString + "\n");
        });
    }
    getSchemaFromServer(api) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield node_fetch_1.default(api, {
                method: "POST",
                body: JSON.stringify({ query: graphql_1.introspectionQuery }),
                headers: { "Content-Type": "application/json" },
            });
            return (yield result.json());
        });
    }
    log(...m) {
        console.log.apply(console, m);
    }
}
exports.default = Main;
