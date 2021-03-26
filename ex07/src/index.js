let numberArray = new Set ([9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5]);
// Only change code below this line
let uniqueArray = [];
for(let set of numberArray) {
    uniqueArray.push(set);
}
// Only change code above this line
uniqueArray.sort((a,b) => a - b);
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };
