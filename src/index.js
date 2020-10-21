module.exports = function toReadable(number) {

  let result = '';
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let twen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  number += '';

  if (number.length === 3) {
    result = numbers[number[0]] + ' hundred';
    if (number[1] === '1') {
      result += ' ';
      result += twen[number[2]];
    } else {
      if (number[1] !== '0') {
        result += ' ';
        result += tens[number[1]];
      }
      if (number[2] !== '0') {
        result += ' ';
        result += numbers[number[2]];
      }
    }

  } else if (number.length === 2) {
    if (number[0] === '1') {
      result += twen[number[1]];
    } else {
      result += tens[number[0]];
      if (number[1] !== '0') {
        result += ' ';
        result += numbers[number[1]];
      }
    }

  } else if (number.length === 1) {
    result = numbers[number[0]];
  }

  return result;
}

