/**
 * Insertion sort 
 * builds up the sort by gradually creating a large left half which is always sorted 
 * wer are taking an element one at a time and inserting it in the correct place.
 * ============INSERTION SORT PSEUDOCODE==========
 * 1 ) Start by picking the second element in the array
 * 2 ) Now compare the second element with the one before it and swap if necessary
 * 3 )Continue to the next element and if it is the incorrect order iterate through the sorted portion (i.e the left side) to place the element in the correct place.
 * 4 ) Repeat until the array is sorted .
 * 
 */

function insertionSort(arr) {
  console.log('unsorted arr', arr);
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i]
    console.log('currentVal', currentVal);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log('arr[j]', arr[j]);

    }

    arr[j + 1] = currentVal;
    console.log('sorted arr', arr);

  }
  return arr;
}
insertionSort([2, 1, 9, 76, 4])