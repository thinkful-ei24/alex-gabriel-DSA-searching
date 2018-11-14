/*
 * Min number and an index
 * Loop through array from beginning, incrementing index and minimum number
 * Loop through the array from the end
 * Return largest number
 */

const profitNumbers = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(array) {
  let minNum = array[0];
  let index = 0;

  // Loop from beginning
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < minNum) {
      minNum = element;
      index = i;
    }
  }

  // Loop from end
  let maxNum = array[index];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (maxNum < element) {
      maxNum = element;
    }
  }

  return maxNum - minNum;
}

function main() {
  console.log(maxProfit(profitNumbers));
}

main();
