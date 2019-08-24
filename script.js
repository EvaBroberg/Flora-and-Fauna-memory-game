const startGame = document.querySelector('.start');
const game = document.getElementById('game');
const game2 = document.getElementById('game2');
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
let bgMusic = new Audio('sounds/bg.mp3');
let nextLevel = document.getElementById('newLevel');
let playBtn = document.getElementById('play');

bgMusic.volume = 0.1;

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
      turning();
      disableCards();
    }
    else {
        turning();
      unflipCards();
      soundForNoMatchingCard.play();
    }
  }
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    if(score === 10 || score === 28) {
      document.getElementById("nextLevel").style.display = "block";
      bgMusic.volume = 0;
      playBtn.addEventListener('click', () => {
        document.getElementById("nextLevel").style.display = "none";
        bgMusic.volume = 0.1;
      });
    } 
    if (score === 10){
      document.getElementById("game").style.display = "none";
      document.getElementById("game2").style.display = "flex";
    }
    if (score === 28){
      document.getElementById("game2").style.display = "none";
      document.getElementById("game3").style.display = "flex";
    }
    if (score === 52) {
      document.getElementById("game3").style.display = "none";
      document.getElementById("youWon").style.display = "block";
    }
  }

  function turning() {
    if(turns < 30){
        turns += 1;
      }else{
        document.getElementById("gameover").style.display = "block";
      }

      document.getElementById('turns').innerText = 'Turns: ' + turns;
      lockBoard = true;
  }

  function unflipCards() {
    
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
  
//TIMER needs testing

function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer);

      seconds = seconds < 10 ? + seconds : seconds;

      display.textContent = 'Time: ' + seconds;

      if (--timer < 0) {
          document.getElementById("gameover").style.display = "block";
      }  
    //   if(score === 10){
    //     document.getElementById("nextLevel").style.display = "block";
    //     play.addEventListener('click', () => {
    //       timer++;
    //     });
        
    //   }
    //   if (--timer < 0 && score !== 22) {
    //     document.getElementById("gameover").style.display = "block";
    //   }
  }, 1000);
}

window.onload = function () {
  var timeLimit = 60,
      display = document.querySelector('#time-remaining');
  startTimer(timeLimit, display);
};


//losing
document.getElementById("tryAgain").addEventListener("click", function(){
  document.location.reload();
});

//winning
document.getElementById("playAgain").addEventListener("click", function(){
  document.location.reload();
});




