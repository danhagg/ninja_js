const paras = document.querySelectorAll('p');
paras.forEach((para) => para.innerText += ' extra');

const content = document.querySelector('.content');
const engineers = ['dan', 'paul', 'derek'];
engineers.forEach((person) => content.innerHTML += `<p>${person}</p>`);



const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.bbc.co.uk');
link.innerText = 'The Beeb';

const msg = document.querySelector('p');
console.log(msg);
// console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
// set attribute that doesnt exist
msg.setAttribute('style', 'color: green');

const subtitle = document.querySelector('h2');
console.log(subtitle.style);
subtitle.style.color = 'pink'
subtitle.style.margin = 50;;
subtitle.style.margin = '';
//font-size
subtitle.style.fontSize = 30;
