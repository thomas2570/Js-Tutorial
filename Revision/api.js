const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


//   //- const ek variable declare karta hai jise dobara assign nahi kar sakte.
// - BASE_URL API ka base address hai.
// - Is URL se currency exchange rates ka JSON data milta hai.
// Example: Agar tum USD se INR convert karte ho, toh code URL ko aise banata hai:


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// document.querySelector() aur document.querySelectorAll() HTML elements ko select karte hain.
// Code	Kya select karta hai?
// querySelectorAll(".dropdown select")	Saare currency dropdowns
// querySelector("form button")	Form ka button
// querySelector(".from select")	From currency dropdown
// querySelector(".to select")	To currency dropdown
// querySelector(".msg")	Result dikhane wala element
// Important: Ye code tabhi kaam karega jab tumhare HTML mein ye classes aur elements present hon.

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;


//     //Is part ko samjho:
// - for...of har dropdown par loop chalata hai.
// - for...in countryList object ki keys par loop chalata hai.
// - document.createElement("option") naya HTML option banata hai.
// - innerText dropdown mein visible text set karta hai.
// - value option ki actual value set karta hai.//


    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }


//     Iska matlab:
// - Agar dropdown ka name from hai aur currency USD hai, toh USD default select hoga.
// - Agar dropdown ka name to hai aur currency INR hai, toh INR default select hoga.


    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// //addEventListener("change", ...) tab execute hota hai jab user dropdown ki value change karta hai.
// - evt event object hai.
// - evt.target woh dropdown hai jisme change hua.
// - updateFlag() us currency ke according flag update karta hai

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

//   //amount HTML input element ko store karta hai.
// amount.value user ke entered amount ko read karta hai.


  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

//   Is condition ka meaning:
// - Agar amount empty hai, toh amount 1 kar do.
// - Agar amount 1 se kam hai, toh bhi 1 kar do.
// - Input box mein bhi 1 show karo.
// Yahan || ka matlab OR hai. Dono conditions mein se koi ek true hui, toh code andar chalega



  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

// explain - 