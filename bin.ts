import commander = require("commander");
import Main from "./main";
commander
    .usage("[options] [file ...]")
    .option("-s, --schema <type>", "JSON GraphQL-schema")
    .option("-a, --api <type>", "GraphQL-server address")
    .option("-o, --optional-fields", "IsOptionalFields - to make all output fields required or as is")
    .parse(process.argv);

if (!commander.args[0]) {
    throw new Error("First argument should be name of output-file");
}
const main = new Main(commander.args[0], commander);
main.run();
