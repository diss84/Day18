// Only change code  below this line
let one = new Set([1, 2, 3, 4, 5]); // setOne
let two = new Set([6, 4, 3, 2]); // setTwo
let unionSet = new Set([...one, ...two]); // unionset
let intersectionSet = new Set([...one].filter((x) => two.has(x))); // intersectionset
let differenceSet = new Set([...one].filter((x) => !two.has(x))); // differenceset
// Only change code above this line
console.log(one); // {1, 2, 3, 4, 5}
console.log(two); // {6, 4, 3, 2 }
console.log(unionSet); // {1, 2, 3, 4, 5, 6 }
console.log(intersectionSet); // {2, 3, 4 }
console.log(differenceSet); // {1, 5 }

module.exports = { unionSet, intersectionSet, differenceSet };