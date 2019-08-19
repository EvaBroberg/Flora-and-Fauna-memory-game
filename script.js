const startGame = document.querySelector('.start');
const game = document.querySelector('.game');
const login = document.querySelector('#login');
const form = document.querySelector('form');
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let turns = 0;
let score = 0;
const soundForCardFlip = new Audio('sounds/card-flip.wav');
const soundForCardsMatch = new Audio('sounds/match.mp3');
const soundForNoMatchingCard = new Audio('sounds/no-match.wav');
const bgMusic = new Audio('sounds/bg.mp3');
let nextLevel = document.getElementById('newLevel');
let playBtn = document.getElementById('play');

function openModal(){
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', closeOutside);
  modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}
function closeOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
startGame.addEventListener('click', hide);
login.addEventListener('submit', e => {
  bgMusic.play();
  e.preventDefault();
  hide();
});

function hide(){
    if(form.userid.value.length !== 0){
      document.getElementById("login").className = "hide";
      username = document.getElementById('username').value;
      document.getElementById('player').innerHTML = 'Good luck ' + username + '!';
    }else{
      openModal();
    };
  }
  
  function flipCard() {
    if (lockBoard) return;
    soundForCardFlip.play();
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
    if (isMatch) {
      soundForCardsMatch.play();
      score += 2;
      disableCards();
    }else {
      unflipCards();
      soundForNoMatchingCard.play();
    }
  }
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }
  
  function unflipCards() {
    if(turns < 10){
      turns += 1;
    }else{
      document.getElementById("gameover").style.display = "block";
    }
    
    document.getElementById('turns').innerText = 'Flips: ' + turns;
    lockBoard = true;
    
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      
      resetBoard();
    }, 1100);
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
  
  let time = 0;
  let countUp = setInterval(function(){
    if(hasFlippedCard){
      ++time;
    }
  }, 600);


function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = 'Time: ' + seconds;

      if (--timer < 0 && score !== 6) {
          document.getElementById("gameover").style.display = "block";
      }
      if(score === 6){
        timer = 0;
        document.getElementById("nextLevel").style.display = "block";
      }
  }, 1000);
}

window.onload = function () {
  var timeLimit = 20,
      display = document.querySelector('#time-remaining');
  startTimer(timeLimit, display);
};

document.getElementById("tryAgain").addEventListener("click", function(){
  document.location.reload();
});

//winning
document.getElementById("playAgain").addEventListener("click", function(){
  document.location.reload();
});
//




