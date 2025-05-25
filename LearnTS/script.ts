// console.log("Hello TS")
// console.log("Hello TSC")

// var number1:number=19
// var number2:number=1;

// number2=2;
// console.log(number1+number2)

// var userName:string="John Doe"
// var userAge:number=30
// var isActive:boolean=true

// var someValue: any = "Hello TypeScript";
// var strLength: number = (someValue as string).length;
// console.log(strLength); // Output: 16

// const input = document.getElementById("username") as HTMLInputElement;
// input.value = "TypeScript user";

// var numb=12;
// numb="12"
// function testParam(name:string,fName:string,...numb:number[]){
//     console.log("name",name)
//     console.log("fName",fName)
//     console.log("number",numb)
// }

// var testParam=function (name:string,fName:string,...numb:number[]){
//     console.log("name",name)
//     console.log("fName",fName)
//     console.log("number",numb)
// }
// testParam("ali","ali",1,2,3,4,5,6,7,8,9,10)

// var testParam= (a:number,b:number):number => {
//   return a+b
// }

// var testParam= (a:number):number =>  a+b
// var testParam= (a:number):number =>  a+1

// console.log("test",testParam(1))

// var value:string|number;

// interface Person {
//   name: string;
//   age: number;
//   isActive: boolean;
//   getName: string[] | string | (() => string);
// }

// var student: Person = {
//   name: "ali",
//   age: 20,
//   isActive: true,
//   getName: function () {
//     return this.name;
//   },
//   getName: "world"
// };

interface student {
  [key: string]: number;
}

// var student: student = {
//   "math": 90,
// };
// console.log("student.match",student["math"])

// interface CityTemp {
//   [key: string]: number;
// }
// var cityTemp: CityTemp = {};
// var cites = ["karachi", "lahore", "islamabad"];
// for (let i = 0; i < cites.length; i++) {
//   let value = cites[i];
//   console.log("🚀 ~ value:", value);
//   cityTemp[value] = Math.floor(Math.random() * 100); // create random keys of object
// }
// console.log("cityTemp", cityTemp);

// **************************Interface and inheritance**************************

// interface Person {
//   age: number;
//   name: string;
//   fName: string;
//   phoneNumber: string;
// }
// interface Musician extends Person {
// //   phoneNumber: number;
//   instrument: string;
// }
// var drummer: Musician = {
//   age: 12,
//   name: "John",
//   fName: "Doe",
//   instrument: "Drums",
//   phoneNumber: "1234567890",
// };

interface Animal {
  name: string;
  sound: string;
  age: number;
}
interface Dog extends Animal {
  breed: string;
}
interface Cat extends Animal {
  numberOfLegs: string;
}
interface Bird extends Animal {
  canFly: boolean;
}

let sparrow: Bird = {
  name: "Sparrow",
  sound: "Chirp",
  age: 2,
  canFly: true,
};
let bulldog: Dog = {
  name: "Bulldog",
  sound: "Bark",
  age: 5,
  breed: "Bulldog",
};
let persianCat: Cat = {
  name: "Persian Cat",
  sound: "Meow",
  age: 3,
  numberOfLegs: "Four",
};
