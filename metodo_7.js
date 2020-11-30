const input =[[1,2,3,4],[1,2,3,4]];
 
let output = false;

for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] !== input[1][i]){
        output = false;
        break
    } else {
        output = true;
    }
};


console.log(output);

