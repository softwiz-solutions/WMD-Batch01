function targetChild() {
  //   console.log("document", document.childNodes);
  //   var data = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1];
  //   console.log("🚀 ~ targetChild ~ data:", data);
  var div = document.getElementById("para");
  console.log("🚀 ~ targetChild ~ div:", div.childNodes);
  //   console.log("2nd child",div.childNodes[1])
  var secondChild = div.childNodes[1];
  secondChild.innerHTML = "hello";
}
