"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// tslint:disable-next-line:no-var-requires
exports.default = graphql_1.buildClientSchema(require("./../__fixtures__/schema.json").data);
