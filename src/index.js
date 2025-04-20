import "./styles.css";
import { displayHome } from "./home.js";

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", displayHome);

displayHome();