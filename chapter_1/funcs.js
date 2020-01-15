
// function declaration
// declarations ARE hoisted
// Thus declarations can be used prior to being written
function employee() {
    console.log('string employee');
}

// function expression (store a function inside a variable)
// expressions get semi colons at end of function
const func_expression = function(){
    console.log('Function expression & semi-colon');
}; // semicolon here


// returning a value stores in memory. Assign it to a variable when calling function
// Passing a function as an argument to another JS function.
// The argument function we pass in is called a callback function

// can define callback function in the parameter
let engineers = ['dhaggerty', 'jwatson', 'jdill'];
engineers.forEach((employee, index) => console.log(`${index}, ${employee}`));

// Or can define function as a variable and pass in as a callback function
const logPerson = (employee, index) => console.log(`${index}, ${employee}`)
engineers.forEach(logPerson);

// get a reference to ul in index.html - get enineers html class .engineers
const ul = document.querySelector('.engineers');

let html = ``;

engineers.forEach((person) => html += `<li style="color: purple">${person}</li>`);

ul.innerHTML = html;