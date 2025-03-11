const randomNumber = Math.floor(Math.random() * (1943 - 633 + 1)) + 633;

const number = document.querySelector('#number');

number.innerHTML = randomNumber;