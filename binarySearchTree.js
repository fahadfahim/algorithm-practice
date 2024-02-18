function binarySearch(arr, elem) {
    //first we need to define the start
    var start = 0;

    //then we need to define the end
    var end = arr.length - 1;
    if (end < elem) return -1;
    //then we need to define the middle

    var middle = Math.floor((start + end) / 2);

    //then we need to check if the middle element is equal to the element we are looking for in the middle
    while (arr[middle] !== elem) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

console.log(binarySearch([2, 3, 5, 6, 7, 8, 9, 10], 9))