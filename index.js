let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let reload= document.getElementById("reload");


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firsCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firsCard, secondCard];
  sum = firsCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.innerHTML = "Cards: ";
  sumEl.innerHTML = `Sum: ${sum}`;

  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You won!";
    hasBlackJack = true;
  } else {
    message = "You are out!";
    isAlive = false;
  }

  messageEl.innerHTML = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    renderGame();
  }
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
}

reload.addEventListener("click", function () {
  window.location.reload()
})