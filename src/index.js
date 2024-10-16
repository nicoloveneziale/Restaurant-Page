import "./styles.css";
import homeDiv from "./home.js";
import menuDiv from "./menu.js";
import aboutDiv from "./about.js";

const content = document.querySelector("#content");

content.appendChild(homeDiv);

document.querySelector("#home").addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homeDiv);
});

document.querySelector("#menu").addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menuDiv);
});

document.querySelector("#about").addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(aboutDiv);
});