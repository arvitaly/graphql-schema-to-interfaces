#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const main_1 = require("./main");
commander
    .usage("[options] [file ...]")
    .option("-s, --schema <type>", "JSON GraphQL-schema")
    .option("-a, --api <type>", "GraphQL-server address")
    .option("-g, --graphqlSchema <type>", "GraphQL instance of schema")
    .option("-o, --optional-fields", "IsOptionalFields - to make all output fields required or as is")
    .parse(process.argv);
if (!commander.args[0]) {
    throw new Error("First argument should be name of output-file");
}
const main = new main_1.default(commander.args[0], commander);
main.run();
