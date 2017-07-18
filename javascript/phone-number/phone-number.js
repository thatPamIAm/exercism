var PhoneNumber = function(number) {
  this.phoneNumber = number;
};

function valFirstNumber(num) {
  var reg = new RegExp('^[2-9]+$');
  return reg.test(num)
}

PhoneNumber.prototype.number = function() {
  var number = this.phoneNumber.replace(/[^\d]/g, '')

  if (number.length < 10 || number.length > 11) {
    return null
  } else if (number.length === 11 && number[0] != 1) {
    return null
  } else if (number.length === 11 && number[0] == 1) {
    return number.slice(1)
  } else if (!valFirstNumber(number[0]) || !valFirstNumber(number[3])) {
    return null
  } else {
    return number
  }
}

module.exports = PhoneNumber;
