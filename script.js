const $gameArea = document.getElementById('game-area');

for(let i = 0; i < 200; i++) {
  const $square = document.createElement('DIV');
  $square.classList.add('square');
  $square.setAttribute('id', `${i + 1}`);
  // $square.innerText = `${i + 1}`;
  $gameArea.appendChild($square);
};

const tetramino = (x, y, z, k) => {

  const first = document.getElementById(`${x}`);
  const second = document.getElementById(`${y}`);
  const third = document.getElementById(`${z}`);
  const fourth = document.getElementById(`${k}`);

  if (first && second && third && fourth) {
    first.removeAttribute('class', 'green');
    second.removeAttribute('class', 'green');
    third.removeAttribute('class', 'green');
    fourth.removeAttribute('class', 'green');
  }
  first.setAttribute('class', 'green');
  second.setAttribute('class', 'green');
  third.setAttribute('class', 'green');
  fourth.setAttribute('class', 'green');
}

let x = 94;
let y = 95;
let z = 96;
let k = 85;

const add = () => {
  x += 10;
  y += 10;
  z += 10;
  k += 10;
  console.log(x);
}

const test = () => {
  console.log(x, y, z, k);
}
// let time = setInterval(add, 2000);

// let int = setInterval(tetramino, 2000, x, y, z, k);

// let ttt = setInterval(test, 2000);
