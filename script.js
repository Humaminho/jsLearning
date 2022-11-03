function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum+= arg;
    };
    return sum;
};
console.log(sum(4,25,1000,475,12))

function findMax() {
    let max= -Infinity;
    for ( i=0; i<arguments.length; i++) {
        if ( arguments[i] > max) max = arguments[i];
    };
    return max;
}

