// // let a : string = "Pakistan";
// // a = "USA";
// // let b : number = 9;
// // let c : boolean = true;

// // //type inference
// // let e = "USA";
// // let f = 10.9;
// // f = 22;
// // let g = false;
// // g = true;


// // //use const where variable values do not change
// // const aa =  5;
// // const bb : number = 33;
// // const cc ="best";

// // //I suggest use let instead of var everywhere, 
// // //becuase let has blocked scope
// // if (true) {
// // 	let z = 4;
// // 	//use z
// // }
// // else {
// // 	let z = "string";
// // 	//use z
// // }
// // console.log("let: " + z);// Error: z is not defined in this scope

// // // import a from "./src/first.js";
// // // import {b, c as d} from "./src/second.js";

// // // console.log(a + b + d);

// // // import inquirer from "inquirer";
// // // import chalk from "chalk";

// // // let answers = inquirer.prompt([{
// // //     name: "age",
// // //     type: "number",
// // //     message: "Enter your Age:"}
// // // ]);

// // // console.log("Insha Allah, in " + (60 - answers.name) + " years you will be 60 years old.");

// // let myname: string | null;

// // myname = null;
// // console.log(myname);

// // myname = "saad";
// // console.log(myname);

// // //myname = undefined; //Error
// // //myname = 12; //Error

// // let myAge: string | number;

// // myAge = 16;//narrowing
// // console.log(myAge);

// // //console.log(myAge.toLowerCase());//Error

// // myAge = "Dont Know";//narrowing
// // console.log(myAge);

// // console.log(myAge.toString()); // common to both types 
// //                                //can be called even without narrowing

// // console.log(myAge.toLowerCase());//Can be called on string 
// //                                 //because of narrowing

// // let newAge = Math.random() > 0.6 ? "Khan": 60;

// // //newAge.toLowerCase();//Error: Transpiler cannot narrow

// // if (newAge === "Khan") {
// //     // Type of newAge: string
// //     newAge.toUpperCase(); // Can be called
// // }

// // if(typeof newAge === "string"){
// //     // Type of newAge: string
// //     newAge.toUpperCase(); // Can be called
// // }

// // typeof newAge === "string"
// // ? newAge.toUpperCase() // Ok: string
// // : newAge.toFixed(); // Ok: number


// // let age: number | "died" | "unknown";

// // age = 90;//OK
// // age = "died";//OK
// // age = "unknown";//OK
// // //age = "living";//Error


// // let saad: "saad";

// // saad = "saad";
// // //saad = "khan";//Error


// // let yourName = Math.random() > 0.6 ? "Saad Shaoor Ghazanfar": undefined;

// // if (yourName) {
// //     yourName.toUpperCase(); // Ok: string
// // }

// // //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// // yourName?.toUpperCase();//OK

// // // You can also define a type alias
// // type RawData = boolean | number | string | null | undefined;

// // let data: RawData;

// // // You can even combine them

// // type Id = number | string;

// // type IdMaybe = Id | undefined | null;

// let teacher : {name: string, exp: number} = {
//     name: "fahad",
//     exp: 10
// }

// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "saad",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "hammad"
// }


// // // import a from "./src/first.js";
// // // // import {b, c as d} from "./src/second.js";

// // // // console.log(a + b + d);

// // // // import inquirer from "inquirer";
// // // // import chalk from "chalk";

// // // // let answers = inquirer.prompt([{
// // // //     name: "age",
// // // //     type: "number",
// // // //     message: "Enter your Age:"}
// // // // ]);

// // // // console.log("Insha Allah, in " + (60 - answers.name) + " years you will be 60 years old.");

// // // let myname: string | null;

// // // myname = null;
// // // console.log(myname);

// // // myname = "saad";
// // // console.log(myname);

// // // //myname = undefined; //Error
// // // //myname = 12; //Error

// // // let myAge: string | number;

// // // myAge = 16;//narrowing
// // // console.log(myAge);

// // // //console.log(myAge.toLowerCase());//Error

// // // myAge = "Dont Know";//narrowing
// // // console.log(myAge);

// // // console.log(myAge.toString()); // common to both types 
// // //                                //can be called even without narrowing

// // // console.log(myAge.toLowerCase());//Can be called on string 
// // //                                 //because of narrowing

// // // let newAge = Math.random() > 0.6 ? "Khan": 60;

// // // //newAge.toLowerCase();//Error: Transpiler cannot narrow

// // // if (newAge === "Khan") {
// // //     // Type of newAge: string
// // //     newAge.toUpperCase(); // Can be called
// // // }

// // // if(typeof newAge === "string"){
// // //     // Type of newAge: string
// // //     newAge.toUpperCase(); // Can be called
// // // }

// // // typeof newAge === "string"
// // // ? newAge.toUpperCase() // Ok: string
// // // : newAge.toFixed(); // Ok: number


// // // let age: number | "died" | "unknown";

// // // age = 90;//OK
// // // age = "died";//OK
// // // age = "unknown";//OK
// // // //age = "living";//Error


// // // let saad: "saad";

// // // saad = "saad";
// // // //saad = "khan";//Error


// // // let yourName = Math.random() > 0.6 ? "Saad Shaoor Ghazanfar": undefined;

// // // if (yourName) {
// // //     yourName.toUpperCase(); // Ok: string
// // // }

// // // //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// // // yourName?.toUpperCase();//OK

// // // // You can also define a type alias
// // // type RawData = boolean | number | string | null | undefined;

// // // let data: RawData;

// // // // You can even combine them

// // // type Id = number | string;

// // // type IdMaybe = Id | undefined | null;

// // let teacher : {name: string, exp: number} = {
// //     name: "fahad",
// //     exp: 10
// // }

// // // Aliased Object Type
// // type Student = {
// //     name: string,
// //     age?: number
// // }

// // let student: Student = {
// //     name: "saad",
// //     age: 30
// // }

// // console.log(student["name"]);
// // console.log(student.age);

// // // Interfaces

// // interface Manager {
// //     name: string,
// //     subordiates?: number
// // }

// // let storeManager: Manager = {
// //     name: "hammad"
// // }


// // type Author = {
// //     firstName: string;
// //     lastName: string;
// // };

// // type Book = {
// //     author: Author;
// //     name: string;
// // };

// // const myBook : Book = {
// //     author: {
// //         firstName: "Saad",
// //         lastName: "Shaoor"
// //     },
// //     name: "My Best Book"
// // }
// interface Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    
// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_Id);
// console.log(obj1.name);

// // Any

// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK


// //Unknown

// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK


// // Assigning a value of type unknown to variables of other types

// let val: unknown;

// const val1: unknown = val; // OK
// const val2: any = val; // OK
// // const val3: boolean = val; // Will throw error
// // const val4: number = val; // Will throw error
// // const val5: string = val; // Will throw error
// // const val6: Record<string, any> = val; // Will throw error
// // const val7: any[] = val; // Will throw error
// // const val8: (...args: any[]) => void = val; // Will throw error


// // Never

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
 
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
 
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
// enum Color {Red, Green, Blue};
// var c: Color = Color.Green;

// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {Red = 1, Green = 2, Blue = 4};
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);