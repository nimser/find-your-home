import { createCard } from "./createCard.js"
import houses from "./houseToRent.js"

const displayHouses = houses => {
  const container = document.querySelector(".cards")
  container.replaceChildren(...houses.map(createCard))
}

const handleShowOnlyAvailable = () => {
  const showOnlyAvailableCheckbox = document.querySelector(
    ".available-checkbox"
  )
  showOnlyAvailableCheckbox.addEventListener("click", event => {
    const isChecked = event.target.checked
    displayHouses(isChecked ? houses.filter(h => h.available === true) : houses)
  })
}

const handleFilterType = () => {
  const filterTypeOption = document.querySelector(".select")
  filterTypeOption.addEventListener("change", event => {
    const type = event.target.value
    const isAll = type === "All"
    displayHouses(isAll ? houses : houses.filter(h => h.type === type))
  })
}

const handleFilterFromSearch = () => {
  const searchInput = document.querySelector(".search-input")
  searchInput.addEventListener("input", event => {
    const text = event.target.value
    const results = houses.filter(h => h.name.toLowerCase().includes(text.toLowerCase()))
    displayHouses(results)
  })
}

const render = () => {
  handleFilterType()
  handleShowOnlyAvailable()
  handleFilterFromSearch()
  displayHouses(houses)
}

render()
