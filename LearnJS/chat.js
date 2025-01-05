function sendMessage() {
  var input = document.getElementById("message").value; // user input
  if (input == "") {
    alert("Please enter a message");
    return;
  }
  var div = document.getElementById("message-container"); // <div id="message-container"> </div>
  var messagePara = document.createElement("p"); //<p></p>
  messagePara.setAttribute("class", "user-text");

  var textMessage = document.createTextNode(input); //user input node
  messagePara.appendChild(textMessage); // <p>textMessage</p>
  div.appendChild(messagePara); // <div id="message-container">... <p>textMesage</p></div>
  document.getElementById("message").value = "";
}
