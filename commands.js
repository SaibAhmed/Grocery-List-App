const fs = require("fs");

const readfile = (fileName) => {
    try {
        return groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
    }
    catch (e) {
        return [];
    }
}

const add = (item, price) => {
    let groceryList = readfile("groceryList.json");


    let index = groceryList.findIndex((x) => x.item === item)
    if (index === -1) {
        groceryList.push({ item, price })
    }
    else {
        groceryList[index].price += price;
    }

    fs.writeFileSync("groceryList.json", JSON.stringify(groceryList));

}

const remove = (item) => {
    let groceryList = readfile("groceryList.json");

    const filteredList = groceryList.filter((x) => x.item !== item);
    console.log(filteredList);

    fs.writeFileSync("groceryList.json", JSON.stringify(filteredList));
}

const Prints = () => {
    let groceryList = readfile("groceryList.json");
    console.log(groceryList);


}

const priceOf = (item) => {
    let groceryList = readfile("groceryList.json");
    let index = groceryList.findIndex((x) => x.item === item);

    if (index !== -1) {
        console.log(` price of ${item} is ${groceryList[index].price}`);
    }
}

module.exports = {
    add,
    remove,
    Prints,
    priceOf
}

