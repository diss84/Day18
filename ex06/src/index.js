let rockStar = new Map();
// Only change code below this line
rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

var newRock = new Map(
    [...rockStar]
    .filter(([k, v]) => k[0] > 'a' )
  );
  // Only change code above this line

console.log(newRock);
module.exports = { rockStar, newRock };