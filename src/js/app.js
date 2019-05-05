const field = document.getElementById('someField');
const img = document.createElement('img');
img.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png');
img.setAttribute('alt', 'face');
img.classList.add('element');

function getMove() {
  const random = Math.floor(Math.random() * 15);
  const randomIndex = field.children[random];
  randomIndex.appendChild(img);
}

setInterval(() => {
  getMove();
}, 1000);
