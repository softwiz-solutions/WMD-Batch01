// Data Structures
//  structures the data. (Array)

// var city1 = "Fsd";
// var city2 = "Lhr";
// var city3 = "Isb";
// var city4 = "Krch";
// var city5 = "Mult";
// var city6 = "Hdb";

var cities = ["Fsd", "Lhr", "Isb", "Krch", "Mult", "Hbd"];
// cities[3]="Quto"
// console.log("citues", cities);
// console.log("citues", cities[0]);
// console.log("citues", cities[1]);
// console.log("citues", cities[2]);
// console.log("citues", cities[3]);
// console.log("citues", cities[4]);
// console.log("citues", cities[5]);
// console.log("cityes last",cities[cities.length-1])// citites[5]
// for (var i = 0; i < cities.length; i++) {
//   console.log("i", i);
//   console.log("city", cities[i]);
// }

// var cities = [];
// // cities[0] = "isb";
// cities[0] = prompt("Enter City 1");
// cities[1] = prompt("Enter City 2");
// cities[2] = prompt("Enter City 3");
// cities[3] = prompt("Enter City 3");
// cities[4] = prompt("Enter City 4");
// console.log("cities", cities);

// for (var i = 0; i < 6; i++) {
//   cities[i] = prompt("Enter city ");
// }
// console.log("cities", cities);

// write a js program, get the 4 fruit names from user , and show them one by one,

// var fruits = ["apple", "orange", "banana", "pineapple"];

// // fruits[fruits.length] = "mango";

// console.log("fruis",fruits)

// array methods

// 1. PUSH --> add anything from end
// 1. POP -->  remove last element

// var fruits = ["apple", "orange", "banana", "pineapple"];

// // fruits[fruits.length] = "mango";
// // fruits.push("mango", "chilly", "cherry", "dates");
// fruits.push("chilly");
// fruits.pop();
// fruits.push("cheryy");
// fruits.push("dates");
// fruits.pop();
// fruits.pop();
// // fruits.pop()
// fruits.push("watermalon");

// console.log("fuirt", fruits);

// 1. UNSHIFT --> add anything at start
// 1. SHIFT -->  remove element from start

// var fruits = ["apple", "orange", "banana", "pineapple"];
// fruits.unshift("watermal", "mango");
// fruits.shift();
// fruits.push("dates", "watermelon");
// fruits.shift();
// fruits.unshift("graphs", "melon");
// fruits.pop();
// fruits.push("strawebery");
// console.log("fruist", fruits);
// console.log("fruist", fruits.length);

// SPLICE (add, remove ,replace)

// for removing
var fruits = ["apple", "orange", "banana", "pineapple"];
// fruits.splice(starting index,number of element you want to effect)

// fruits.splice(1, 3);

// for adding

// fruits.splice(1, 0, "melon");
// console.log("fruit", fruits);

// for replace

fruits.splice(1, 1, "melon", "strwverry");
console.log("fruit", fruits);
