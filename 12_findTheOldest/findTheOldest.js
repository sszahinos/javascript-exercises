const findTheOldest = function(people) {
    const CURRENT_DATE = new Date();
    
    let oldestPerson = null;
    let yearsRecord = 0;
    let years = 0;
    

    people.forEach(person => {
        if (person.hasOwnProperty("yearOfDeath")) {
            years = person.yearOfDeath - person.yearOfBirth;
        } else {
            years = CURRENT_DATE.getFullYear() - person.yearOfBirth;
        }

        if (yearsRecord < years) {
            oldestPerson = person;
            yearsRecord = years;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
