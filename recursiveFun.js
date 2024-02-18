function countDown(num) {
  if (num <= 0) {
    console.log('All Done...!');
    return;
  }
  console.log(num);
  num--;
  countDown(num)
}
// countDown(5);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(5))


//factorial non recursive way
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

//factorial recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//console.log(factorial(4))

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

//console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


//collectOdd values pure recursive way
function collectOddValues(arr) {
  let newArray = [];

  if (arr.length === 0) {
    return newArray;
  }

  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }
  newArray = newArray.concat(collectOddValues(arr.slice(1)));
  return newArray;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//tips
//when you are using array and your trying to do a pure recursive solution without a helper method
//we can use for arrays use methods like slice, the spread operator
//and concate that make copies of arrays so you do not mutate them



/**MORE RECURSION **/

// Recursion CHALLENGE Problem Set Solutions Part 2
// capitalizeWords Solution

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;

}
// nestedEvenSum Solution

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
// capitalizeFire Solution

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
// stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}