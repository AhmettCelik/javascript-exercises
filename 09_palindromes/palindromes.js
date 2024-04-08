const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^\w]/g, "");
    let arr = [];
    for(let i = string.length-1; i >= 0; i--) {
        arr.push(string[i]);
    }
    let newString = arr.join("");
    return newString == string
};

// Do not edit below this line
module.exports = palindromes;
