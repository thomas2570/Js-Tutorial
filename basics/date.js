// DATE

// let myDate = new Date()
// console.log(myDate.toString()) ;
// console.log(myDate.toDateString()) ;
// console.log(myDate.toISOString()) ;
// console.log(myDate.toLocaleString()) ;

let myCreatedDate = new Date(2025,0,22)
// console.log(myCreatedDate.toDateString()) ;
// console.log(myCreatedDate.toLocaleString()) ;

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()) ;

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday: "Long"
})