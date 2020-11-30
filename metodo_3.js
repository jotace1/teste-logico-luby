x = [1, 2, 3, 4, 'ab', null, 4];

y = x.filter(item => typeof(item) == 'number' || typeof(item) == 'string' && item.length)

console.log(y);