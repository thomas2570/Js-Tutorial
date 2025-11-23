// const tinderuser = new Object();
const tinderuser = {}

tinderuser.id = "123abc";
tinderuser.name = "THomas";
tinderuser.isLoggedIn = false;


// console.log(tinderuser);

const regularUser = {
    email : "thomas@gmail.com",
    fullname : {
        userfullname : {
            firstname : "THomas",
            lastname : "Ramesh",
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = {obj1, obj2};
// onst obj3 = Object.assign({}, obj1, obj2);
obj3 = {...obj1, ...obj2};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "thomas@gmail.com"
    },
    {
        id: 1,
        email: "thomas@gmail.com"
    },
    {
        id: 1,
        email: "thomas@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Thomas"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Thomas",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}


