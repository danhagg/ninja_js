// const content = document.querySelector('p');
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach((para) => {
    if (para.textContent.includes('error')){
        para.classList.add('error');
    } 
    if (para.innerText.includes('success')){
        para.classList.add('success');
    }
});


const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');