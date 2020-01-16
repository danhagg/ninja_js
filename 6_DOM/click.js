const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New Thing';
    // ul.append(li);
    ul.append(li);
});


// The event in li bubbles up to ul where we have our event listener.
// Allows us to attach only one event listener instead of forEach on the li node list.
// We need to parse where in the ul we have clicked. 
// We need to specify th li as the target for deletion.
// Event bubbling (delegation)

ul.addEventListener('click', e => {
    // console.log('bubbler in ul');
    console.log(e.target);
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
});
