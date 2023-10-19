// Write your code here!

// test 1 is passing
const main = document.getElementById("main");
main.parentNode.removeChild(main);

//test 2 is passing
const newHeader = document.createElement("h1");


//test 3 is passing
newHeader.id = "victory";


//test 4 is passing
const text = document.createTextNode("Danny Devito is the champion");
newHeader.appendChild(text);

document.body.append(newHeader);