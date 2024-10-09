import image1 from "./imgs/food1.jpg";
import image2 from "./imgs/restuarant.jpg";

const homeDiv = document.createElement("div");

const welcomeDiv = document.createElement("div");
welcomeDiv.id = "welcome-banner"

const foodBanner = document.createElement("div");
foodBanner.id = "food-banner"

const welcomeHeading = document.createElement("h1")
welcomeHeading.innerHTML = "Food done at a higher standard";

const welcomeParagraph = document.createElement("p");
welcomeParagraph.innerHTML = "Our chefs here at Restaurant de Faux create some of the highest quaity dishes, stemming from years of quality training";

const foodImage1 = document.createElement("img")
foodImage1.src = image1;
foodImage1.alt = "food";

const restaurantImage = document.createElement("img");
restaurantImage.src = image2;
restaurantImage.alt = "restaurant";

const aboutContainer = document.createElement("div");
aboutContainer.id = "about-container";

const aboutHeader = document.createElement("h1");
aboutHeader.innerHTML = "What we offer"

const aboutText = document.createElement("p");
aboutText.innerHTML = "We are proud of our extensive and unqiue wine collection, offering a wine for every meal and occasions. We have a planned speciales of the season and a completely rotational menu with new flavours and twists being added constantly. Furthermore, we offer a bar with highest quality cocktails and a grand selection of national coffees ranging from every continent"


welcomeDiv.append(welcomeHeading, welcomeParagraph);

foodBanner.append(foodImage1);

aboutContainer.append(restaurantImage, aboutHeader, aboutText);

homeDiv.append(foodBanner,welcomeDiv, aboutContainer);

export default homeDiv;