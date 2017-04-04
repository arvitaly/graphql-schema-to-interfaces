import { readFileSync } from "fs";
import generate from "./..";
import schema from "./../__fixtures__/schema";

describe("Convert", () => {
    it("simple", () => {
        expect(generate(schema)).toMatchSnapshot();
    });
});
