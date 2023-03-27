import { createCard } from "./createCard.js"
import houses from "./housesToRent.js"

const container = document.querySelector(".cards")

const displayHouses = houses => {
  houses.forEach(house =>
    container.replaceChildren(...houses.map(createCard))
  )
}

const showOnlyAvailable = document.querySelector(".available-checkbox")
showOnlyAvailable.addEventListener("click", event => {
  const isChecked = event.target.checked

  displayHouses(isChecked ? houses.filter(h => h.available === true) : houses)
})

displayHouses(houses)



