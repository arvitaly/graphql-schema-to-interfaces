import * as g from "graphql";
import { connectionArgs, connectionDefinitions } from "graphql-relay";

const model1 = new g.GraphQLObjectType({
    name: "Model1",
    fields: {
        field1: {
            args: {
                arg1: { type: g.GraphQLString },
            }, type: g.GraphQLString,
        },
    },
});
const model1s = connectionDefinitions({
    nodeType: model1,
});
const viewer = new g.GraphQLObjectType({
    name: "Viewer",
    fields: {
        model1: { type: model1 },
        model1s: { args: connectionArgs, type: model1s.connectionType },
    },
});
const query = new g.GraphQLObjectType({
    fields: {
        viewer: {
            type: viewer,
        },
    },
    name: "Query",
});
/*const addModel1 = new g.GraphQLObjectType({
    name: "AddModel1",
    fields: {
        input: {
            type: new g.GraphQLInputObjectType({
                name: "AddModel1Input",
                fields: {
                    field1: { type: g.GraphQLString }
                }
            })
        }
    }
});
const mutation = new g.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addModel1: { type: addModel1 }
    },
});*/
const schema = new g.GraphQLSchema({
    query,

});
export default schema;
