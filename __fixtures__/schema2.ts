import * as g from "graphql";
import { connectionArgs, nodeDefinitions } from "graphql-relay";
const nodeInterface = nodeDefinitions(() => {/* */ }, () => {
    return null as any;
});
const where = new g.GraphQLInputObjectType({
    name: "Where",
    fields: {
        field1: {
            type: new g.GraphQLNonNull(g.GraphQLString),
        },
        fieldx: {
            type: g.GraphQLFloat,
        },
    },
});
const schema = new g.GraphQLSchema({
    query: new g.GraphQLObjectType({
        name: "Query",
        fields: {
            node: nodeInterface.nodeField,
            viewer: {
                type: new g.GraphQLObjectType({
                    name: "Viewer",
                    fields: {
                        id: { type: new g.GraphQLNonNull(g.GraphQLID) },
                        model1: {
                            args: connectionArgs,
                            type: new g.GraphQLObjectType({
                                name: "Model1Connection",
                                fields: {
                                    edges: {
                                        type: new g.GraphQLNonNull(new g.GraphQLList(new g.GraphQLObjectType({
                                            name: "Model1ConnectionEdge",
                                            fields: {
                                                node: {
                                                    type: new g.GraphQLObjectType({
                                                        name: "Model1",
                                                        fields: {
                                                            id: { type: new g.GraphQLNonNull(g.GraphQLID) },
                                                            field1: { type: g.GraphQLString },
                                                            model2: {
                                                                args: { where: { type: new g.GraphQLNonNull(where) } },
                                                                type: new g.GraphQLObjectType({
                                                                    name: "Model2",
                                                                    fields: {
                                                                        field2: { type: g.GraphQLInt },
                                                                        id: {
                                                                            type:
                                                                            new g.GraphQLNonNull(g.GraphQLID),
                                                                        },
                                                                    },
                                                                    interfaces: [nodeInterface.nodeInterface],
                                                                }),
                                                            },
                                                        },
                                                        interfaces: [nodeInterface.nodeInterface],
                                                    }),
                                                },
                                            },
                                        }))),
                                    },
                                    pageInfo: {
                                        type: new g.GraphQLObjectType({
                                            name: "Model1ConnectionPageInfo",
                                            fields: {
                                                hasNextPage: { type: g.GraphQLBoolean },
                                            },
                                        }),
                                    },
                                },
                            }),
                        },
                    },
                    interfaces: [nodeInterface.nodeInterface],
                }),
            },
        },
    }),
});
export default schema;
