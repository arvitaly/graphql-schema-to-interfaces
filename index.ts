import * as g from "graphql";
export default (schema: g.GraphQLSchema) => {
    const generator = new Generator(schema);
    return generator.print();
};
type GraphQLType = "object" | "nonnull" | "enum" | "union" | "list" | "string" | "float" | "int"
    | "string" | "boolean" | "ID" | "input";
class Generator {
    public interfaces: IInterface[] = [];
    protected types: Array<g.GraphQLObjectType | g.GraphQLInputObjectType> = [];
    constructor(protected schema: g.GraphQLSchema) {
        this.addGraphQLAllObjectType(this.schema.getQueryType());
        this.interfaces.push({
            name: "ISchema",
            fields: [{
                args: "",
                isFunction: false,
                name: "query",
                type: "IQuery",
            }, {
                args: "",
                isFunction: false,
                name: "mutation",
                type: "IMutation",
            }]
        });
    }
    public print() {
        return this.interfaces.reverse().map(printInterface).join("\n");
    }
    protected addGraphQLAllObjectType(type: g.GraphQLObjectType | g.GraphQLInputObjectType) {
        if (this.types.some((t) => type === t)) {
            return;
        }
        this.types.push(type);
        let fields: IInterfaceField[];
        if (type instanceof g.GraphQLObjectType) {
            fields = this.addFieldsForGraphQLObjectType(type.name, type.getFields());
        } else {
            fields = this.addFieldsForGraphQLInputObjectType(type.name, type.getFields());
        }
        this.interfaces.push({
            name: "I" + type.name,
            fields,
        });
    }
    protected addFieldsForGraphQLInputObjectType(
        parentName: string,
        fields: g.GraphQLInputFieldMap): IInterfaceField[] {

        return Object.keys(fields).map((fieldName) => {
            const field = fields[fieldName];
            let tpType = "any";
            const argName = "";
            const isFunction = false;
            if (field.type instanceof g.GraphQLInputObjectType) {
                this.addGraphQLAllObjectType(field.type);
                tpType = "I" + field.type.name;
            }
            if (field.type instanceof g.GraphQLScalarType) {
                // TODO
            }
            return {
                name: fieldName,
                type: tpType,
                args: argName,
                isFunction,
            };
        });
    }
    protected addFieldsForGraphQLObjectType(
        parentName: string,
        fields: g.GraphQLFieldMap<any, any>): IInterfaceField[] {
        return Object.keys(fields).map((fieldName) => {
            const field = fields[fieldName];
            let tpType = "any";
            let argName = "";
            let isFunction = false;
            argName = "I" + parentName + fieldName + "Params";
            if (field.args.length > 0) {
                isFunction = true;
                this.addArgs(argName, field);
            }

            if (field.type instanceof g.GraphQLObjectType) {
                this.addArgs(argName, field);
                this.addGraphQLAllObjectType(field.type);
                tpType = "I" + field.type.name;
                isFunction = true;
            }
            return {
                name: fieldName,
                args: argName,
                isFunction,
                type: tpType,
            };
        });
    }
    protected addArgs(name: string, field: g.GraphQLField<any, any>) {
        const fields: IInterfaceField[] = [];
        field.args.map((arg) => {
            switch (this.getType(arg.type)) {
                case "list":
                case "input":
                    fields.push({
                        name: arg.name,
                        isFunction: false,
                        type: "I" + (arg.type as g.GraphQLInputObjectType).name,
                        args: "",
                    });
                    break;
                case "object":
                    break;
                case "string":
                    fields.push({
                        name: arg.name,
                        type: "string",
                        args: "",
                        isFunction: false,
                    });
                    break;
                case "float":
                    fields.push({
                        name: arg.name,
                        type: "number",
                        args: "",
                        isFunction: false,
                    });
                    break;
                case "int":
                    fields.push({
                        name: arg.name,
                        type: "number",
                        args: "",
                        isFunction: false,
                    });
                    break;
                default:
                    throw new Error("Unknown type");
            }
        });
        this.interfaces.push({
            name,
            fields,
        });
    }
    protected getType(type: g.GraphQLOutputType | g.GraphQLInputType): GraphQLType {
        if (type instanceof g.GraphQLObjectType) {
            return "object";
        }
        if (type instanceof g.GraphQLInputObjectType) {
            return "input";
        }
        if (type instanceof g.GraphQLScalarType) {
            switch (type) {
                case g.GraphQLString:
                    return "string";
                case g.GraphQLFloat:
                    return "float";
                case g.GraphQLBoolean:
                    return "boolean";
                case g.GraphQLInt:
                    return "int";
                case g.GraphQLID:
                    return "ID";
                default:
            }
        }
        throw new Error("Unknown GraphQLType: " + type.toString());
    }
}

export function printInterface(iface: IInterface): string {
    return "interface " + iface.name + " {\n" +
        iface.fields.map((field) => {
            return "    " + field.name + (field.isFunction ? "(params: " + field.args + ")" : "")
                + ": " + field.type + ";";
        }).join("\n") + "\n}";
}

interface IInterface {
    name: string;
    fields: Array<{
        name: string;
        type: string;
        isFunction: boolean;
        args: string;
    }>;
};
interface IInterfaceField {
    name: string;
    type: string;
    isFunction: boolean;
    args: string;
};
