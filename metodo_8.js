const input = [1, 2, [3], [4, 5]];

let output = [];

input.forEach(value => {
    if (typeof(value) == 'object') {
        value.map(item => {
            output.push(item);
        })
    } else {
        output.push(value);
    }
})

console.log(output);