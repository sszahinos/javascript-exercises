const palindromes = function (phrase) {
    phrase = phrase.replace(/[^a-z]+/gi, '').toLowerCase(); //removes any no-letter

    return phrase == phrase.split("").reverse().join("");

};

// Do not edit below this line
module.exports = palindromes;
