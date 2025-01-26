// ------------ ---    UDFs  --- ---------------------
function mean(...ary){ // spread operator take number of values in array formate
    let sum=0;
    for(let val in ary){
        sum+=ary[val];
    }
    return sum/ary.length;
}

console.log(mean(1,2,3,4,5)); // function call

// Arrow function
let sum = (a,b) =>a + b; // arrow function

console.log(sum(3,4)); // function call

console.log(typeof sum);


// ----------- ---      PDFs     --- --------------------

// ther is many pre defined functions in java script that are used in web most commonly here is the list of them 

/*

Here's a neatly organized list of commonly used predefined JavaScript functions along with their working:

1. DOM Manipulation Functions
document.getElementById(id) → Selects an element by its ID.
document.querySelector(selector) → Selects the first matching element using a CSS selector.
document.querySelectorAll(selector) → Selects all elements that match the given CSS selector.
element.innerHTML → Gets or sets the HTML content of an element.
element.style.property → Modifies the CSS style of an element.
element.classList.add(className) → Adds a CSS class to an element.
element.classList.remove(className) → Removes a CSS class from an element.
element.addEventListener(event, function) → Attaches an event listener to an element.

2. Window & Alert Functions
alert(message) → Displays an alert box with a message.
confirm(message) → Displays a confirmation dialog box and returns true or false.
prompt(message, defaultValue) → Displays an input box and returns the user’s input.
setTimeout(function, delay) → Executes a function after a specified time (in milliseconds).
setInterval(function, interval) → Repeats execution of a function at a specified interval.
window.open(url, target) → Opens a new browser window or tab.

3. Console & Debugging Functions
console.log(message) → Logs a message to the console.
console.error(message) → Logs an error message to the console.
console.warn(message) → Logs a warning message to the console.

4. String Functions
string.length → Returns the number of characters in a string.
string.toUpperCase() → Converts a string to uppercase.
string.toLowerCase() → Converts a string to lowercase.
string.trim() → Removes whitespace from both ends of a string.
string.replace(search, replaceWith) → Replaces a substring with another substring.
string.split(delimiter) → Splits a string into an array based on a delimiter.
string.includes(substring) → Checks if a string contains a specified substring (true or false).
string.indexOf(substring) → Returns the index of the first occurrence of a substring (-1 if not found).
string.startsWith(substring) → Checks if a string starts with a specified substring.
string.endsWith(substring) → Checks if a string ends with a specified substring.

5. Array Functions
array.length → Returns the number of elements in an array.
array.push(element) → Adds an element to the end of an array.
array.pop() → Removes and returns the last element of an array.
array.shift() → Removes and returns the first element of an array.
array.unshift(element) → Adds an element to the beginning of an array.
array.map(function) → Creates a new array by applying a function to each element.
array.filter(function) → Creates a new array with elements that match a condition.
array.find(function) → Returns the first element that matches a condition.
array.includes(element) → Checks if an element exists in an array (true or false).
array.sort() → Sorts the elements of an array.
array.reverse() → Reverses the order of elements in an array.
array.join(separator) → Converts an array into a string, separated by a specified character.
array.reduce(function, initialValue) → Reduces an array to a single value.

6. Date & Time Functions
new Date() → Creates a new Date object representing the current date and time.
date.getFullYear() → Returns the year from a Date object.
date.getMonth() → Returns the month (0-11) from a Date object.
date.getDate() → Returns the day of the month (1-31).
date.getHours() → Returns the hour (0-23).
date.getMinutes() → Returns the minutes (0-59).
date.getSeconds() → Returns the seconds (0-59).

7. Math Functions
Math.round(number) → Rounds a number to the nearest integer.
Math.floor(number) → Rounds a number down to the nearest integer.
Math.ceil(number) → Rounds a number up to the nearest integer.
Math.random() → Returns a random number between 0 and 1.
Math.max(a, b, c, ...) → Returns the largest number from the given values.
Math.min(a, b, c, ...) → Returns the smallest number from the given values.
Math.sqrt(number) → Returns the square root of a number.
Math.pow(base, exponent) → Returns the result of base raised to exponent.

8. Event Handling Functions
event.preventDefault() → Prevents the default action of an event (e.g., stopping a form from submitting).
event.stopPropagation() → Stops event bubbling up the DOM tree.
element.click() → Programmatically triggers a click event on an element.

9. JSON Handling Functions
JSON.stringify(object) → Converts a JavaScript object into a JSON string.
JSON.parse(jsonString) → Converts a JSON string into a JavaScript object.

10. Local Storage Functions
localStorage.setItem(key, value) → Stores a key-value pair in local storage.
localStorage.getItem(key) → Retrieves a value from local storage by its key.
localStorage.removeItem(key) → Removes an item from local storage.
localStorage.clear() → Clears all items from local storage
*/