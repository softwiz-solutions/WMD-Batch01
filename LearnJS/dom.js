function targetChild() {
  // //   console.log("document", document.childNodes);
  // //   var data = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1];
  // //   console.log("🚀 ~ targetChild ~ data:", data);
  // var div = document.getElementById("para");
  // console.log("🚀 ~ targetChild ~ div:", div.childNodes);
  // //   console.log("2nd child",div.childNodes[1])
  // var secondChild = div.childNodes[1];
  // secondChild.innerHTML = "hello";
  var div = document.getElementById("para-div");
  // // var firstChild=div.childNodes[0]
  // var firstChild = div.firstChild;
  // console.log("🚀 ~ targetChild ~ firstChild:", firstChild);
  // var lastChildChild = div.lastChild;
  // console.log("🚀 ~ targetChild ~ lastChildChild:", lastChildChild);
  // var nextSibling = div.nextSibling;
  // console.log("🚀 ~ targetChild ~ nextSibling:", nextSibling);
  // var previouseSibling = div.previousSibling;
  // console.log("🚀 ~ targetChild ~ previouseSibling:", previouseSibling);
  // console.log("🚀 ~ targetChild ~ secondPara:", secondPara)

  // console.log("2nd para", secondPara.firstChild.nodeValue);
  // console.log("first childe name", div.firstChild.nodeName);
  const secondPara = document.getElementById("2nd-para");
  // secondPara.setAttribute("class", "js-class");
  console.log("class", secondPara.attributes[1].nodeValue);
}
