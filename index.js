// Write your code here!

// test 1 is passing
const main = document.getElementById("main");
main.parentNode.removeChild(main);

//test 2 is passing
const newHeader = document.createElement("h1");
document.body.append(newHeader);

//test 3 is failing
newHeader.id = "victory";

//test 4 is failing
text = document.createTextNode("Danny Devito is the champion");
newHeader.appendChild(text);