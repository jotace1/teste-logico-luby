const input = [[1, 2, 3, 4, 5], 2];

let output = [];

let valueToDivide = 0;

const x = input.map(value => {
    if(typeof(value) == 'object') {
        return value;
    } else {
        valueToDivide = value;
    };
});

const timesToDivide = Math.ceil(input[0].length/2);
let j = 0;
let k = valueToDivide;

for(let i = 0; i<timesToDivide; i++){
    
    const y = input[0].slice(j,k);
    output.push(y);

    j = j + 2;
    k = k + 2;
}

console.log(output);