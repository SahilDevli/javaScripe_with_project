// objects also contain key value pairs but these two are not similar.

const map_name = new Map();

map_name.set('IN',"INDIA");
map_name.set('USA',"UNITED STATE OF AMERICA");
map_name.set('FR',"FRANCE");
map_name.set('RS',"RUSSIA");

map_name.set('RS',"RUSSIA"); // renter of same value will get ignored

map_name.set('RS',"JAPAN"); // it will update the 'RS' key value
map_name.set('JA',"JAPAN"); // Same key will not alowed but same Values will.

// console.log(map_name);

// 'for of' loop to itrate through Map
for (const e of map_name) {
    console.log(e); // each key value pair come in form of array that contasin 2 string
}

// do destructuring to get saparate key value pairs
for (const [key, value] of map_name) {
    console.log(key,": ",value);
    // console.log(`Key: ${key}, Value: ${value}`); // alter syntax
}
