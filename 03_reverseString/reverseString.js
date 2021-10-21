const reverseString = function(str) {
    characters = str.split("");
    let phrase = "";

    for (let index = characters.length - 1; index >= 0; index--) {
        phrase += characters[index];
    }

    return phrase;
};

// Do not edit below this line
module.exports = reverseString;
