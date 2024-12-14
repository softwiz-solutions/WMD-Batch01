// var currentDate = new Date("October 17,2000 13:30:00");
// console.log("🚀 ~ currentDate:", currentDate);
// var day = currentDate.getDate();



// function getCustomDay() {
//   var currentDate = new Date();
//   console.log("🚀 ~ currentDate:", currentDate);
//   var day = currentDate.getDate();
//   console.log("🚀 ~ getCustomDay ~ day:", day);
// }
// getCustomDay();
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// getCustomDay();

// function greeting(name, fatherName = "Abc") {
//   //paramemtws
//   console.log("hello my name is ", name, " and my father name is", fatherName);
// }
// var userName = "Ali";
// var userFatherName = "Ahmad";
// var userName1 = "Ahmad";
// var userFatherName1 = "Asif";
// greeting(userName); //argument
// greeting(userName1, userFatherName1); //argument

function sum(n1, n2) {
  var resultSum = n1 + n2;

  //   console.log("sum", sum);
  return resultSum;
}

var number1 = 1;
var number2 = 56;

var result = sum(number1, number2);
console.log("🚀 ~ result:", result);
if (result > 47) {
  console.log("result is greated");
} else {
  console.log("result is not greater");
}

function getMaximumNumber(n1, n2) {
    
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

var number1= 13;
var number2 = 23;
var result = getMaximumNumber(number1, number2);
console.log("🚀 ~ result:", result);
