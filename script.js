const imagePaths = [
  "Sayantika01.jpg",
  "Sayantika2.jpg",
  "Sayantika03.jpg",
  "Sayantika04.jpg",
  "Sayantika05.jpg",
  "Sayantika06.jpg",
  "Sayantika07.jpg",
  "Sayantika08.jpg"
];

const cards = [...imagePaths, ...imagePaths]; // duplicate for pairs
cards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('gameBoard');
let flippedCards = [];
let matched = 0;

cards.forEach((src, i) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = i;
  
  const img = document.createElement('img');
  img.src = src;
  
  card.appendChild(img);
  card.addEventListener('click', () => flipCard(card));
  gameBoard.appendChild(card);
});

function flipCard(card) {
  if (flippedCards.length === 2 || card.classList.contains('flipped')) return;
  
  card.classList.add('flipped');
  flippedCards.push(card);
  
  if (flippedCards.length === 2) {
    setTimeout(() => checkMatch(), 700);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector('img').src;
  const img2 = card2.querySelector('img').src;
  
  if (img1 === img2) {
    matched += 1;
    if (matched === 8) {
      document.getElementById('nextBtn').style.display = 'block';
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  
  flippedCards = [];
}

// 👇 Redirect to page2.html on click
document.getElementById('nextBtn').addEventListener('click', () => {
  window.location.href = "text.html"; // Apne actual page2 ka naam yahaan likhna
});
