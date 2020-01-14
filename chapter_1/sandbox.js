// for loops
// initialization variable, condition, increment at end of code block
const names = ['dan', 'phil', 'dave'];

for (let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// while loop
let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}


// do while: runs once then a while loop
let j = 3;

do{
    console.log('val of j is: ', j);
    j++;
} while (j < 5);

const ninjas = ['dan', 'paul', 'dave', 'ben'];

if (ninjas.length >= 5) {
    console.log("That's a lot of ninjas");
} else if ((ninjas.length >= 3 && ninjas[0] === 'dave') || ninjas[0].includes('l')) {
    console.log('You have a few ninjas');
} else {
    console.log('You don not have many ninjas')
}


// logical not
let user = false;

if (!user){
    console.log('You must be logged in');
}

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){
    
    if (scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if (scores[i] === 100){
        console.log('top score achieved');
        break;
    }

}


const grade = 'A';

switch(grade){
    case 'A':
        console.log('Yo got an A');
        break;
    case 'B':
        console.log('Yo got an B');
        break;
    case 'C':
        console.log('Yo got an C');
        break;
    default:
        console.log('not a valid grade')
}