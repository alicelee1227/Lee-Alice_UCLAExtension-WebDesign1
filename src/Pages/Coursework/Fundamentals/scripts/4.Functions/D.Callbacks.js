/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
console.group("Functions: Call Backs");

const myConsumerFn = (fn) => {
    console.log("My Consumer Function");
    fn();
};

const myFuncToPass = () => {
    console.log("Passing this function in.");
};

myConsumerFn(myFuncToPass);

// pass anonymous function (function not assigned to anything)
myConsumerFn(() => {
    console.log("Anonymous callback");
});

console.groupEnd();
