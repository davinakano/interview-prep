/*
*   Two Number Sum
*
*   Write a function that takes a non-empty array of distinct integers and an integer representing the target sum.
*   If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
*   If no two numbers sum up to the target sum, the function should return an empty array.
*   NOTE: you cannot add a single integer to itself to obtain the target sum
*         you can assume that there will be at most one pair of numbers summing up to the target sum.
*/

function twoNumberSum(array, targetSum) {
  if (array.length < 2) return [];

  let index = 0;
  let movingIndex = 1;

  while (index < array.length) {
    if (array[index] + array[movingIndex] === targetSum) {
      return [array[index], array[movingIndex]];
    };

    movingIndex++;

    if (movingIndex >= array.length) {
      index++;
      movingIndex = index + 1;
    }
  }

  return [];
}

// [-1, 11]
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// [4, 6]
console.log(twoNumberSum([4, 6], 10));

// [4, 1]
console.log(twoNumberSum([4, 6, 1], 5));

// []
console.log(twoNumberSum([14], 15));

// []
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));