const yargs = require('yargs');
let command = yargs.argv._[0];
let item = yargs.argv.item;
let price = yargs.argv.price;
const commands = require("./commands");
const fs = require('fs');

if (command === "add") {
    if (item && price) {
        commands.add(item, price);
    }
}
else if (command === "remove") {
    if (item) {
        commands.remove(item);
    }
}
else if (command === "print") {
    commands.Prints();
}
else if (command === "priceOf") {
    if (item) {
        commands.priceOf(item);
    }
}
else {
    console.log("ok , this doesnt make any sense");
}
