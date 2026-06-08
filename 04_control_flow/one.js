// if
//const isUserLoggedIn = true
// const temperature = 41

const { use } = require("react")

// if(temperature>50) {
//    console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }

// console.log("Execute");

// 2<=2
// 3 !=2
// 2=="2"
// <, >, <=,>=, ==, != ,===, !==

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User can ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000
// if (balance > 500) console.log("test"

// if(balance<500){
//     console.log("lese than 500");
// } else if(balance<750){
//     console.log("lese than750");
// }else if(balance<900){
//     console.log("lese than900");
// }else{
//     console.log("balance is greater than 900");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}


function getGrade(score){
    if(score >= 90 && score <= 100){
        return "A";
    } else if(score >= 80 && score < 90){
        return "B";
    }
    else if(score >= 70 && score <= 89){
        return "C";
    }
    else{
        return "Invalid";
    }
}
console.log(getGrade(78));

// Rock paper secissors logic 

function rps(user,computer){

    if(user === "rock" && computer === rock)
        return "user";
    rps("rock","scissor");
}