

// console.log(name + repoCount + " Value");


// console.log(gameNmae[0]);
// console.log(gameNmae.__proto__);

// console.log(gameNmae.length);
// console.log(gameNmae.toUpperCase());

const name = "Thomas"
const repoCount = 50

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String(`Thomas-Ra`); // ✅ fixed spelling

console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8,5);
console.log(anotherString);

const  newStringOne = "   Thomas Ramesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.thomasramesh.com/about.html"

 console.log(url.replace('about','contact'));
  
 console.log(url.includes('thomasramesh'));
   
console.log(gameName.split('-'));








