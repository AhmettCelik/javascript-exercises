const fibonacci = function(num) {

    num = Number(num);

    if(num < 0) return 'OOPS';
    if(num == 1) return 1;

    let firstNum = 0;
    let secondNum = 1;
    let lastNum = 0;

    for(let i = 1; i < num; i++) {
        lastNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = lastNum;
    }

    return lastNum;
};

// Do not edit below this line
module.exports = fibonacci;
