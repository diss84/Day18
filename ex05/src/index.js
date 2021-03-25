let shopingList = new Map();
// Only change code below this line
shopingList.set("Banana", 3);
shopingList.set("Pineapple", 5);
shopingList.set("Pear", 2);
shopingList.set("Carrot", 10);
shopingList.set("Apple", 1.5);

var arrKey = [], arrValue = [];
for (let value of shopingList) 
    arrKey.push(value[0]);
for (let value of arrKey) 
    console.log("groceries: " + value);

for (let value of shopingList) 
    arrValue.push(value[1]);
for (let value of arrValue) 
    console.log("amount: " + value);
for (let value of shopingList) 
    console.log(value);
    // Only change code above this line
module.exports = { shopingList, arrKey, arrValue};