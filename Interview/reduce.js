const number = [1,2,3,4,5];

const sum = number.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 10)

console.log(sum);
