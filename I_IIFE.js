// Immediately Invoke Function Expression: function exicute very first on loading the page
// -> use: in order to prevent from pollution made by globle scope.
// syntax: (function_defination)();

(function connect_data_base(){
    console.log('Connecting to data base...');
})();
// if semicolon is not there than next IIFE will give error

//Function with paremeter in IIFE
(function give_name(name){
    console.log(`Hello, ${name}!`);
})("Ramesh");

// arrow function in IIFE
((e)=>{
    console.log(`This is IIFE with arrow function or unnamed function: ${e}`);
})("ArrowFunction1");