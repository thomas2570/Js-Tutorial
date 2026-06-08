const course = {
    coursename: "Js in hindi",
    price: "9999",
    curseInstructor: "Thomas"
}
// course.curseInstructor

const {curseInstructor: instructor} = course

console.log(instructor);

//----Destructure of object------

// const navbar= ({company}) => {

// }
// navbar(company="Thomas")/

//------ JSON IN OBJECT FORM ------

// {
//     "name": "Thomas",
//     "price": "free"
// }

//-------- JSON IN ARRAY FORM

[
    {},
    {},
    {}
]

//-----  API MAY BE ARRAY OR OBJECT BOTH ------ 

// create an object for a student with name age and enrolled
let obj = {
    name: "Thomas",
    age: 22,
    enrolled: true,
}


// access the value of the first name from this object

const user = {
    "first-name": "Thomas",

}
user["first-name"]

// 