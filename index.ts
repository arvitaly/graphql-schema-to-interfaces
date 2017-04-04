import * as g from "graphql";
import { IGraphQLObjectTypeFieldTypeConfig, Mapper } from "graphql-schema-map";
export default (schema: g.GraphQLSchema) => {
    const generator = new Generator();
    const mapper = new Mapper(schema, generator);
    mapper.setMapGraphQLObjectType((config) => {
        generator.interfaces.push({
            name: "I" + config.type.name,
            fields: config.fields,
        });
    });
    mapper.setMapGraphQLObjectTypeFieldType((config) => {
        return {
            realType: config.realType,
            isArray: config.isArray,
            isNonNull: config.isNonNull,
        };
    });
    mapper.setMapGraphQLObjectTypeField((config): IInterfaceField | undefined => {
        const typeConfig: any = config.type;
        return getInterfaceField(
            config.objectType.name,
            config.name,
            typeConfig.realType,
            config.args.length > 0,
            typeConfig.isNonNull,
            typeConfig.isArray);

    });
    mapper.setMapGraphQLObjectTypeFieldArgs((config) => {
        if (config.args.length > 0) {
            // Add interface for params
            generator.interfaces.push({
                fields: config.args.map((a) => {
                    return getInterfaceField(
                        config.objectType.name,
                        a.name,
                        a.realType,
                        false,
                        a.isNonNull,
                        a.isArray,
                    );
                }),
                name: "I" + config.objectType.name + config.fieldName + "Params",
            });
        }
        return config.args;
    });
    mapper.map();
    return generator.interfaces.reverse().map(printInterface).join("\n");
};
class Generator {
    public interfaces: IInterface[] = [];
}
export function getInterfaceField(
    parentName: string, name: string, type: any, isHasArgs: boolean,
    isRequired: boolean, isArray: boolean) {
    let tpType = "any";
    let isFunction = false;
    if (isHasArgs) {
        isFunction = true;
    }
    if (type instanceof g.GraphQLScalarType) {
        tpType = scalarToTS(type);
    } else if (type instanceof g.GraphQLObjectType) {
        isFunction = true;
        tpType = "I" + type.name;
    } else {
        throw new Error("Unknown field type: " + type);
    }
    return {
        name,
        type: tpType,
        args: isHasArgs ? "I" + parentName + name + "Params" : "",
        isFunction,
        isRequired,
        isArray,
    };
}
export function scalarToTS(t: g.GraphQLScalarType): string {
    switch (t) {
        case g.GraphQLString:
            return "string";
        case g.GraphQLFloat:
            return "number";
        case g.GraphQLInt:
            return "number";
        case g.GraphQLBoolean:
            return "boolean";
        case g.GraphQLID:
            return "string";
        default:
            throw new Error("Unknown scalar type " + t);
    }
}
export function printInterface(iface: IInterface): string {
    return "export interface " + iface.name + " {\n" +
        iface.fields.map((field) => {
            return "    " + field.name + (field.isFunction ?
                "(" + (
                    field.args ?
                        "params" + (field.isRequired ? "" : "?") + ": " + field.args
                        : "") +
                ")" : "")
                + ": " + field.type + (field.isArray ? "[]" : "") + ";";
        }).join("\n") + "\n}";
}

interface IInterface {
    name: string;
    fields: IInterfaceField[];
}
interface IInterfaceField {
    name: string;
    type: string;
    isFunction: boolean;
    args: string;
    isRequired: boolean;
    isArray: boolean;
}
