const input = [[5,4,3,2,5],5,3];


let removeValues = [];

const x = input.map(value => {
    if(typeof(value) == 'object') {
        return value;
    } else {
        removeValues.push(value);
    };
});

let array = x.filter(value => typeof(value) == 'object')
array = array[0];


for (let i = 0; i <= array.length; i++) {
    if(array[i] ===removeValues[0]){
        array.splice(array.indexOf(array[i]), 1);
    } else if(array[i] ===removeValues[1]){
        array.splice(array.indexOf(array[i]), 1);
    }
}

console.log(array);

