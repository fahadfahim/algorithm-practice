/**
 * ======QUICK SORT INTRO====
 * 1 ) Like merge sort , exploits the fact that arrays of 0 or 1 element are always sorted 
 * 2 ) Works by selecting one element (called pivot) and finding the index where the pivot should end up in the sorted array
 * 3 ) Once the pivot is positioned appropriately quick sort can applied on either side of the pivot
 * 
 * =====PIVOT HELPER =====
 * 1 ) In order to implement merge sort it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
 * 2 ) Given an array this helper function should designate an element as the pivot 
 * 3 ) it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot .
 * 4 ) the order of elements on either side of the pivot doesn't matter
 * 5 ) the helper should do this in place that is it should not create a new array
 * 6 ) when complete the helper should retrun the index of the pivot 
 * =====Picking a pivot =====
 * 1 ) the runtime of quick sort depends in part on how one selects the pivot .
 * 2 ) ideally the pivot should be chosen so that it's roughly the median value in the data set you're sorting
 * 3 ) for simplicity we'll always choose the pivot to be the first element(we'll talk about consequences of this letter)
 * =====PIVOT  PSUDOCODE====
 * 1 ) it will help to accept three arguments an array a start index and an end index (these can default to 0 and the array length minus 1, respectively)
 * 2 ) grab the pivot from the start of the array
 * 3 )store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * 4 ) loop through the array from the start until the end 
 *        ==if the pivot is greater than the current element increment the pivot index variable and then swap the current element with the element at the pivot index 
 * 5 ) swap the starting element (i.e the pivot) with the pivot index 
 */

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
            console.log('arr', arr)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

// pivot([8, 2, 1, 2, 3, 4, 5])
/**
 * =======Quicksort Pseudocode======
 * 1 ) call the pivot helper on the array
 * 2 ) when the helper returns to you the updated pivot index recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index
 * 3 ) your base case occurs when you consider a subarray with less than 2 elements
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

console.log(quickSort([9, 4, 1, 39, 20]));