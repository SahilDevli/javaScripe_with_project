//1.     normally function can be called before defination.
sum1(5);
function sum1(num){
    console.log(num + 1);
}

//2.     But if funtion is in this form you cant call it before defination.

// sum2(5);    // wrong call
let sum2 = function(num){
    console.log(num + 2);
}
sum2(5); // correct call


//3.     similarly with arrow function...

// arrow functions

// sum3(5);    //wrong call
let sum3 = (e) =>{
    console.log(e + 3);
};
sum3(5); // correct call



//4.     function inside function_parameter (mostly use in JS) Example:

const demoEvent = function demo(var1,fun1){
    fun1(var1);
}
demoEvent("click",(e)=>{
    console.log("var1 contains : "+e);
});



//5.    Arrow function does not have its own 'this' value.

let obj = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
obj.greet();  // will print: Hello, my name is John
obj.greetArrow();  // will print: Hello, my name is undefined
