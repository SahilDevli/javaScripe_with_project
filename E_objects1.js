/* 
Objects in java script -> contains key value pair.
object : {
    name: 'John',
    age: 30,
    city: 'New York'
}

this can be create in two ways:
1. Object Literal          2. Singleton instance 
*/

//   1. using object literal

let obj1 = {
    name: 'xyz',
    array: [1,2,3,4,5],
    Nest_Obj: {"name": "John", "age":12},
    bool: true,
    int: 1234,
    function1: function(){
                    console.log(this.name)
                }
}
// console.log( Object.keys(obj1) );  // to gets keys of object.

// console.log(obj1)
// for(key in obj1) {
//     console.log(key, obj1[key]);
// }


// to access value of object allocaed to perticular key.
console.log(obj1.Nest_Obj)
console.log(obj1['Nest_Obj'])

console.log(obj1.function1)      // function reference
obj1.function1()    // function call

// console.log(obj1.function1())    // function call + print value of key function1(i.e. undufied [code in js is consider as undifined?])



/* ------ tabel formate ----------*/
let table = {
    col1: [1,2,3,4,5],
    name: ["xyz","abc","pqr","efg","mno"],
    age: [25,23,26,28,30]
}
console.table(table);  // print table in console
for(let i=0; i<table.name.length; i++){
    console.log(table.name[i], table.age[i]);
}

/* -------------------- Symbols in js object --------------------- */

const pin = Symbol("discription for Symbol like: (key=pin)");
let obj2 ={
    name: 'John',
    age: 30,
    city: 'New York',
    [pin]: '246149'
} 

// hide data from user.

// console.log(Object.keys(obj2));
for(key in obj2) {
    console.log(key, obj2[key]);
}

// to access symbol
console.log(Object.getOwnPropertySymbols(obj2));  // Output: [ Symbol(secret) ]
// console.log(Object.getOwnPropertyDescriptors(obj2)); // discription of object also contain info about symbol
Object.freeze(obj2); // freeze all kind of updates in obj2.
