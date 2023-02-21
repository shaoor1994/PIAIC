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

// // const enum Color {Red, Green, Blue};
// // // var c: Color = Color.Green;


// // // const enum Color1 {Red = 1, Green, Blue};
// // // var colorName: string = Color[2]; 
// // // console.log(colorName);

// // // const enum Color2 {Red = 1, Green = 2, Blue = 4};
// // // var colorIndex = Color2["Blue"];
// // // console.log(colorIndex);

// // // Arrays

// // // let array1 : number[] = [5, 6, 7];
// // // console.log(array1[1]);
// // // let array2:Array<number> = [1, 2, 3];
// // // let array3 : number[] = [];

// // // let array4: number[] = new number[2];

// // // let array5: number[] = [];
// // // array5.push(1234);

// // //functions

// // // function add(x: number, y: number): number {
// // //   return x+y;
// // // }


// // // let myAdd1 = function(x: number, y: number): number { 
// // //       return x+y; 
// // // };


// // // let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
// // //                       return x+y; 
// // //                     };


// // // let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// // //                               return x+y; 
// // //                             };
														
// // // let myAdd4 = (a : number, b : number) => a + b;


// // // type GreetFunction = (a: string) => void;
// // // function greeter(fn: GreetFunction) {
// // // //....
// // // }
// // // function buildName(firstName: string, lastName?: string) : string {
// // //   if (lastName)
// // //       return firstName + " " + lastName;
// // //   else
// // //       return firstName;
// // // }

// // // let result1 = buildName("Saad");  
// // // let result2 = buildName("Saad", "Shaoor", "Sr."); 
// // // var result3 = buildName("Saad", "Shaoor");  



// // // //anonymous function type with optional parameters
// // // var buildName1 : (firstName: string, lastName?: string) => string = 
// // // function(firstName: string, lastName?: string) : string {
// // //   if (lastName)
// // //       return firstName + " " + lastName;
// // //   else
// // //       return firstName;
// // // }

// // function buildName(firstName: string, lastName = "Ghazanfar") : string {
// //   if (lastName)
// //       return firstName + " " + lastName;
// //   else
// //       return firstName;
// // }

// // let result1 = buildName("Saad");  
// // let result2 = buildName("Saad", "Shaoor", "Sr.");  
// // let result3 = buildName("Saad", "Shaoor");  



// // //anonymous function type with defult parameters 
// // //(Note that the parameter type will be optional when used with defult value)
// // let buildName1 : (firstName: string, lastName?: string) => string = 
// // function(firstName: string, lastName = "Ghazanfar") : string {
// //   if (lastName)
// //       return firstName + " " + lastName;
// //   else
// //       return firstName;
// // }

// // function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// // 	return firstName + " " + restOfName.join(" ");
// // }

// // var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");




// // //anonymous function type with Rest parameters
// // var buildNameFun: (fname: string, ...rest: string[])=>string =
// // function (firstName: string, ...restOfName: string[]) {
// // 	return firstName + " " + restOfName.join(" ");
// // }

// // function myCallBack(text: string) {
// //   console.log("inside myCallback " + text);
// // }

// // function callingFunction(initialText: string, callback: (text: string) => void)
// // {
// //   callback(initialText);
// // }

// // callingFunction("myText", myCallBack);
// // function add(arg1: string, arg2: string): string;//option 1
// // function add(arg1: number, arg2: number): number;//option 2
// // function add(arg1: boolean, arg2: boolean): boolean;//option 3
// // //this is not part of the overload list, 
// // //so it has only three overloads
// // function add(arg1: any, arg2: any): any {
// //     return arg1 + arg2;
// // }

// // //Calling 'add' with any other parameter types would cause an error except for the three options
// // console.log(add(1, 2));
// // console.log(add("Hello", "World"));
// // console.log(add(true, false));

// //Tuple types have the advantage that you can accurately describe the type of an array of mixed types

// var tuple: [number, string] = [1, "bob"];
// var secondElement = tuple[1];  // secondElement now has type 'string' 

// // Typically an array contains zero to many objects of a
// // single type. TypeScript has special analysis around
// // arrays which contain multiple types, and where the order
// // in which they are indexed is important.

// // These are called tuples. Think of them as a way to
// // connect some data, but with less syntax than keyed objects.

// // You can create a tuple using JavaScript's array syntax:

// const failingResponse = ["Not Found", 404];

// // but you will need to declare its type as a tuple.

// const passingResponse: [string, number] = ["{}", 200];

// // If you hover over the two variable names you can see the
// // difference between an array ( (string | number)[] ) and
// // the tuple ( [string, number] ).

// // As an array, the order is not important so an item at
// // any index could be either a string or a number. In the
// // tuple the order and length are guaranteed.

// if (passingResponse[1] === 200) {
//   const localInfo = JSON.parse(passingResponse[0]);
//   console.log(localInfo);
// }

// // This means TypeScript will provide the correct types at
// // the right index, and even raise an error if you try to
// // access an object at an un-declared index.

// passingResponse[2];

// // A tuple can feel like a good pattern for short bits of
// // connected data or for fixtures.

// type StaffAccount = [number, string, string, string?];

// const staff: StaffAccount[] = [
//   [0, "Adankwo", "adankwo.e@"],
//   [1, "Kanokwan", "kanokwan.s@"],
//   [2, "Aneurin", "aneurin.s@", "Supervisor"],
// ];

// // When you have a set of known types at the beginning of a
// // tuple and then an unknown length, you can use the spread
// // operator to indicate that it can have any length and the
// // extra indexes will be of a particular type:

// type PayStubs = [StaffAccount, ...number[]];

// const payStubs: PayStubs[] = [
//   [staff[0], 250],
//   [staff[1], 250, 260],
//   [staff[0], 300, 300, 300],
// ];

// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// const monthThreePayments = payStubs[2][2];

// // You can use tuples to describe functions which take
// // an undefined number of parameters with types:

// declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

// calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

// //
// // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// // https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/

