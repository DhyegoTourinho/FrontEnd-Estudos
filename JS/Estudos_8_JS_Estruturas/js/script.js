const listItens = document.getElementsByTagName("li");

const title = document.getElementById("title");

const query = document.querySelectorAll(".product");

console.log(listItens);
console.log(title);
console.log(query);

// -----------------------------------------------

// CreateElement and insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// AppendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//RelaplaceChild

const h2 = document.createElement("h2");

h2.textContent = "Novo Titulo";

header.replaceChild(h2, title);

//CreateTextNode

const mainContainer = document.getElementById("main-container");

const myText = document.createTextNode("Texto de exemplo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(myText);

mainContainer.appendChild(h3);

//Alterando atributos:
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");
firstLink.setAttribute("target", "_blank");

// ALterando altura e largura:

const footer = document.querySelector("footer");

for (li in listItens) {
    li.style.background = "red";
}
mainContainer.style.backgroundColor = "gray";























