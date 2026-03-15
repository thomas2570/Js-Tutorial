let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // Print Object


//let myCreateDate = new Date(2023, 0, 23, 2, 3)
//console.log(myCreateDate.toDateString()); // Mon Jan 23 2023

let myCreateDate = new Date("2023-01-14")

// console.log(myCreateDate.toLocaleString()); // 2:03:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());


newDate.toLocaleDateString('Default',{
    weekday: "long",
})

