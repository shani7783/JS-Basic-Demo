const text = "red, blue, pink, green";
const pattern = "blue";
console.log("match function result is: ", text.match(pattern));

let matches = /(Hello )/.exec('Hello world!');
console.log("exec function result is: ", matches[1]);

const str = "Visit Sela";
console.log("search function matched index is: ", str.search(/sela/i));

console.log("replace function result is: ", str.replace(/sela/i, "home"));