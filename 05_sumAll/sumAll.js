const sumAll = function(firstNum, secondNum) {
    let result = 0;

    if(secondNum > firstNum) {
        for(let i = firstNum ; i <= secondNum ; i++) {
            result += i;
        }
    }else if(firstNum > secondNum){
        for(let i = secondNum ; i <= firstNum ; i++) {
            result += i;
        }
    }

    if((typeof(firstNum) == "number" && typeof(secondNum) == "number") && !(firstNum < 0 || secondNum < 0)) {
        return result;
    }else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
