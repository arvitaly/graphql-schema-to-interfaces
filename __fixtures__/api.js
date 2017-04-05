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
const freeport_es6_1 = require("freeport-es6");
const schema_1 = require("./schema");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_tools_1 = require("graphql-tools");
exports.default = () => __awaiter(this, void 0, void 0, function* () {
    const port = yield freeport_es6_1.default();
    const app = express();
    graphql_tools_1.addMockFunctionsToSchema({ schema: schema_1.default });
    // tslint:disable-next-line:space-before-function-paren
    app.use("/graphql", function (req, res) {
        return graphqlHTTP({
            graphiql: true,
            schema: schema_1.default,
        }).apply(this, arguments);
    });
    const server = yield new Promise((resolve, reject) => {
        const serverL = app.listen(port, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(serverL);
        });
    });
    yield new Promise((resolve) => setTimeout(resolve, 500));
    return {
        address: "http://127.0.0.1:" + port + "/graphql",
        server,
    };
});
