

function double(a){
    return function(b){
        return a*b;
    }
}

const double2 = double(2);

console.log(double2(3));
console.log(double2(5));


// output = 6, 10 because of here 2 is remain constant which is value of a but value of b is changed every time.

