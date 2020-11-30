function createArray (size, value ) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(value);
    }

    return array;
}

const x = createArray(3, 'a');
