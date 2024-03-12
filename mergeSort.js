//============MERGE SORT =================
//OBJECTIVES
/** Understand the limitations of the sorting algorithms we've learned so far */
/**Faster sorts 
 * 1 ) there is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n^log n)
 * 2) there's a tradeoff between efficiency and simplicity
 * 3)the more efficient algorithm are much less simple and generally take longer to understand
 * 
 * ====MERGE SORT INTRODUCTION ====
 * 1 ) It's a combination of two things - merging and sorting
 * 2 )Exploits the fact that arrays of 0 or 1 element are always sorted
 * 3 ) works by decomposing(more we can say it's divide and conqure algorithm) an array into smaller arrays of 0 or 1 elements then building up a newly sorted array  
 * 
 * === Merging Arrays ===
 * 1 ) in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
 * 2 ) given two arrays which are sorted this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
 * 3 ) this function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it,
 * O(n+m) means you should visit each item in the array one time and if it was just O of N that means that you're going to it's linear time you visit each time 
 * 
 * ====Merging arrays Pseudocode ====
 * 1 ) Create an empty array take a look at the smallest values in each input array
 * 2 ) While there are still values we haven't looked at 
 *    #if the value in the first array is smaller than the value in the second array push the value in the first array into our result and move on to the next value in the first array
 *     #if the vlaue in the first array is larger than the value in the second array push the value in the second array push the value into our result and move on to the next value in the second array
 *    # Once we exhausted one array push in all remaining values from the other array .
*/
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log('merge', merge([1, 10, 50], [2, 14, 99, 100]));