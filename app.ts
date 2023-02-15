// // import a from "./src/first.js";
// // import {b, c as d} from "./src/second.js";

// // console.log(a + b + d);

// // import inquirer from "inquirer";
// // import chalk from "chalk";

// // let answers = inquirer.prompt([{
// //     name: "age",
// //     type: "number",
// //     message: "Enter your Age:"}
// // ]);

// // console.log("Insha Allah, in " + (60 - answers.name) + " years you will be 60 years old.");

// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "saad";
// console.log(myname);

// //myname = undefined; //Error
// //myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// //console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
//                                 //because of narrowing

// let newAge = Math.random() > 0.6 ? "Khan": 60;

// //newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// if(typeof newAge === "string"){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// typeof newAge === "string"
// ? newAge.toUpperCase() // Ok: string
// : newAge.toFixed(); // Ok: number


// let age: number | "died" | "unknown";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// //age = "living";//Error


// let saad: "saad";

// saad = "saad";
// //saad = "khan";//Error


// let yourName = Math.random() > 0.6 ? "Saad Shaoor Ghazanfar": undefined;

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK

// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;

let teacher : {name: string, exp: number} = {
    name: "fahad",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "saad",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "hammad"
}