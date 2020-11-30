const input =[[6, 8], [8, 9]];
 
let output = [];

for (let i = 0; i < input[0].length; i++) {
    for(let j = 0; j < input[1].length; j++) {
        if (input[0][i] === input[1][j]){
            output.push(input[0][i]);
            
        } 
    }
};

console.log(output);