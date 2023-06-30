# Jogo da Memoria Harry Potter

Este código implementa um jogo de memória baseado em Harry Potter usando HTML, CSS e JavaScript. O jogo consiste em encontrar pares de cartas correspondentes virando-as uma de cada vez. As cartas são exibidas em uma grade, e o objetivo é encontrar todos os pares corretos.

O jogo possui um temporizador que registra o tempo decorrido desde o início do jogo. Quando todos os pares são encontrados, uma mensagem de parabéns é exibida, mostrando o tempo total.

O código utiliza seletores CSS para interagir com os elementos HTML, como a grade, cartas e botões. As cartas são geradas dinamicamente com base em um array de nomes de personagens do universo de Harry Potter. O efeito de virar as cartas é implementado usando classes CSS.

O código também inclui uma função para verificar se o jogo foi concluído, desabilitando as cartas encontradas. Além disso, o botão de início permite iniciar o jogo e o temporizador registra o tempo.

Este código pode ser utilizado como base para criar um jogo de memória personalizado com diferentes temas e funcionalidades.

# Demo do projeto

URL: (https://marcosaureliosl.github.io/jogo-da-memoria-harrypotter/)

## Construido com 

* HTML 
* CSS
* JavaScript

## O que Aprendi:

Ao trabalhar com este código, desenvolvi os seguintes aprendizados:

1. Manipulação do DOM: O código demonstra como selecionar elementos HTML usando seletores CSS e manipular seus atributos, classes e conteúdo usando JavaScript.

2. Criação dinâmica de elementos HTML: A função `createElement` mostra como criar elementos HTML dinamicamente e definir suas classes e atributos.

3. Implementação de um jogo de memória: O código oferece uma base para criar um jogo de memória, onde os jogadores precisam encontrar pares de cartas correspondentes.

4. Uso de eventos e interatividade: O código utiliza eventos, como o clique do mouse, para virar as cartas e interagir com o jogo. Isso ajuda a entender como lidar com eventos e criar interatividade em um aplicativo web.

5. Controle do tempo: A implementação do temporizador mostra como controlar o tempo decorrido em um jogo ou aplicativo, usando o objeto `setInterval` do JavaScript.

6. Estilização e design responsivo: O código contém estilos CSS para definir a aparência do jogo e demonstra como tornar o jogo responsivo, ajustando o layout e os estilos para diferentes tamanhos de tela.

7. Trabalho com arrays e lógica de jogo: O código utiliza arrays para armazenar os nomes dos personagens e implementa lógica para verificar se os pares de cartas correspondem.

Esses são alguns dos aprendizados extraído com este código. 

## Arrays

```
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

```

# Parte Bonus do projeto

Além disso, uma parte interessante deste projeto é a implementação de uma tela de login separada. Isso envolveu a criação de um segundo arquivo HTML e um arquivo CSS correspondente para estilizar a página de login. O JavaScript também foi utilizado para realizar a validação dos dados de login.

Essa abordagem de ter uma tela de login separada demonstra a capacidade de criar múltiplas páginas e conectar diferentes arquivos HTML, CSS e JavaScript. Isso permite uma organização mais clara do código e uma melhor separação de responsabilidades entre as diferentes partes do aplicativo.

Trabalhar com múltiplos arquivos HTML, CSS e JavaScript também ajuda a modularizar o projeto, facilitando a manutenção e o desenvolvimento de novos recursos no futuro. Essa prática é comum em projetos maiores e mais complexos, onde é importante dividir o código em componentes e arquivos separados para facilitar a colaboração e o gerenciamento do projeto.

No geral, a inclusão da tela de login como parte do projeto demonstra habilidades em trabalhar com vários arquivos e integrar diferentes componentes em um aplicativo web.

## login Js

```
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

```

# Agradecimento 

Gostaria de expressar meu sincero agradecimento a todos que têm acompanhado de perto minha jornada nessa nova etapa da minha carreira. Seu apoio e encorajamento significam muito para mim. Cada palavra de incentivo e suporte tem sido um combustível essencial para minha motivação e crescimento. Agradeço por estar ao meu lado, compartilhando esse caminho desafiador e cheio de aprendizados. Sua presença e apoio constante são verdadeiramente apreciados. Vamos continuar avançando juntos!
