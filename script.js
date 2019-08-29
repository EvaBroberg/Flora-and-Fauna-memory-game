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
let losingSound = new Audio('sounds/lost.wav');
let winningSound = new Audio('sounds/win.wav');
let nextLevel = document.getElementById('newLevel');
let playBtn = document.getElementById('play');
let display = document.getElementById("time-remaining").textContent;
let timeLimit = 60;
let interval;

bgMusic.volume = 0.05;
soundForCardsMatch.volume = 0.3;
soundForNoMatchingCard.volume = 0.3;
soundForCardFlip.volume = 0.3;
bgMusic.loop = true;

    document.getElementById("info").addEventListener("click", function(){
        document.getElementById("rules").style.display = "block";
    })

    document.getElementById("gotIt").addEventListener("click", function(){
        document.getElementById("rules").style.display = "none";
    })


    document.getElementById("iconYes").addEventListener("click", function off(){
        document.getElementById("iconYes").style.display = "none";
        document.getElementById("iconNo").style.display = "inline";
        bgMusic.volume = 0;
      });

      document.getElementById("iconNo").addEventListener("click", function on(){
        document.getElementById("iconNo").style.display = "none";
        document.getElementById("iconYes").style.display = "inline";
        bgMusic.volume = 0.1;
      });

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
        clearInterval(timer);
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
    levels();
}


function levels(){
    if(score === 10 || score === 28) {
        document.getElementById("nextLevel").style.display = "block";
        clearInterval(timer);
        playBtn.addEventListener('click', () => {
            document.getElementById("nextLevel").style.display = "none";    
        });
    } 
    if (score === 10){
        turns = 0;
        document.getElementById("game").style.display = "none";
        document.getElementById("game2").style.display = "flex";
        document.getElementById('turns').innerText = 'Turns: ' + 0;
    }
    if (score === 28){
        turns = 0;
        document.getElementById("game2").style.display = "none";
        document.getElementById("game3").style.display = "flex";
        document.getElementById('turns').innerText = 'Turns: ' + 0;
    }
    if (score === 52) {
        turns = 0;
        document.getElementById("game3").style.display = "none";
        document.getElementById("youWon").style.display = "block";
        bgMusic.volume = 0;
        winningSound.play();
    }
}


function turning() {
    if(turns < 30){
        turns ++;
    }
    
    else{
        document.getElementById("gameover").style.display = "block";
        bgMusic.volume = 0;
        losingSound.play();
    }

    document.getElementById('turns').innerText = 'Turns: ' + turns;
    lockBoard = true;
}


function unflipCards() {
    
    var unflipping = setTimeout(() => {
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


//TIMER

let timer;

function countDown(i, callback) {
    timer = setInterval(function() {
        document.getElementById("time-remaining").innerHTML = "Time: " + i;
        i-- || (clearInterval(timer), callback());
    }, 1000);
}


$("#modalBtn").on("click", function(){
    countDown(60, function(){
        document.getElementById("gameover").style.display = "block";
        bgMusic.volume = 0;
        losingSound.play();
    });
});


$("#play").click(function(){
    // clearInterval(timer);
    document.getElementById("time-remaining").innerHTML = "Time: " + 100;
    countDown(99, function(){
        document.getElementById("gameover").style.display = "block";
    });
});


//losing
document.getElementById("tryAgain").addEventListener("click", function(){
    document.location.reload();
});

//winning
document.getElementById("playAgain").addEventListener("click", function(){
    document.location.reload();
});




