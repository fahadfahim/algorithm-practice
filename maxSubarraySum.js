/*
write a function called maxSubarraySum which 
accepts an array of integers and a number 
called n. The function should calculate the 
maximum sum of n consecutive elements in the array
*/
//time complexity O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


function maxSubarraySumRef(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    console.log('arr[i]', arr[i]);
    maxSum += arr[i];
    console.log('maxSum', maxSum);
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

console.log(maxSubarraySumRef([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
