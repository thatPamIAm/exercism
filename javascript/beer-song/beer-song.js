var BeerSong = function() {}

function twoBottlesMessage(num) {
  return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottle of beer on the wall.\n`
}

function oneBottleMessage(num) {
  return `${num} bottle of beer on the wall, ${num} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
}

function noBottlesMessage(num) {
  return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
}

function lotsOfBottlesMessage(num) {
  return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`
}

function recursiveVerse(start) {
  if (start > 2) {
    return recursiveVerse(start -1)
  }
}

BeerSong.prototype.verse = function(num){
  if (num === 2) {
    return twoBottlesMessage(num)
  } else if (num === 1){
    return oneBottleMessage(num)
  } else if (num === 0) {
    return noBottlesMessage(num)
  } else {
    return lotsOfBottlesMessage(num)
  }
}

BeerSong.prototype.sing = function(start, finish){

}

module.exports = BeerSong;
