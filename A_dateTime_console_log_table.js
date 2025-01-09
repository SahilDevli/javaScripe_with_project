console.log("Hello world!");

// variables in js
let var1 = "let var";       // can change and redeclear out of the scope like normal variable.
const var2 = "const var";   // can't change value of const.
console.table([var1,var2]);  // print data in console in table formate


// operators (  +,-,%,/,*     ,&&,||     ,++,--,+=,-=,===,==,!=  )
num = 1;
console.log(-num);      // give negative value



// confirmation that balace is number

let bal = 100;
let balance = new Number(200);
console.log(balance);

console.log(String(bal).length);


// --------------------------------------------------------------


// date and time... date is object in java script
let mydate = new Date();
console.log(String(mydate));
// console.log(mydate.toString());

// yyyy-mm-dd hh:mm:ss
let date1 = new Date(2004,7,4);
let date2 = new Date(2004,7,5,5,15,33);

console.log(String(date1));
console.log(String(date2));


// methods ----------------------------------------------------------------


console.log(mydate.toDateString() + ' ' + mydate.toTimeString());

console.log(mydate.toISOString());

// * this will be use full
console.log(mydate.toLocaleDateString() +" "+ mydate.toLocaleTimeString());

console.log(mydate.getMonth()+1);
console.log(mydate.getDay());

