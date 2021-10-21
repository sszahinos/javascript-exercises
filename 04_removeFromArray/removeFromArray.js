const removeFromArray = function(arr, ...args) {
    let index = -1;

    args.forEach( (arg) => {
        index = arr.indexOf(arg);
        if (index > -1) {
            arr.splice(index, 1);
        }
        index = -1;
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
