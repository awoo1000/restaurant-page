import "./styles.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";

export function getMainDiv() {
    const mainDiv = document.querySelector("#content");
    mainDiv.textContent = "";

    return mainDiv;
}

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", displayHome);

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", displayMenu);

// displayHome();