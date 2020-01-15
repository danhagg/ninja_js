// object literals
// key value pairs

let user = {
    name: 'Daniel Haggerty',
    email: 'dhaggerty@pronetgroup.com',
    times: [
        {job: 40591, description: 'site visit'},
        {job: 40592, description: 'phonecall'},
    ],
    // note that we can remove the function key word
    login() {
        console.log(`${this.name} logged in`)
    },
    // when we put function here js sets this to the object (ie user)
    // Therefore we can use 'this' in code
    // If we change to arrow function... arrow functions use the current this at time of invokation.
    // ie the Global Window Object (see below)
    showTimes() {
        this.times.forEach((time) => console.log(time.job, time.description));
    },
    arrowThis: () => console.log(this),
};

console.log(user);
user.login();
user.showTimes();

// Both following instances of this refer to Global Window Object
console.log(this);
user.arrowThis();

// show all constants and functions in Math object
console.log(Math);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.ceil(area));
console.log(Math.floor(area));
const randy = Math.random();
console.log(Math.round(randy * 100));

let a = 50;
let b = a;
console.log(a, b);

a = 51;
console.log(a, b);

let c = ['dan', 'bert'];
let d = c;
console.log(c, d);
c[0] = 'frank'
console.log(c, d);