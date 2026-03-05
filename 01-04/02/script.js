const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const headerThree = document.createElement("h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";
container.appendChild(headerThree);

const content = document.createElement("div");
content.classList.add("content");
content.style.border = "2px solid black";
content.style.backgroundColor = "pink";

const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div";
content.appendChild(headerOne);

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
content.appendChild(anotherParagraph);

container.appendChild(content);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
