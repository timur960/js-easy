function reverseWithoutNumbers(str) {
  const chars = [];
  const numbers = "0123456789"
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (numbers.includes(str[i])) {
      continue;
    }
    chars.push(str[i]);
  }
  console.log(111);

  return chars.join('');
  }
  module.exports = reverseWithoutNumbers;
