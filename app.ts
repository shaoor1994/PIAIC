const enum Color {Red, Green, Blue};
var c: Color = Color.Green;

const enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color[2]; 
console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};
var colorIndex = Color2["Blue"];
console.log(colorIndex);