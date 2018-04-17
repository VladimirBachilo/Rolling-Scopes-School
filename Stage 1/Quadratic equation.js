'use strict'
module.exports = function solveEquation(equation) {
    let array = equation.split(' ');
    let firstArg = array[0];
    let secondArg = array.slice(3, 5).join('');
    let thirdArg = array.slice(7, 10).join('');

    let discriminant = secondArg * secondArg - 4 * firstArg * thirdArg;

    let x1 = (-secondArg + Math.sqrt(discriminant)) / 2 / firstArg;
    let x2 = (-secondArg - Math.sqrt(discriminant)) / 2 / firstArg;

    return [Math.round(Math.min(x1, x2)), Math.round(Math.max(x1, x2))];
}
