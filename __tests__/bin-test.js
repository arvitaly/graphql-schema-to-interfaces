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
const fs_1 = require("fs");
const path_1 = require("path");
const api_1 = require("./../__fixtures__/api");
const main_1 = require("./../main");
describe("bin", () => {
    it("github schema from file", () => __awaiter(this, void 0, void 0, function* () {
        const outPath = path_1.join(__dirname, "./../__fixtures__", "interfaces.ts");
        const schemaPath = path_1.join(__dirname, "./../__fixtures__", "schema.json");
        const main = new main_1.default(outPath, {
            schema: schemaPath,
        });
        yield main.run();
        expect("" + fs_1.readFileSync(outPath)).toMatchSnapshot();
    }));
    let api;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        api = yield api_1.default();
    }));
    afterAll(() => {
        api.server.close();
    });
    it("schema from server", () => __awaiter(this, void 0, void 0, function* () {
        const outPath = path_1.join(__dirname, "./../__fixtures__", "interfaces2.ts");
        const main = new main_1.default(outPath, {
            api: api.address,
        });
        yield main.run();
        expect("" + fs_1.readFileSync(outPath)).toMatchSnapshot();
    }));
});
