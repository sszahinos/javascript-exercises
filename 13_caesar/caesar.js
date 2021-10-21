const ALPHABET_LOW = "abcdefghijklmnopqrstuvwxyz",
    ALPHABET_UPP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const caesar = function(text, shift) {


    for (let index = 0; index < text.length; index++) {
        if (ALPHABET_LOW.includes(text.charAt(index))) {
            ALPHABET_LOW.indexOf(text.charAt(index))
            text = text.charAt(index).replace(ALPHABET_LOW.charAt(index + shift));
        
        } else if (ALPHABET_UPP.includes(text.charAt(index))) {
            ALPHABET_UPP.indexOf(text.charAt(index)) + shift;
            text = text.charAt(index).replace(ALPHABET_UPP.charAt(index + shift));
        }
        
    }

    return text;
};

function findNewLetter(old, shift) {

}

// Do not edit below this line
module.exports = caesar;
