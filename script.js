const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    
    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;
        
        return;
    } 
    flippedCard = false;
    secondCard = this;
    
    checkForMatch(); 
}


function checkForMatch() {
    let match = firstCard.dataset.picture === secondCard.dataset.picture;
    
    match ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 800);
}

function resetBoard(){
    flipCard, lockBoard = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

