/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

/*---------------------------
| Data Types: Numbers
---------------------------*/
console.group("DataTypes: Numbers");

const myNum1 = 23;
const myNum2 = 10;
console.log(myNum1 + myNum2);

console.groupEnd();

/*---------------------------
| Data Types: Strings
---------------------------*/
console.group("DataTypes: Strings");

const myString1 = "my name is ";
const myString2 = "Alice";
console.log(myString1 + myString2);

console.groupEnd();

/*---------------------------
| Data Types: Template Strings
---------------------------*/

console.group("DataTypes: Template Strings");

const myTempString = `
I can write
${myNum1} multi-line
sentences.`;
console.log(myTempString);

console.groupEnd();
