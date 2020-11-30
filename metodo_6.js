const input = [1,2,3,3,2,4,5,4,7,3];

let output = [];

for (let i = 0; i < input.length; i++) {
    if (!output.includes(input[i])){
        output.push(input[i]);
    }
}

console.log(output);