import { getMainDiv } from "./index.js";

export function displayContact() {
    const mainDiv = getMainDiv();
    const restaurantHeader = document.createElement("h1");
    restaurantHeader.textContent = "Regis's Exotic Delicacies";
    mainDiv.appendChild(restaurantHeader);

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    mainDiv.appendChild(contactHeader);

    const contactOneDiv = document.createElement("div");
    contactOneDiv.classList.toggle("section");
    contactOneDiv.classList.toggle("contact-person");

    const contactOne = document.createElement("h3");
    contactOne.textContent = "Regis";
    contactOneDiv.appendChild(contactOne);
    const contactOneInfo = document.createElement("p");
    contactOneInfo.textContent = "Head Chef";
    contactOneDiv.appendChild(contactOneInfo);
    const contactOneNo = document.createElement("p");
    contactOneNo.textContent = "1111-2222-3333";
    contactOneDiv.appendChild(contactOneNo);
    const contactOneEmail = document.createElement("p");
    contactOneEmail.textContent = "regisTheSharpFanged@fakeEmail.com";
    contactOneDiv.appendChild(contactOneEmail);
    mainDiv.appendChild(contactOneDiv);
    
    const contactTwoDiv = document.createElement("div");
    contactTwoDiv.classList.toggle("section");
    contactTwoDiv.classList.toggle("contact-person");

    const contactTwo = document.createElement("h3");
    contactTwo.textContent = "Milva";
    contactTwoDiv.appendChild(contactTwo);
    const contactTwoInfo = document.createElement("p");
    contactTwoInfo.textContent = "Assistant";
    contactTwoDiv.appendChild(contactTwoInfo);
    const contactTwoNo = document.createElement("p");
    contactTwoNo.textContent = "3333-8888-1111";
    contactTwoDiv.appendChild(contactTwoNo);
    const contactTwoEmail = document.createElement("p");
    contactTwoEmail.textContent = "moody_druid@fakeEmail.com";
    contactTwoDiv.appendChild(contactTwoEmail);
    mainDiv.appendChild(contactTwoDiv);

    const contactThreeDiv = document.createElement("div");
    contactThreeDiv.classList.toggle("section");
    contactThreeDiv.classList.toggle("contact-person");

    const contactThree = document.createElement("h3");
    contactThree.textContent = "Dandelion";
    contactThreeDiv.appendChild(contactThree);
    const contactThreeInfo = document.createElement("p");
    contactThreeInfo.textContent = "Restaurant Troubadour/Musician";
    contactThreeDiv.appendChild(contactThreeInfo);
    const contactThreeNo = document.createElement("p");
    contactThreeNo.textContent = "0000-5555-4200";
    contactThreeDiv.appendChild(contactThreeNo);
    const contactThreeEmail = document.createElement("p");
    contactThreeEmail.textContent = "dandelionTheViscount@fakeEmail.com";
    contactThreeDiv.appendChild(contactThreeEmail);
    mainDiv.appendChild(contactThreeDiv);
}