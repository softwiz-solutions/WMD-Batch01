// var age = 23;

/*console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfk;sldjf")
console.log("jfksldjf")
console.log("jfksldjf")
console.log("jfksldjf")*/

document.write("JS first class , js external file is working");

// var age = 16;
// var studentName = "Waqas ali ";
// var address = "St#04, shekiupar road fsd";
// var phoneNumber = "+9233242324344";
// var symbol = "+ - 2";
// var isHafiz = false;
// var isHafiz2 = "false";

// console.log("age ", typeof age);
// console.log("stdName", typeof studentName);
// console.log("address", typeof address);
// console.log("phoneNumber", typeof phoneNumber);
// console.log("symbol", typeof symbol);
// console.log("isHafiz", typeof isHafiz);
// console.log("isHafiz2", typeof isHafiz2)

// var age; // declartion
// age = 23; // initliazation
// var age = 23; // declaration + initlization
var age = 23;
console.log("age", age);
age = 45;
console.log("age", age);

// **********************Variable Naming Rules***************************
// 1. only contains, (A-Z),(a-z),(0-9) and _
// example
// age -->correct
// age1 -->correct
// AGE1 -->correct
// Age1 -->correct
// age# -->wrong
// Age# -->wrong
// studentname --> student_name
// 2. variaable must start with (A-Z), (a-z), _     -- (not from number)
// Example
// age-->correct
// _address-->corret
// 1address-->wrong

// 3. varialbe name can't be a keyword;
// example
// var if-->wrong

// 4. js is case sensitive

// var studentName="ahmad"
// var StudentName="ali"
// console.log("studentName=" + studentName) --> ahmad
// console.log("StudentName=" + StudentName)-->ali

// console.log("my name is"+name,"my adddress is"+address)

// 1. write a js program, enter your name,age,gender,father name,address,phone number and uni and show this in a single paragraph

// var age,studetName,gender,fatherName,address;

// age=23;
// studetName="ahmad";

// Arithmetic Operators
// var n1 = 23;
// var n2 = 4;
// var sum = n1 + n2;
// console.log("result", sum);

// Modulus Operator
// console.log("even", 53 % 2);

// var n1 = 33;
// var n2 = 11;
// var result = n1 % n2;
// console.log("result", result);

// Increment / Decrement
var n1 = 2;
// n1 = n1 + 10;
// n1 = n1 + 1;
// console.log("n1", n1);
n1++; // n1=n1+1 --> n1=3
n1--; // n1=n1-1 --> n1=2
++n1; // n1=1+n1 --> n1=3
--n1; // n1=1+n1 --> n1=2
console.log("n1", n1);

// prefix ++n1, postFix n1++

// var a = 1;
// var b = ++a;
// a=a+1
// b=a
// var b = a++;
// b=a;
// a=a+1
// console.log("b", b);
// console.log("a", a);

var x = 1;
var result = x++ + x-- - x++ - ++x + ++x - x--;
console.log("result", result);
console.log("x", x);
