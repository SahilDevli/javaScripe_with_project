// object inside object 

let obj1 = {
    Nest_Obj1: {
        "name": "John",
        "age":12
    },
    Nest_Obj2: {
        "name": "Jane",
        "age":13
    },
    Nest_Obj3: {
        "name": "Jim",
        "age":14
    }
}

console.log(obj1.Nest_Obj2.name);
console.log(obj1.Nest_Obj4?.name);   //most used syntax to check any value is exsisting or not. output:undefined
console.log(obj1.Nest_Obj3?.name);   //output : Jim

console.log("\n");

console.log("Object.keys() -> ",Object.keys(obj1))  // get keys of object
console.log("Object.values() -> ",Object.values(obj1)) // get values of object
console.log("Object.entries() -> ",Object.entries(obj1.Nest_Obj2)) // make array of key value pairs of object 'Nest_obj2'



// --------------   object inside array    -------------
let arr = [
    {
        "name": "Jimmy",
        "age":30
    },
    {
        "name": "Rock",
        "age":40
    },
    {
        "name": "Hello",
        "age":20
    }
]
console.log("Object inside array[0] keys: ",Object.keys(arr[0]));


// -------------------------    Single ton object in js     -------------------------------


const singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "Singleton Instance" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


// const obj1 = singleton.getInstance()
// const obj2 = singleton.getInstance()
// console.log(obj1 === obj2); // Output: true (Both refer to the same instance)