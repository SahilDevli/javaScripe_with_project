// strings in js

str = 'hello world';
console.log(str);        // print string

console.log(`Ther string can be print by using variable str : ${str}`);

console.log(str.length);  // print length of string

console.log(str[0]);     // print first character

console.log(str.toUpperCase());  // convert string to uppercase

console.log(str.toLowerCase());  // convert string to lowercase

console.log(str.charAt(0));    // print character at index

console.log(str.indexOf('l'));    // print index of first occurrence of 'l'

console.log(str.lastIndexOf('l'));   // print index of last occurrence of 'l'

console.log(str.replace('world', 'javascript'));  // replace 'world' with 'javascript'

console.log(str.split(' '));   // split string into array of words

console.log(str.concat(' ', 'programming'));  // concatenate two strings

console.log(str.trim());       // remove white spaces from start and end of string

console.log(str.startsWith('hello'));  // check if string starts with 'hello'

console.log(str.endsWith('world'));  // check if string ends with 'world'

console.log(str.includes('world'));  // check if string includes 'world'

console.log(str.repeat(3));   // repeat string 3 times

console.log(str.slice(0, 5));   // slice string from index 0 to 5 (not including 5)

console.log(str.substring(0, 5));  // slice string from index 0 to 5 (not including 5)

console.log(str.substr(0, 5));   // slice string from index 0 to 5 (not including 5)

// console.log(str.padStart(20, ' '));  // pad string with spaces on start to make it 20 characters long

// console.log(str.padEnd(20, ' '));  // pad string with spaces on end to make it 20 characters long

// console.log(str.pad(20, ' '));   // pad string with spaces on both start and end to make it 20 characters long

// console.log(str.repeat(3).padStart(60, ' '));  // repeat string 3 times, pad with spaces on start to make it 60 characters long

// console.log(str.repeat(3).padEnd(60, ' '));  // repeat string 3 times, pad with spaces on end to make it 60 characters long

// console.log(str.repeat(3).pad(60, ' '));   // repeat string 3 times, pad with spaces on both start and end to make it 60 characters long

// console.log(str.match(/world/g));  // find all occurrences of 'world' in string and return them in an array

// console.log(str.search(/world/));  // find index of first occurrence of 'world' in string

// console.log(str.anchor('world'));  // create an HTML anchor tag with the string as the link

// console.log(str.big());           // create a big text

// console.log(str.blink());          // create a blinking text

// console.log(str.bold());           // create a bold text

// console.log(str.italics());         // create an italic text

// console.log(str.fixed());          // create a fixed width text

// console.log(str.strike());         // create a strikethrough text

// console.log(str.small());           // create a small text

// console.log(str.fontcolor('red'));   // create a text with red color

// console.log(str.fontsize(30));    // create a text with font size 30 pixels

// console.log(str.link('https://www.google.com'));  // create a hyperlink to the given URL

// console.log(str.anchor('https://www.google.com', 'Google'));  // create a hyperlink with the given URL and text

// console.log(str.normalize());         // normalize the string

// console.log(str.normalize('NFC'));   // normalize the string using Normalization Form Canonical Composition

// console.log(str.normalize('NFD'));   // normalize the string using Normalization Form Canonical Decomposition

// console.log(str.normalize('NFKD'));  // normalize the string using Normalization Form Compatibility Decomposition

// console.log(str.normalize('NFKC'));  // normalize the string using Normalization Form Compatibility Composition

// console.log(str.normalize('nfkc'));  // normalize the string using Normalization Form Compatibility Decomposition with case folding

// console.log(str.normalize('nfkc').toUpperCase());  // normalize the string using Normalization Form Compatibility Decomposition with case folding and convert to uppercase

// console.log(str.normalize('nfkc').toLowerCase());  // normalize the string using Normalization Form Compatibility Decomposition with case folding and convert to lowercase

// console.log(str.normalize('nfkc').charAt(0));    // normalize the string using Normalization Form Compatibility Decomposition with case folding and get the first character

// console.log(str.normalize('nfkc').slice(0, 5));   // normalize the string using Normalization Form Compatibility Decomposition with case folding and slice from index 0 to 5 (not including 5)

// console.log(str.normalize('nfkc').substring(0, 5));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and slice from index 0 to 5 (not including 5)

// console.log(str.normalize('nfkc').substr(0, 5));   // normalize the string using Normalization Form Compatibility Decomposition with case folding and slice from index 0 to 5 (not including 5)

// console.log(str.normalize('nfkc').padStart(20, ' '));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and pad with spaces on start to make it 20 characters long

// console.log(str.normalize('nfkc').padEnd(20, ' '));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and pad with spaces on end to make it 20 characters long

// console.log(str.normalize('nfkc').pad(20, ' '));   // normalize the string using Normalization Form Compatibility Decomposition with case folding and pad with spaces on both start and end to make it 20 characters long

// console.log(str.normalize('nfkc').repeat(3).padStart(60, ' '));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and repeat string 3 times, pad with spaces on start to make it 60 characters long

// console.log(str.normalize('nfkc').repeat(3).padEnd(60, ' '));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and repeat string 3 times, pad with spaces on end to make it 60 characters long

// console.log(str.normalize('nfkc').repeat(3).pad(60, ' '));   // normalize the string using Normalization Form Compatibility Decomposition with case folding and repeat string 3 times, pad with spaces on both start and end to make it 60 characters long

// console.log(str.normalize('nfkc').match(/world/g));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and find all occurrences of 'world' in string and return them in an array

// console.log(str.normalize('nfkc').search(/world/));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and find index of first occurrence of 'world' in string

// console.log(str.normalize('nfkc').anchor('https://www.google.com'));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and create an HTML anchor tag with the string as the link

// console.log(str.normalize('nfkc').big());           // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a big text

// console.log(str.normalize('nfkc').blink());          // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a blinking text

// console.log(str.normalize('nfkc').bold());           // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a bold text

// console.log(str.normalize('nfkc').italics());         // normalize the string using Normalization Form Compatibility Decomposition with case folding and create an italic text

// console.log(str.normalize('nfkc').fixed());          // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a fixed width text

// console.log(str.normalize('nfkc').strike());         // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a strikethrough text

// console.log(str.normalize('nfkc').small());           // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a small text

// console.log(str.normalize('nfkc').fontcolor('red'));   // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a text with red color

// console.log(str.normalize('nfkc').fontsize(30));    // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a text with font size 30 pixels

// console.log(str.normalize('nfkc').link('https://www.google.com'));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a hyperlink to the given URL

// console.log(str.normalize('nfkc').anchor('https://www.google.com', 'Google'));  // normalize the string using Normalization Form Compatibility Decomposition with case folding and create a hyperlink with the given URL and text
