const cards = document.querySelectorAll('.card');

function flipCard() {
    // console.log('clicked');
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

