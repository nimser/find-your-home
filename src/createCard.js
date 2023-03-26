function createCardHeader(img) {
  const cardHeader = document.createElement("div");
  const cardImg = document.createElement("div");

  cardHeader.classList.add("card-header");
  cardImg.classList.add("card-img");

  cardImg.style.backgroundImage = `url('${img}')`;
  cardHeader.appendChild(cardImg);

  return cardHeader;
}

function createCardBody(name, type, desc) {
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardDescription = document.createElement("p");
  const cardButton = document.createElement("button");

  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardDescription.classList.add("card-description");
  cardButton.classList.add("card-button");

  cardTitle.textContent = name;
  cardDescription.textContent = desc;
  cardButton.textContent = "I want it!";

  cardBody.append(cardTitle, cardDescription, cardButton);
  return cardBody;
}

export function createCard({ name, type, desc, img }) {
  // This function should create a card item
  const card = document.createElement("div");
  card.className = "card";
  const header = createCardHeader(img);
  const body = createCardBody(name, type, desc);
  card.append(header, body);
  return card;
}

/*<!-- CARD EXAMPLE -->
<div class="card">
  <div class="card-header">
    <div
      class="card-img"
      style="
        background-image: url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
      "
    ></div>
  </div>
  <div class="card-body">
    <h2 class="card-title">Sample Card</h2>
    <p class="card-description">
      This is just a sample card, take the structure of this card as an
      example for the function createCard
    </p>
    <button class="card-button">I want it!</button>
  </div>
</div>
<!-- END OF THE CARD EXAMPLE -->*/
