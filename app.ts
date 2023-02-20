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

function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");




//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
