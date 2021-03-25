// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for (let x = 1; x <= 5; x++) {
        yield x;      
    }
}
function* insideGenerator2() {
    for (let x = 10; x <= 15; x++) {
        yield x;      
    }
}
function* insideGenerator3() {
    for (let x = 6; x <= 9; x++) {
        yield x;      
    }
}

const iterator = myGenerator();
var fifteenArray = [];

for (let i = 1; i <= 16; i++) {
    var temp = iterator.next().value;
    if (temp) 
        fifteenArray.push(temp + "#");
    else
        fifteenArray.push(temp + "!");
}
// Only change code above this line
fifteenArray = fifteenArray.toString()
console.log(fifteenArray);
module.exports = { fifteenArray, myGenerator};