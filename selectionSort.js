//selection sort pseudocode
/**
 * 1 ) store the first element as the smallest value you've seen so far.
 * 2 ) compare this item to the next item in the array until you find a smaller number
 * 3 ) if a smaller number is found designated the smaller number to be the new minimum and continue until the end of the array
 * 4 ) if the minimum is not the value (index) you initially began with swap the two values
 * 5 ) repeat this with the next element until the array is sorted.
 */

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    console.log('arr[i]: ', arr[i]);
    console.log('lowest .. i', lowest)
    for (var j = i + 1; j < arr.length; j++) {
      console.log('arr[j]', arr[j]);
      if (arr[j] < arr[lowest]) {
        console.log('arr[lowest]', arr[lowest]);
        lowest = j;
        console.log('lowest', lowest)
      }
    }
    // console.log('****************')
    // console.log('before swapping arr', arr);
    // console.log('swapping to:');
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }

    // console.log('after swapping arr', arr);
    // console.log('****************')
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17])