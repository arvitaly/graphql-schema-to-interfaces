import { readFileSync } from "fs";
import generate from "./..";
import interfaces1 from "./../__fixtures__/interfaces";
import schema from "./../__fixtures__/schema";
describe("Convert", () => {
    it("simple", () => {
        expect(generate(schema)).toBe(interfaces1);
    });
});
