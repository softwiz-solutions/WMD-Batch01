console.log("Hello TS")
console.log("Hello TSC")


var number1:number=19
var number2:number=1;

number2=2;
console.log(number1+number2)


var userName:string="John Doe"
var userAge:number=30
var isActive:boolean=true

var someValue: any = "Hello TypeScript";
var strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16




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

interface Person{
    name:string,
    age:number,
    isActive:boolean,
    getName:()=>string
}

var student:Person={
    name:"ali",
    age:20,
    isActive:true,
    getName:function(){
        return this.name
    },
}

