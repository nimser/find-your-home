

function createCardHeader(img) {
  const cardHeader = document.createElement("div")
  const cardImg = document.createElement("div")

  cardHeader.classList.add("card-header")
  cardImg.classList.add("card-img")
  cardImg.style.backgroundImage = `url('${img}')`

  cardHeader.appendChild(cardImg)
  return cardHeader
}
function createCardBody(name, desc) {
  const cardBody = document.createElement("div")
  const cardTitle = document.createElement("h2")
  const cardDescription = document.createElement("p")
  const cardButton = document.createElement("button")

  cardBody.classList.add("card-body")
  cardTitle.classList.add("card-title")
  cardDescription.classList.add("card-description")
  cardButton.classList.add("card-button")

  cardTitle.textContent = name
  cardDescription.textContent = desc
  cardButton.textContent = "I want it!"

  cardBody.append(cardTitle, cardDescription, cardButton)
  return cardBody
}

export function createCard({ img, name, desc }) {
  const card = document.createElement("div")
  card.classList.add("card")
  const cardHeader = createCardHeader(img)
  const cardBody = createCardBody(name, desc)
  card.append(cardHeader, cardBody)

  return card
}

