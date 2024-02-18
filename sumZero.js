//naive solution 
//time complexity O(n^2) ,,space complexity O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]));

//REFECTOR 
//time complexity O(N) ... space complexity O(1)

function sumZeroRefactor(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZeroRefactor([-4, -3, -2, -1, 0, 1, 2, 3, 4]));
