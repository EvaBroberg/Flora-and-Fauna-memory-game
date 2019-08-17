const startGame = document.querySelector('.start');
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
let mySound;

//sounds

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

if(hasFlippedCard === true){
  mySound = new sound("card-flip.wav");
}




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
  e.preventDefault();
  hide();
});

function hide(){
    // document.getElementById("login").className = "hide";
    if(form.userid.value.length !== 0){
      document.getElementById("login").className = "hide";
      username = document.getElementById('username').value;
      document.getElementById('player').innerHTML = 'Name: ' + username;
    }else{
      openModal();
    };
  }
  
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
    //
    if(turns < 10){
      turns += 1;
    }else{
      document.getElementById("gameover").style.display = "block";
      // console.log('game over');
    }
    //
    // turns += 1;
    document.getElementById('turns').innerText = 'Total: ' + turns;
    lockBoard = true;
    
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      
      resetBoard();
    }, 1500);
  }
  
  //??
  function gameover(){
    if(turns === 3){
      console.log('you lost');
    };
  } 
  
  //??
  
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
      //document.getElementById("count").innerHTML = time;
    }
  }, 600);
  
