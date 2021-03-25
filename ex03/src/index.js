// Only change code below this line
function* myGenerator() {
    yield* [1,2,3,4,5];
    yield* 'Arena';
    yield* arguments;
}

const iterator = myGenerator(6,7,8);
var generatorArray = [];
for (let i = 0; i < 13; i++) {
    generatorArray.push(iterator.next().value);
}


for (let i = 0; i < generatorArray.length; i++) {
    if (i == 0) {
        console.log("[ " + generatorArray[i]);
    } else if ( i == generatorArray.length - 1) {
        console.log(generatorArray[i] + " ]");
    } else {
        console.log(generatorArray[i] + ", ");
    }
}
// Only change code below this line
module.exports = { generatorArray, myGenerator};