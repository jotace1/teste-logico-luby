const array = [7, 8, 9, 10, 11, 12];

function invertedArray (array){

let arraySize = array.length - 1;

let newArray = [];

for (let i = 1; i <= array.length; i++){
    newArray.push(array[arraySize]);
    arraySize --;
}

return newArray;

}

const x = invertedArray(array);
