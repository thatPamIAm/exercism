var Pangram = function(string) {
  this.string = string;
}

Pangram.prototype.createABC = function() {
   var abc = "abcdefghijklmnopqrstuvwxyz"
   abc = abc.split("")
   return abc
}

Pangram.prototype.checkLetter = function(letter, arr) {
   for(let i = 0; i <= arr.length - 1; i++) {
     if(letter === arr[i]) {
     arr.splice(i, 1)
     }
   }
}

Pangram.prototype.isPangram = function() {
  if (this.string === undefined) {
    return false
  } else {
   let abc = this.createABC()
   let str = this.string.toLowerCase().split(" ").join("").split("")
   for (let i = 0; i <= str.length; i++){
     this.checkLetter(str[i], abc)
   }
    if (abc.length === 0) {
     return true
    } else {
     return false
   }
  }
}



module.exports = Pangram;
