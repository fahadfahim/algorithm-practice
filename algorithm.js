function addNumber(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now()
addNumber(1000000000)
var t2 = performance.now()
console.log(`Time it takes : ${(t2 - t1) / 1000} seconds`)

function addNthNumber(n) {
    return n * (n + 1) / 2;
}


var t1 = performance.now()
addNthNumber(1000000000)
var t2 = performance.now()
console.log(`Time it takes : ${(t2 - t1) / 1000} seconds`)

console.log(addNthNumber(1000000000)
);
