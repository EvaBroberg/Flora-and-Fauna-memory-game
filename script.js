//first page and require username

const startGame = document.querySelector('.start');
const login = document.querySelector('#login');
const form = document.querySelector('form');

function hide(){
  // document.getElementById("login").className = "hide";
  if(form.userid.value.length !== 0){
    document.getElementById("login").className = "hide"
  }else{
    console.log('input required')
  };
}

startGame.addEventListener('click', hide);


//first level

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.picture === secondCard.dataset.picture;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

//timer

// let time = 0;
// let countUp = setInterval(function(){
// ++time;
// document.getElementById("count").innerHTML = time;
// }, 600);

let time = 0;
let countUp = setInterval(function(){
  if(hasFlippedCard){
    ++time;
  document.getElementById("count").innerHTML = time;
  }
}, 600);









