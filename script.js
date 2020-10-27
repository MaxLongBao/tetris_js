const $gameArea = document.getElementById('game-area');

for(let i = 0; i < 200; i++) {
  const $square = document.createElement('DIV');
  $square.classList.add('square');
  $gameArea.appendChild($square);
};