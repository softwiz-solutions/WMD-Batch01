// var plan1 = {
//   // key:value-->property
//   name: "Plan1",
//   price: 12.4,
//   space: 100,
//   transfer: 123,
//   pages: 10,
// };
// console.log("plna", plan1);
// console.log("plan  1 name", plan1.pages);

// plan1.space = 9;
// console.log("plna after space", plan1.validity);

// plan1.validity = "1 year";
// console.log("plna after validity", plan1);

// delete plan1.name;
// delete plan1.price;
// delete plan1.pages;
// console.log("plan1", plan1);

// var student1 = {
//   name: "Waqas",
//   rollNo: 12,
//   subjects: ["english", "urdu", "biology"],
//   present: true,
//   marks: {
//     english: 80,
//     urdu: 70,
//     biology: 90,
//   },
//   studentActvity: function (name) {
//     console.log("pass", this.subjects[1]);
//   },
// };
// var student2 = {
//   name: "Bilal",
//   rollNo: 13,
//   subjects: ["english", "urdu", "biology"],
//   present: false,
//   marks: {
//     english: 20,
//     urdu: 30,
//     biology: 20,
//   },
//   studentActvity: function (name) {
//     console.log("pass", student1.subjects[1]);
//   },
// };
// const showConsole = function () {
//   console.log("hello");
// };
// showConsole();

// console.log("students1", student1.subjects[2]);
// console.log("student marks in biology", student2.studentActvity("hello"));

var students = [
  {
    name: "Waqas",
    rollNo: 12,
    subjects: ["english", "urdu", "biology"],
    present: true,
    marks: {
      english: 80,
      urdu: 70,
      biology: 90,
    },
    studentActvity: function (name) {
      console.log("pass", this.subjects[1]);
    },
  },

  {
    name: "Bilal",
    rollNo: 13,
    subjects: ["english", "urdu", "biology"],
    present: false,
    marks: {
      english: 20,
      urdu: 30,
      biology: 20,
    },
    studentActvity: function (name) {
      //   console.log("pass", student1.subjects[1]);
    },
  },
];
console.log("student 2 marks", students[1].marks.english);



var propertyExist="name" in students[1]
console.log("🚀 ~ propertyExist:", propertyExist)

