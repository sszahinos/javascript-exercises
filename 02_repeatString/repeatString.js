const repeatString = function(word, iterations) {
    repeated = word;
    
    if (iterations === 0) {
        return "";
    } else if (iterations < 0) {
        return "ERROR";
    }

    for (let index = 0; index < iterations - 1; index++) {
        repeated += word;
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
