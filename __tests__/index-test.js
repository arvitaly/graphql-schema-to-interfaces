"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./..");
const schema_1 = require("./../__fixtures__/schema");
describe("Convert", () => {
    it("simple", () => {
        expect(__1.default(schema_1.default)).toMatchSnapshot();
    });
});
