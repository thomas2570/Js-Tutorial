// Question -  one such question is that there is an array . You have to loop over that array and display only its original properties

Array.prototype.extraProperty = "Thomas"
const myNewArray = [1,2,3,4,5]

for(let v in myNewArray){
    console.log(v)
}

// solution - mtlb sir apne array ka prototype use karke uske ander extra property insert kar rakha hai to mujhe extra property ignore karke original array print karna hai 

for(let v in myNewArray){
   if(myNewArray.hashOwnProperty(v)) {
    console.log(v);
    
   }
}

// Explanation: for...in iterates over enumerable property keys, including inherited ones. hasOwnProperty() filters out inherited properties and keeps only properties belonging directly to the array.