import { createCard } from "./createCard";
import houses from "./houseToRent";

const displayHouses = (houses) => {
  const container = document.querySelector(".cards");
  container.replaceChildren(...houses.map(createCard));
};

const render = () => {
  const showOnlyAvailableCheckbox = document.querySelector(
    ".available-checkbox"
  );

  showOnlyAvailableCheckbox.addEventListener("click", (event) => {
    if (event.target.checked) {
      displayHouses(houses.filter((h) => h.available === true));
    } else {
      displayHouses(houses);
    }
  });

  displayHouses(houses);
};

render();
