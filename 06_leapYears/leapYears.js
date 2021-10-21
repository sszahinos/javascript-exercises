const leapYears = function(year) {
    itsLeap = false;

    if (year % 4 === 0 && (
            year % 100 !== 0 || 
            year % 400 === 0 )) {
        itsLeap = true;
    }

    return itsLeap;

};

// Do not edit below this line
module.exports = leapYears;
