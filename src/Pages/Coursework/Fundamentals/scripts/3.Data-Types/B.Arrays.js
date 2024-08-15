/*===================================
||
|| Data Types: Arrays
||
===================================*/

console.group("DataTypes: Arrays");

const myNum = 13;
let myArr = [12, "a string", `template string`, myNum];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);

myArr.push("add this value");
console.log(myArr);

myArr.forEach((item, idx) => {
    console.log(item, idx);
});

console.groupEnd();
