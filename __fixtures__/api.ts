import freeport from "freeport-es6";
import schema from "./schema";
import express = require("express");
import graphqlHTTP = require("express-graphql");
import { addMockFunctionsToSchema } from "graphql-tools";
import { Server } from "http";
export default async () => {
    const port = await freeport();
    const app = express();
    addMockFunctionsToSchema({ schema });
    // tslint:disable-next-line:space-before-function-paren
    app.use("/graphql", (...args: any[]) => {
        return graphqlHTTP({
            graphiql: true,
            schema,
        }).apply(null, args);
    });
    const server: Server = await new Promise<Server>((resolve, reject) => {
        const serverL = app.listen(port, (err: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(serverL);
        });
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
        address: "http://127.0.0.1:" + port + "/graphql",
        server,
    };
};
export interface IAPI {
    address: string;
    server: Server;
}
