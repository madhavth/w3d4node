function add(a,b){
    return a +b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(x,y) {
    if(y === 0) {
        throw Error('cant divide by zero');
    }
    return x/y;
}

const pi = 3.14;

module.exports = {
    add, subtract, multiply, divide, pi
};