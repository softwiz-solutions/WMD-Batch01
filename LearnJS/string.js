// var cityName="Faisalabad"

// console.log("lower case",cityName.toLowerCase())
// console.log("upper case",cityName.toUpperCase())

// var fruits = ["apple", "orange", "banana", "pineapple"];
// fruits[0]
// var studenName = "";

// for (var i = 0; i < studenName.length; i++) {
//   console.log("leeter", studenName.charAt(i));
// }
// console.log("first letter",studenName.charAt(0)

// var cityName="Faisalabad"
// // varName.slice(staring index,ending index)
// console.log("cityName hello",cityName.slice(2,4))
// console.log("cityName ",cityName)

// var cityName = "faisalabad";
// var firstChar = cityName.slice(0, 1);
// var body = cityName.slice(1, cityName.length);
// cityName = firstChar.toUpperCase() + body.toLowerCase();
// console.log("ans", cityName);

var sentence =
  "The New Yorker magazine doesn't allow the phrase 'World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

// for (var i = 0; i < sentence.length; i++) {
//   if (sentence.slice(i, i + 12) == "World War II") {
//     sentence =
//       sentence.slice(0, i) + "Second World War" + sentence.slice(i + 12);
//   }
// }

// console.log("send", sentence);

sentence = sentence.replace("World War II", "Second World Warr");
console.log("🚀 ~ sentence:", sentence)
