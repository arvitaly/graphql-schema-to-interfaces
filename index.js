"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const g = require("graphql");
const graphql_schema_map_1 = require("graphql-schema-map");
exports.default = (schema, opts = {}) => {
    opts.isOptionalFields = typeof (opts.isOptionalFields) === "undefined" ? false : opts.isOptionalFields;
    const generator = new Generator();
    const mapper = new graphql_schema_map_1.Mapper(schema, generator);
    mapper.setMapGraphQLObjectType((config) => {
        generator.interfaces.push({
            name: "I" + config.type.name,
            fields: config.fields,
        });
    });
    mapper.setMapGraphQLInputObjectType((config) => {
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
    mapper.setMapGraphQLInputObjectTypeFieldType((config) => {
        return {
            realType: config.realType,
            isArray: config.isArray,
            isNonNull: config.isNonNull,
        };
    });
    mapper.setMapGraphQLObjectTypeField((config) => {
        const typeConfig = config.type;
        return getInterfaceField(config.objectType.name, config.name, typeConfig.realType, config.args.some((arg) => arg.isNonNull), config.args.length > 0, typeConfig.isNonNull, typeConfig.isArray);
    });
    mapper.setMapGraphQLInputObjectTypeField((config) => {
        const typeConfig = config.type;
        return getInterfaceField(config.objectType.name, config.name, typeConfig.realType, false, false, typeConfig.isNonNull, typeConfig.isArray);
    });
    mapper.setMapGraphQLObjectTypeFieldArgs((config) => {
        if (config.args.length > 0) {
            // Add interface for params
            generator.interfaces.push({
                fields: config.args.map((a) => {
                    return getInterfaceField(config.objectType.name, a.name, a.realType, false, false, a.isNonNull, a.isArray);
                }),
                name: "I" + config.objectType.name + config.fieldName + "Params",
            });
        }
        return config.args;
    });
    mapper.map();
    return generator.interfaces.reverse().map((i) => printInterface(i, opts.isOptionalFields)).join("\n");
};
class Generator {
    constructor() {
        this.interfaces = [];
    }
}
function getInterfaceField(parentName, name, type, isArgsRequired, isHasArgs, isRequired, isArray) {
    let tpType = "any";
    let isFunction = false;
    if (isHasArgs) {
        isFunction = true;
    }
    if (type instanceof g.GraphQLScalarType) {
        tpType = scalarToTS(type);
    }
    else if (type instanceof g.GraphQLObjectType) {
        tpType = "I" + type.name;
    }
    else if (type instanceof g.GraphQLInterfaceType) {
        // TODO
    }
    else if (type instanceof g.GraphQLInputObjectType) {
        tpType = "I" + type.name;
    }
    else {
        throw new Error("Unknown field type: " + type);
    }
    return {
        name,
        type: tpType,
        args: isHasArgs ? "I" + parentName + name + "Params" : "",
        isArgsRequired,
        isFunction,
        isRequired,
        isArray,
    };
}
exports.getInterfaceField = getInterfaceField;
function scalarToTS(t) {
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
exports.scalarToTS = scalarToTS;
function printInterface(iface, isOptionalFields = false) {
    return "export interface " + iface.name + " {\n" +
        iface.fields.map((field) => {
            return "    " + field.name + (field.isRequired || !isOptionalFields ? "" : "?") + (field.isFunction ?
                "(" + (field.args ?
                    "params" + (field.isArgsRequired ? "" : "?") + ": " + field.args
                    : "") +
                    ")" : "")
                + ": " + field.type + (field.isArray ? "[]" : "") + ";";
        }).join("\n") + "\n}";
}
exports.printInterface = printInterface;
