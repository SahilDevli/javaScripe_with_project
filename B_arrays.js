let array = ['one',2,true,['array2',false]];
// console.log(array);

array.forEach(e => {
    console.log(e);
});

// for(var i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// methods in array in java script......

array.push(3);
array.push(4);
array.pop(); // delete last element

array.unshift(100); // insert value at front by sifting all other values.
array.shift(); // delete first element

var bool = array.includes(1); // check if array contains

console.log(array.indexOf(2)); // find index of value

let newarr = array.join();
console.log(newarr +' ------> and the type after join() is : '+ typeof newarr); // string

// slace andsplice in arrays......

let newA = [0,1,2,3,4,5,6,7];
console.log("point A (org. array): ",newA); 

console.log('slice :  ',newA.slice(1, 3)); // [1,2]
console.log("point B(after slice): ",newA);

console.log('splice :  ' ,newA.splice(1, 3)); // [1,2,3] also remove this from org. array.
console.log("point C(After splice org. array is): ",newA);
// console.log(newA.splice(3, 0, 'a', 'b', 'c')); // insert values at index 3


// console.log(array);


// concat and spread operator...

let marval = ['Ironman','thor','Spiderman'];
let dc = ['superman','batman','wonderwomen'];

console.log('concat : ',marval.concat(dc));
// optimal is spread operator multiple arrays can concat...
console.log('spread op.: ', [...marval,...dc]);

let ary = [1,2,true,[5,6,7]];
var newArr = ary.flat(1);           //      flat(depth)....
console.log('spread and flat op.: ', [...ary.flat(1),...dc]);

console.log(Array.isArray("String"));  // check for array return boolean

console.log(Array.from("String"));  // convert any to array   *---> but not key:value like this

// for multiple values or variables...
let var1 = 1;
let va2 = 'str';
let var3 = true;
let var4 = [1,2,3,];

console.log(Array.of(var1,va2,var3,var4).flat(1));       //     Array.of(var1,va2,var3,var4)...