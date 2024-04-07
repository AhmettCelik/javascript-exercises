const reverseString = function(input) {
    let reverseArray = [];
    for(let i = input.length-1 ; i > -1 ; i--) {
        reverseArray.push(input[i]);
    }
    let newInput = reverseArray.join("");
    return newInput;
};

// Do not edit below this line
module.exports = reverseString;
