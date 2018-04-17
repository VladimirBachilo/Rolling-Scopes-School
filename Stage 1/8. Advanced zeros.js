'use strict';
module.exports = function getZerosCount(number, base) {
    let m = 2;
    let fact = [];
    while (m < base) {
        while (base % m == 0) {
            fact.push(m);
            base /= m;
        }
        m++;
    }
    if (base > 1) {
        fact.push(base);
    }

    let numberOfZeros = [];
    fact.sort();
    for (let i = 0; i < fact.length; i++) {
        let counter = 0;
        for (let j = 0; j < fact.length; j++) {
            if (fact[i] == fact[j]) {
                counter++;
            }
        }
        let result = 0;
        let j = fact[i];
        while (true) {
            result += (number - number % j) / j;
            j *= fact[i];
            if (j > number) {
                break;
            }
        }
        numberOfZeros.push((result - result % counter) / counter);
    }
    return Math.min.apply(Math, numberOfZeros);;
}
