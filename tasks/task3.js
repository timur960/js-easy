function sumArray(numbers) {
  console.log(111)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
module.exports = sumArray;