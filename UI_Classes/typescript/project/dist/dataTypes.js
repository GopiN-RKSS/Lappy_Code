var firstName = 6;
var marks = "6";
var isPass = true;
var stunames = ["2", "3", 4];
var names = [2, 3, 4];
var numbers = [2, 3, 4]; //Generic array type
var calcu = [3, "a", true]; // Tuple
calcu[1].charAt(0);
var isName = true; // union type
var collegeName = 6;
var collegeName1 = 6;
function displayMessage() {
    console.log("I'm showing error");
}
var result = displayMessage();
var a = undefined;
var n = null;
//Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("somthing error");
}
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 101] = "Red";
    Color[Color["Blue"] = 201] = "Blue";
    Color[Color["Green"] = 202] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
console.log("enum", Color[201]);
var person = {
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
var someValue = "this is a sting value";
var stringLength = someValue.length;
var strLength = someValue.length;
var mathsmarks = '500';
var numMathMarks = parseInt(mathsmarks);
