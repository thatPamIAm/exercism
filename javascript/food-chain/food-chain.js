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
  this.lastVerse = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
}

FoodChain.prototype.verse = function(input) {
  var animal = this.animals[input]

  if (input == 1) {
    return this.firstVerse + animal + '.\n' + this.lastVerse;
  } else if (input < 8 && input > 1) {
    return this.firstVerse + animal + '.\n' + this.secondVerse[animal] + this.swallow(input) + this.lastVerse;
  } else if (input == 8) {
    return 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
  }
}

FoodChain.prototype.verses = function(first, last) {
  var verses = '';

    for(var i = first; i < last + 1; i++) {
      verses += this.verse(i) + '\n';
    }

  return verses
}

FoodChain.prototype.swallow = function(input) {
  var verses = '';

    for(var i = input; i > 1; i--) {
      if(i === 3) {
        verses += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n'
      } else {
        verses += `She swallowed the ${this.animals[i]} to catch the ${this.animals[i - 1]}.\n`
      }
    }
    
  return verses
}

module.exports = FoodChain;
