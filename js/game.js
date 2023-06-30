// seleciona elementos no seletores CSS //

const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


//nomes da cartas //
const characters = [

'Alvo.Dumbledore.4',
'draco.malfloy',
'harry.potter.(1)',
'Castelo.de.Hogwarts',
'Gryffindor',
'Hermione.(2)',
'Hufflepuff',
'minerva mcgonagall',
'Ravenclaw',
'ron.weasley.(3)',
'Rúbeo.Hagrid.(3)',
'severo.snape.(3)',
'Sirius.Black.(1)',
'Slytherin',
'voldmort.(1)',

];

// A função criar um novo elemento HTML //
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 30) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}

//checando as cartas 
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}
//revenando as cartas //
const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

// criação das cars //

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img.harry/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

   return card; 
}

// geração do jogo //

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}
// Selecionando o botão "Iniciar"
const startButton = document.getElementById('startButton');

// Função de reiniciar jogo
const restartGame = () => {
  // Limpar a grade de cartas
  grid.innerHTML = '';

  // Reiniciar as variáveis das cartas
  firstCard = '';
  secondCard = '';

  // Reiniciar o timer
  clearInterval(this.loop);
  timer.innerHTML = '0';

  // Iniciar novamente o jogo
  startTimer();
  loadGame();
};

// Adicionando o ouvinte de evento para o botão "Iniciar"
startButton.addEventListener('click', restartGame);
