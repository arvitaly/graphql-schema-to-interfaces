import { spawnSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";
import createAPI, { IAPI } from "./../__fixtures__/api";
import Main from "./../main";
describe("bin", () => {
    it("github schema from file", async () => {
        const outPath = join(__dirname, "./../__fixtures__", "interfaces.ts");
        const schemaPath = join(__dirname, "./../__fixtures__", "schema.json");
        const main = new Main(outPath, {
            schema: schemaPath,
        });
        await main.run();
        expect("" + readFileSync(outPath)).toMatchSnapshot();
    });
    let api: IAPI;
    beforeAll(async () => {
        api = await createAPI();
    });
    afterAll(() => {
        // api.server.close();
    });
    it("schema from server", async () => {
        const outPath = join(__dirname, "./../__fixtures__", "interfaces2.ts");
        const main = new Main(outPath, {
            api: api.address,
        });
        await main.run();
        expect("" + readFileSync(outPath)).toMatchSnapshot();
    });
});
