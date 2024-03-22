/**
 * Question : Define a function that returns n lines of pascal's triangle.
 */
const initApp = () => {
    const ptArray = pascalsTriangle(4)
    domTriangle(ptArray)
}

document.addEventListener('DOMContentLoaded', initApp)

const pascalsTriangle = (rows = 3) => {
    if (rows < 3) rows = 3;
    //will be array of array 
    const stackArray = [];
    let i = 1;
    while (i <= rows) {

        //will have all of the values in each individual stack 
        const rowArray = []
        let x = 0;
        let rowValue;

        //this is the inner loop , this loop builds each row 
        while (x < i) {
            //now we have to think about the pyramid that starts with one at the beginning of each row also ends with one 
            if (!x || x === i - 1) { rowValue = 1 }
            else {
                //now we are refering the outer array full pyramid array we need to get the values from previous row and the row has been saved into the stack array here x is our inner loop 
                console.log('1st', parseInt(stackArray[i - 2][x]));
                console.log('2nd', parseInt(stackArray[i - 2][x - 1]));
                rowValue = (parseInt(stackArray[i - 2][x]) + parseInt(stackArray[i - 2][x - 1]))
                console.log('rowValue', rowValue);
            }
            rowArray.push(rowValue);
            x++;
            console.log('x', x);
        }
        //which would be our row for our pyramid
        console.log('rowArray', rowArray);
        stackArray.push(rowArray);
        i++;
        console.log('i', i);
    }
    console.log('stackArry', stackArray);
    return stackArray;
}

const domTriangle = (arr) => {
    const main = document.querySelector('.main')

    arr.forEach(subArr => {
        const row = buildRow(subArr);
        main.appendChild(row);
    })
}

const buildRow = (arr) => {
    const row = document.createElement('div')
    row.classList.add('row')
    arr.forEach(el => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.textContent = el
        row.appendChild(square)
    })
    return row
}