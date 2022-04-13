let card1;
let card2;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {
  name: "Maharshi",
  chips: 15,
};


function startGame() {
  isAlive = true;
  card1 = randomCard();
  card2 = randomCard();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function randomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num == 1) {
    return 11;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}

function renderGame() {
  if (sum > 21) {
    message = "You are out of the game";
    isAlive = false;
  } else if (sum == 21) {
    message = "Congratulations you hit blackjack";
    hasBlackJack = true;
  } else if (sum < 21) {
    message = "Would you like to draw another card?";
  }
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && sum < 21) {
    let card = randomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

let playerEl = document.getElementById("player");
playerEl.textContent = player.name + ": $" + player.chips;
