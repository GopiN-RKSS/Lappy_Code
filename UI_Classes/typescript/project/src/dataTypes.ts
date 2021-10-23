let firstName: number = 6;
let marks: string = "6";
let isPass: boolean = true;

let stunames: any[] = ["2", "3", 4];
let names: number[] = [2, 3, 4];
let numbers: Array<number> = [2, 3, 4]; //Generic array type

let calcu: [number, string, boolean] = [3, "a", true]; // Tuple

calcu[1].charAt(0);

let isName: string | boolean = true; // union type
let collegeName: any = 6;
let collegeName1: unknown = 6;

function displayMessage(): void {
  console.log("I'm showing error");
}

let result = displayMessage();

let a: undefined = undefined;
let n: null = null;

//Never

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("somthing error");
}

//Enum

enum Color {
  Red = 101,
  Blue = 201,
  Green,
}

let c: Color = Color.Green;

console.log("enum", Color[201]);

let person: object = {
  name: "guru",
  lastName: "prasad",
};

//Basic Types
/* 
    Boolean
    number
    String
    Array // Array<> //Generic
    Tuple
    object
    enum
    any
    unknown
    union
    void
    never
    null
    undefined
*/

/* Type Assertions */

let someValue: unknown = "this is a sting value";

let stringLength = (someValue as string).length;

let strLength = (<string>someValue).length;


let mathsmarks: string = '500';
let numMathMarks: number = parseInt(mathsmarks);