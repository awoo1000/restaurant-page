import { getMainDiv } from "./index.js";
import spicedPumpkinLatte from "./spiced-pumpkin-latte.jpg";
import jackOLantern from "./jack-o-lantern.jpg";
import ghostsInTheGraveyard from "./ghosts-in-the-graveyard.jpg";
import mummyDogs from "./mummy-dogs.jpg";
import spookyCalzoneSnake from "./spooky-calzone-snake.jpg";
import halloweenZombieMeatloaf from "./halloween-zombie-meatloaf.jpg";

export function displayMenu() {
    const mainDiv = getMainDiv();
    const restaurantHeader = document.createElement("h1");
    restaurantHeader.textContent = "Regis's Exotic Delicacies";
    mainDiv.appendChild(restaurantHeader);

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "Menu";
    mainDiv.appendChild(menuHeader);

    const beveragesHeader = document.createElement("h3");
    beveragesHeader.textContent = "Beverages";
    mainDiv.appendChild(beveragesHeader);
    
    const beveragesDiv = document.createElement("div");
    beveragesDiv.classList.toggle("section");
    beveragesDiv.classList.toggle("products");

    const beverageOneDiv = document.createElement("div");
    beverageOneDiv.classList.toggle("menu-item");
    const beverageOne = document.createElement("h4");
    beverageOne.textContent = "Spiked Pumpkin Spice Latte";
    beverageOneDiv.appendChild(beverageOne);
    const beverageOneInfo = document.createElement("p");
    beverageOneInfo.textContent = "Everyone's favorite lattte, served in a spooky mug";
    beverageOneDiv.appendChild(beverageOneInfo);
    const beverageOnePrice = document.createElement("p");
    beverageOnePrice.classList.toggle("price")
    beverageOnePrice.textContent = "$3";
    beverageOneDiv.appendChild(beverageOnePrice);
    const beverageOneImage = document.createElement("img");
    beverageOneImage.src = spicedPumpkinLatte;
    beverageOneImage.alt = "Spiced pumpkin latte";
    beverageOneDiv.appendChild(beverageOneImage);
    beveragesDiv.appendChild(beverageOneDiv);

    const beverageTwoDiv = document.createElement("div");
    beverageTwoDiv.classList.toggle("menu-item");
    const beverageTwo = document.createElement("h4");
    beverageTwo.textContent = "Jack-O-Lantern";
    beverageTwoDiv.appendChild(beverageTwo);
    const beverageTwoInfo = document.createElement("p");
    beverageTwoInfo.textContent = "An eye catching alcoholic drink, made with orange juice and topped with ginger ale";
    beverageTwoDiv.appendChild(beverageTwoInfo);
    const beverageTwoPrice = document.createElement("p");
    beverageTwoPrice.classList.toggle("price")
    beverageTwoPrice.textContent = "$3";
    beverageTwoDiv.appendChild(beverageTwoPrice);
    const beverageTwoImage = document.createElement("img");
    beverageTwoImage.src = jackOLantern;
    beverageTwoImage.alt = "Jack-O-Lantern";
    beverageTwoDiv.appendChild(beverageTwoImage);
    beveragesDiv.appendChild(beverageTwoDiv);
    mainDiv.appendChild(beveragesDiv);

    const sidesDiv = document.createElement("div");
    sidesDiv.classList.toggle("section");
    sidesDiv.classList.toggle("products");

    const sideOneDiv = document.createElement("div");
    sideOneDiv.classList.toggle("menu-item");
    const sideOne = document.createElement("h4");
    sideOne.textContent = "Ghosts in the Graveyard";
    sideOneDiv.appendChild(sideOne);
    const sideOneInfo = document.createElement("p");
    sideOneInfo.textContent = "Sweet and creamy pudding cups with crumbled Oreos on top";
    sideOneDiv.appendChild(sideOneInfo);
    const sideOnePrice = document.createElement("p");
    sideOnePrice.classList.toggle("price")
    sideOnePrice.textContent = "$1.30";
    sideOneDiv.appendChild(sideOnePrice);
    const sideOneImage = document.createElement("img");
    sideOneImage.src = ghostsInTheGraveyard;
    sideOneImage.alt = "Ghosts in the Graveyard";
    sideOneDiv.appendChild(sideOneImage);
    sidesDiv.appendChild(sideOneDiv);

    const sideTwoDiv = document.createElement("div");
    sideTwoDiv.classList.toggle("menu-item");
    const sideTwo = document.createElement("h4");
    sideTwo.textContent = "Mummy Dogs";
    sideTwoDiv.appendChild(sideTwo);
    const sideTwoInfo = document.createElement("p");
    sideTwoInfo.textContent = "Mummified bite-sized hotdogs wrapped in strips of crispy dough";
    sideTwoDiv.appendChild(sideTwoInfo);
    const sideTwoPrice = document.createElement("p");
    sideTwoPrice.classList.toggle("price")
    sideTwoPrice.textContent = "$3";
    sideTwoDiv.appendChild(sideTwoPrice);
    const sideTwoImage = document.createElement("img");
    sideTwoImage.src = mummyDogs;
    sideTwoImage.alt = "Mummy Dogs";
    sideTwoDiv.appendChild(sideTwoImage);
    sidesDiv.appendChild(sideTwoDiv);
    mainDiv.appendChild(sidesDiv);

    const mainDishHeader = document.createElement("h3");
    mainDishHeader.textContent = "Main Dish";
    mainDiv.appendChild(mainDishHeader);

    const mainDishDiv = document.createElement("div");
    mainDishDiv.classList.toggle("section");
    mainDishDiv.classList.toggle("products");

    const mainDishOneDiv = document.createElement("div");
    mainDishOneDiv.classList.toggle("menu-item");
    const mainDishOne = document.createElement("h4");
    mainDishOne.textContent = "Spooky Snake Calzone";
    mainDishOneDiv.appendChild(mainDishOne);
    const mainDishOneInfo = document.createElement("p");
    mainDishOneInfo.textContent = "Delicious snake-shaped calzone";
    mainDishOneDiv.appendChild(mainDishOneInfo);
    const mainDishOnePrice = document.createElement("p");
    mainDishOnePrice.classList.toggle("price")
    mainDishOnePrice.textContent = "$4";
    mainDishOneDiv.appendChild(mainDishOnePrice);
    const mainDishOneImage = document.createElement("img");
    mainDishOneImage.src = spookyCalzoneSnake;
    mainDishOneImage.alt = "Spooky Snake Calzone";
    mainDishOneDiv.appendChild(mainDishOneImage);
    mainDishDiv.appendChild(mainDishOneDiv);

    const mainDishTwoDiv = document.createElement("div");
    mainDishTwoDiv.classList.toggle("menu-item");
    const mainDishTwo = document.createElement("h4");
    mainDishTwo.textContent = "Halloween Zombie Meatloaf";
    mainDishTwoDiv.appendChild(mainDishTwo);
    const mainDishTwoInfo = document.createElement("p");
    mainDishTwoInfo.textContent = "Tasty and well-cooked zombie-looking meatloaf";
    mainDishTwoDiv.appendChild(mainDishTwoInfo);
    const mainDishTwoPrice = document.createElement("p");
    mainDishTwoPrice.classList.toggle("price")
    mainDishTwoPrice.textContent = "$7";
    mainDishTwoDiv.appendChild(mainDishTwoPrice);
    const mainDishTwoImage = document.createElement("img");
    mainDishTwoImage.src = halloweenZombieMeatloaf;
    mainDishTwoImage.alt = "Halloween Zombie Meatloaf";
    mainDishTwoDiv.appendChild(mainDishTwoImage);
    mainDishDiv.appendChild(mainDishTwoDiv);
    mainDiv.appendChild(mainDishDiv);
}