"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./..");
const interfaces_1 = require("./../__fixtures__/interfaces");
const schema_1 = require("./../__fixtures__/schema");
describe("Convert", () => {
    it("simple", () => {
        expect(__1.default(schema_1.default)).toBe(interfaces_1.default);
    });
});
