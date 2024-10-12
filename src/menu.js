const menuDiv = document.createElement("div");

function createFoodContainer(h2, p) {
    let foodContainer = document.createElement("div")
    foodContainer.classList.add("food-container");
    foodContainer.append(h2, p);
    return foodContainer;
}

const appetisersDiv = document.createElement("div");
appetisersDiv.classList.add("menu-container")

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

const focaccia = document.createElement("h2");
focaccia.innerHTML = "Focaccia"

const focacciaDes = document.createElement("p");
focacciaDes.innerHTML = "Delicious homemade bread, served simply with olive oil and balsamic vinegar";

const olives = document.createElement("h2");
olives.innerHTML = "Mediterrainian Olives";

const olivesDes = document.createElement("p");
olivesDes.innerHTML = "Mixed olives, stuffed with a selection of feta, peppers, chili, dried, green and black";

appetisersDiv.append(appetisersHeader, createFoodContainer(caprese, capreseDes), createFoodContainer(seasonalVeg, seasonalVegDes), createFoodContainer(focaccia, focacciaDes), createFoodContainer(olives, olivesDes));

const mainsDiv = document.createElement("div");
mainsDiv.classList.add("menu-container")

const mainsHeader = document.createElement("h1");
mainsHeader.innerHTML = "Mains";

const pizza = document.createElement("h2");
pizza.innerHTML = "Molise Pizza";

const pizzaDes = document.createElement("p");
pizzaDes.innerHTML = "Classic pizza done the molise way, with local spicy sausage and beuatiful buffalo mozzerella";

const pasta = document.createElement("h2");
pasta.innerHTML = "Pasta Ceice";

const pastaDes = document.createElement("p");
pastaDes.innerHTML = "Chickpea pasta with fried guanciale, parsley, fresh tomatoes and plenty of parmagianno";

const steak = document.createElement("h2");
steak.innerHTML = "8oz Steak";

const steakDes = document.createElement("p")
steakDes.innerHTML = "Marbled steak cooked to rare, topped with pepercorn sauce, sided by asparagous and honey glazed grilled carrot";

mainsDiv.append(mainsHeader, createFoodContainer(pizza,pizzaDes), createFoodContainer(pasta,pastaDes), createFoodContainer(steak, steakDes));

const desertsDiv = document.createElement("div");
desertsDiv.classList.add("menu-container");

const desertsHeader = document.createElement("h1");
desertsHeader.innerHTML = "Deserts";

const tiramisu = document.createElement("h2");
tiramisu.innerHTML = "Tiramisu";

const tiramisuDes = document.createElement("p");
tiramisuDes.innerHTML = "Beautiful layered creamy cake, topped with chocolate, biscuit doused in coffee";

const gelato = document.createElement("h2");
gelato.innerHTML = "Gelato";

const gelatoDes = document.createElement("p");
gelatoDes.innerHTML = "Creamy, beautiful homemade gelato, made with love";

desertsDiv.append(desertsHeader, createFoodContainer(tiramisu, tiramisuDes), createFoodContainer(gelato, gelatoDes));

menuDiv.append(appetisersDiv, mainsDiv, desertsDiv);

export default menuDiv;