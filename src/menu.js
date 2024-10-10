const menuDiv = document.createElement("div");

function createFoodContainer(h2, p) {
    let foodContainer = document.createElement("div")
    foodContainer.classList.add("food-container");
    foodContainer.append(h2, p);
    return foodContainer;
}

const appetisersDiv = document.createElement("div");
appetisersDiv.id = "appetisers-container";

const appetisersHeader = document.createElement("h1");
appetisersHeader.innerHTML = "Appetisers";

const caprese = document.createElement("h2");
caprese.innerHTML = "Caprese";

const capreseDes = document.createElement("p");
capreseDes.innerHTML = "Beauiful local tomato paired with italian buffalo mozzerella, seasoned with salt and parsley";

const seasonalVeg = document.createElement("h2");
seasonalVeg.innerHTML = "Seasonal Greens";

const seasonalVegDes = document.createElement("p");
seasonalVegDes.innerHTML = "Fresh local greens prepared in numerous ways to your liking, honey glased parsnips and tender stem broccoli";

appetisersDiv.append(appetisersHeader, createFoodContainer(caprese, capreseDes), createFoodContainer(seasonalVeg, seasonalVegDes));

menuDiv.append(appetisersDiv);

export default menuDiv;