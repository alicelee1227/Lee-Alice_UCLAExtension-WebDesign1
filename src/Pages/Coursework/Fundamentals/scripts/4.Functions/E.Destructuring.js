/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    // const { first, last, email, colors } = personObj;

    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are: ");
    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Alice",
    last: "Lee",
    email: "alicelee1227@ucla.edu",
    colors: ["red", "white", "blue"],
};

const person2 = {
    first: "Alex",
    last: "Lee",
    email: "alex@ucla.edu",
    colors: ["green", "black", "blue"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
