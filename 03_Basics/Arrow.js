const user = {
    username: "Thomas",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       console.log(this);
        
    }
        
}

// user.welcomeMessage();

// user.username = "Ramesh"
// user.welcomeMessage();

//console.log(this);

// function one(){
//    let username = "Thomas"
//    console.log(this.username);
   

//     console.log(this);
    
// }
// one();

// const chai = function(){
//     let username = "Ramesh"
//     console.log(this.username);
// }

const chai = () => {                  // arrow function 
    let username = "Ramesh"
    console.log(this);
}

//chai();


    // const addTwo = (num1,num2) => {  
    // return num1 + num2;
    // }

    // const addTwo = (num1,num2) =>  num1 + num2
    
     const addTwo = (num1,num2) =>  (num1 + num2)
    
console.log(addTwo(3,4));

// jab arguments kai baar ho to hume utne hi parameter bananae padega isse bachne
//  ke liye hum rest ka use karte hai ....... ager .... function ka parameter space main lage to wo rest operator hai

// --------------------------- rest function ------------------------------------------------

function abcd(...val){
    console.log(val);  
    
}
abcd(1,2,3,4,5,6)

// ------------------------ return function -----------------------------------------

// return hameesha function ke ander use karte hai

// return ka mtlb hai jaha se aye ho whi daal denge