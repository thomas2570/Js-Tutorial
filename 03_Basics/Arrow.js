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

const chai = () => {
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

