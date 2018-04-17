'use strict';
module.exports = function getZerosCount(number) {
    let numberOfZeros = 0;
    for(let i = 5; i  < number; i *= 5){
      numberOfZeros += Math.floor(number / i);
    }

    return numberOfZeros;
}
