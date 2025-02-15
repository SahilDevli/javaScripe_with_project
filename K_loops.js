let array = ['js','ruby','css','java','c++']

// for loop with step
console.log("\ndefault for\n");
for(let k=0; k<array.length; k+=2){
    console.log(array[k]);
}

// for each
console.log("\nfor each\n");
array.forEach(e => {
    console.log(e);
});

// you can directly refer a function in for each:
console.log("\nforEach2\n");
function printElement(e){
    console.log(e);
}
array.forEach(printElement);

// for in
console.log("\nfor in\n");
for(let i in array){
    console.log(array[i]);
}

// for of
console.log("\nfor of\n");
for(let e of array){
    console.log(e);
}

// map use 'for of' loop
// objets use 'for in' loop 

// while loop
console.log("\nwhile loop\n");
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}

// do while loop
console.log("\ndo-while loop\n");
let j=0;
do{
    console.log(array[j]);
    j++;
}while(j<array.length);

// for loop with nested loop
console.log("\nnested for loop\n");
for(let m=0; m<1; m++){
    for(let n=0; n<array.length; n++){
        console.log(array[n]);
    }
}