export function displayHome() {
    const mainDiv = document.querySelector("#content");
    mainDiv.textContent = "";
    const restaurantHeader = document.createElement("h1");
    restaurantHeader.classList.toggle("restaurant-name");
    restaurantHeader.textContent = "Regis's Exotic Delicacies";
    mainDiv.appendChild(restaurantHeader);

    const userReviewDiv = document.createElement("div");
    userReviewDiv.classList.toggle("section");
    userReviewDiv.classList.toggle("user-review");
    const userReview = document.createElement("p");
    userReview.textContent = "Regis's Exotic Delicacies has the best meals and beverages made by the mysterious Regis himself. No one really knows how old he is, but his cuisine seems to be inspired by the early ages. The atmosphere is relaxing and I would definitely eat here again.";
    userReviewDiv.appendChild(userReview);
    const reviewer = document.createElement("h4");
    reviewer.textContent = "Geralt";
    userReviewDiv.appendChild(reviewer);
    mainDiv.appendChild(userReviewDiv);

    const storeHours = document.createElement("div");
    storeHours.classList.toggle("section");
    storeHours.classList.toggle("hours");
    const hours = document.createElement("h3");
    hours.textContent = "Store Hours";
    storeHours.appendChild(hours);
    const weekdayHours = document.createElement("p");
    weekdayHours.textContent = "Weekdays: 8:00 AM - 9:00 PM";
    storeHours.appendChild(weekdayHours);
    const saturdayHours = document.createElement("p");
    saturdayHours.textContent = "Saturdays: 8:00 AM - 6:00 PM";
    storeHours.appendChild(saturdayHours);
    mainDiv.appendChild(storeHours);

    const storeLocation = document.createElement("div");
    storeLocation.classList.toggle("section");
    storeLocation.classList.toggle("location");
    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";
    storeLocation.appendChild(locationHeader);
    const location = document.createElement("p");
    location.textContent = "204 Fantasy Lane, Toussaint, The Continent";
    storeLocation.appendChild(location);
    mainDiv.appendChild(storeLocation);
}