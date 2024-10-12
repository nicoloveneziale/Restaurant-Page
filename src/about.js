const aboutDiv = document.createElement("div");

const information = document.createElement("div");
information.id = "information-container";

const informationHeader = document.createElement("h2");
informationHeader.innerHTML = "Information";

const contactHeader = document.createElement("h3");
contactHeader.innerHTL = "Conact Us";

const emailLabel = document.createElement("Label");
emailLabel.innerHTML = "Email:"

const email = document.createElement("p");
email.innerHTML = "restaurantdefaux@gmail.com";

const numberLabel = document.createElement("Label");
numberLabel.innerHTML = "Telephone Number:"

const number = document.createElement("p");
number.innerHTML = "01234 5678901";

information.append(informationHeader, contactHeader, emailLabel, email, numberLabel, number);

aboutDiv.append(information);

export default aboutDiv;