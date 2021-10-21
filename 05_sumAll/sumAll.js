const sumAll = function(num1, num2) {
    let sum = 0;
    let aux = 0;

    if (num1 < 0 || num2 < 0 
        || typeof(num1) !== 'number' 
        || typeof(num2) !== 'number') {
            return "ERROR";
        }

    if (num1 > num2) {
        aux = num1;
        num1 = num2;
        num2 = aux;
    }

    for (let index = num1; index <= num2; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
