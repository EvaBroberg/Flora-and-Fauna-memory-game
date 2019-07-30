const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    // console.log('clicked');
    this.classList.add('flip');
    
    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;
        // console.log(flippedCard);
        // console.log(firstCard);
    } else {
        flippedCard = false;
        secondCard = this;
        // console.log(flippedCard, secondCard);
        // console.log(firstCard.dataset.picture);
        // console.log(secondCard.dataset.picture);
        
        if (firstCard.dataset.picture === secondCard.dataset.picture){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 800);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

