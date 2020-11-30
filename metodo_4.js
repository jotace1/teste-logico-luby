function ConvertObject([[key1, value1], [key2, value2]]){
    const Objeto = {}

    Objeto[key1]= value1;
    Objeto[key2]=value2;

    return Objeto;
}

x = ConvertObject([['c', 2],['d',4]]);

console.log(x);