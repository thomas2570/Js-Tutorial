// closer 
function outerfunction(){

    let outervariable = "I am outside!";

    function innerfunction(){
        console.log(outervariable);

    }
    return innerfunction;
}
const closerFunction = outerfunction();
closerFunction(); // Output: I am outside! 

function counter(){
    let count = 0;
     return {
        increment : function(){
            count++;
            return count;
        },
        decrement : function(){
            count--;
            return count;
        },
        display : function(){
            let message = `Current count is: ${count}`;
            return message;
        }
    }
}

const mycounter = counter();
console.log(mycounter.increment());
console.log(mycounter.decrement());
console.log(mycounter.display());