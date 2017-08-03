var Cipher = function(key) {
  this.key = noCaps(key) || 'abcdefghij',
  this.reverseKey = ''
}

function noCaps(key) {
  var pat = /^[a-z]+$/;
  if (pat.test(key)) {
    return key;
  } else {
    throw Error('Bad key');
  }
}

Cipher.prototype.encode = function(string) {
  this.reverseKey = string;
  return this.key;
};

Cipher.prototype.decode = function(num1, num2) {
  return this.reverseKey;
};

module.exports = Cipher;
