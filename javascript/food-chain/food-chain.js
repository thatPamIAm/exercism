var FoodChain = function() {
  this.animals = ['nothing', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'],
  this.firstVerse = 'I know an old lady who swallowed a '
  this.secondVerse = {
    'spider': 'It wriggled and jiggled and tickled inside her.\n',
    'bird': 'How absurd to swallow a bird!\n',
    'cat': 'Imagine that, to swallow a cat!\n',
    'dog': 'What a hog, to swallow a dog!\n',
    'goat': 'Just opened her throat and swallowed a goat!\n',
    'cow': 'I don\'t know how she swallowed a cow!\n',
  }
  this.lastVerse = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
}

FoodChain.prototype.verse = function(input) {
  var animal = this.animals[input]
  
  if (input == 1) {
    return this.firstVerse + animal + '.\n' + this.lastVerse;
  } else if (input < 8 && input > 1) {
    return this.firstVerse + animal + '.\n' + this.secondVerse[animal] + 'She swallowed the spider to catch the fly.\n' + this.lastVerse;
  }
    //create function with loop based on placement of animal in array
    // 'She swallowed the ${animal} to catch the ${animal2}
}

module.exports = FoodChain;
