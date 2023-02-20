// // const enum Color {Red, Green, Blue};
// // var c: Color = Color.Green;


// // const enum Color1 {Red = 1, Green, Blue};
// // var colorName: string = Color[2]; 
// // console.log(colorName);

// // const enum Color2 {Red = 1, Green = 2, Blue = 4};
// // var colorIndex = Color2["Blue"];
// // console.log(colorIndex);

// // Arrays

// // let array1 : number[] = [5, 6, 7];
// // console.log(array1[1]);
// // let array2:Array<number> = [1, 2, 3];
// // let array3 : number[] = [];

// // let array4: number[] = new number[2];

// // let array5: number[] = [];
// // array5.push(1234);

// //functions

// // function add(x: number, y: number): number {
// //   return x+y;
// // }


// // let myAdd1 = function(x: number, y: number): number { 
// //       return x+y; 
// // };


// // let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
// //                       return x+y; 
// //                     };


// // let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// //                               return x+y; 
// //                             };
														
// // let myAdd4 = (a : number, b : number) => a + b;


// // type GreetFunction = (a: string) => void;
// // function greeter(fn: GreetFunction) {
// // //....
// // }
// // function buildName(firstName: string, lastName?: string) : string {
// //   if (lastName)
// //       return firstName + " " + lastName;
// //   else
// //       return firstName;
// // }

// // let result1 = buildName("Saad");  
// // let result2 = buildName("Saad", "Shaoor", "Sr."); 
// // var result3 = buildName("Saad", "Shaoor");  



// // //anonymous function type with optional parameters
// // var buildName1 : (firstName: string, lastName?: string) => string = 
// // function(firstName: string, lastName?: string) : string {
// //   if (lastName)
// //       return firstName + " " + lastName;
// //   else
// //       return firstName;
// // }

// function buildName(firstName: string, lastName = "Ghazanfar") : string {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }

// let result1 = buildName("Saad");  
// let result2 = buildName("Saad", "Shaoor", "Sr.");  
// let result3 = buildName("Saad", "Shaoor");  



// //anonymous function type with defult parameters 
// //(Note that the parameter type will be optional when used with defult value)
// let buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName: string, lastName = "Ghazanfar") : string {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }

// function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// 	return firstName + " " + restOfName.join(" ");
// }

// var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");




// //anonymous function type with Rest parameters
// var buildNameFun: (fname: string, ...rest: string[])=>string =
// function (firstName: string, ...restOfName: string[]) {
// 	return firstName + " " + restOfName.join(" ");
// }

// function myCallBack(text: string) {
//   console.log("inside myCallback " + text);
// }

// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//   callback(initialText);
// }

// callingFunction("myText", myCallBack);
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));

//Tuple types have the advantage that you can accurately describe the type of an array of mixed types

var tuple: [number, string] = [1, "bob"];
var secondElement = tuple[1];  // secondElement now has type 'string' 

// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

// You can create a tuple using JavaScript's array syntax:

const failingResponse = ["Not Found", 404];

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if (passingResponse[1] === 200) {
  const localInfo = JSON.parse(passingResponse[0]);
  console.log(localInfo);
}

// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.

passingResponse[2];

// A tuple can feel like a good pattern for short bits of
// connected data or for fixtures.

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

//
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/

