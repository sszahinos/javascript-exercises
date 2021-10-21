const fibonacci = function(num) {
    fibo = 1;
    lastNum = 0;
    aux = 0;

    if (num < 0) {
        return 'OOPS';
    }

    for (let index = 1; index < num; index++) {
        aux = fibo;
        fibo += lastNum;
        lastNum = aux;
    }

    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
