/*===================================
||
|| Data Types: Objects
||
===================================*/
console.group("DataTypes: Objects");

let myObj = {
    str1: "red",
    num: 123,
    arr: [11, 22, 33],
    fn: () => {
        console.log("This is a function assigned to an object");
    },
};

myObj.fn();

// Everything is an object
let myArr = ["up", "down", 23];
console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements.");
}

myArr.sayWhat = "say Who?";

console.groupEnd();
