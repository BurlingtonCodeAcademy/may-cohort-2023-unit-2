//! Conditionals
/* 
    Falsy
        - false
        - 0
        - empty strings ( "", '' )
        - null
        - undefined
        - NaN (not a number)

    Conditionals evaluates an expression and responds if it is true.
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

/* Structure
    if(expression condition evaluated) {
        code that runs if expression is true
    }
*/

if(isOn) {
    console.log("There is light!");
}

isOn = false;
if(isOn == false) {
    console.log('The light is off...')
}

//! Else - If Else Statement
let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket.');
} else {
    console.log("No jacket needed!");
}

let rain = true;
if(rain && weather < 70) {
    console.log('Wear a jacket and boots.');
} else {
    console.log('No boots needed.');
}

rain = false;
if (weather < 70 || rain) {
    console.log('Get your rain jacket');
} else {
    console.log('Going to be nice.');
}

/*
Use this string: let name = 'sAmwISe';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// let grade = 88; // test 1
// let grade = 73; // test 2
let grade = 0; // test 2

if(grade >= 75) {
    console.log("passing");
} else if(grade >= 69) {
    console.log("please see teacher");
} else {
    console.log("failing");
}

// Once a condition is met - it runs the code block.

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'  - DONE
    If the age is at least 18, console.log 'You can vote!' - DONE
    If the age is at least 21, console.log 'You can drink!' - DONE
    If the age is at least 25, console.log 'You can rent a car!' - DONE
*/

let age = 19;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 25) {
    console.log('You can rent a car AND drink AND vote!!');
} else if (age >= 21) {
    console.log("You can drink!");
// } else if (age >= 18) {
//     console.log('You can vote');
// } 
} else {
    console.log('You can vote');
} 


//! SWITCH
/* 
    Keywords:
    - switch
    - case
    - break
    - default

    frame -

    switch(expression) {
        case :
            break;
        default
    }
*/

let officeCharacter = "Kevin";

switch (officeCharacter) {
    case "Michael" :
        console.log("My mind is going a mile an hour.");
        break;
    case "Dwight" :
        console.log("Perfectenschlag");
        break;
    case "Jim" :
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default :
        // console.log("I'm sorry but do I know you?");
        // console.log("I'm sorry, Pam, but do I know you?");
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // String Interpolation - template literal
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let num = -5;

switch (true) {
    case (num < 0 && num > -10):
        console.log("case 1 ran");
        break;
    case (num < 0):
        console.log("case 2 ran");
        break;
    default:
        console.log('did not work')
        break;
}

//! Ternary
let number = 6;

//* If/Else
if(number > 0) {
    console.log("Yes");
} else {
    console.log("No");
}

number > 0 ? console.log("Yes") : console.log("No");
(number > 0) ? console.log("Yes") : console.log("No");

// Ternaries require an "else" to the "if" statement

//* Else/IF
number = 8;

if(number === 0) {
    console.log("Hello");
} else if(number < 0) {
    console.log("Hi");
} else {
    console.log("goodbye");
}

number === 0 ? 
    console.log("hello") : 
    number < 0 ? 
    console.log("Hi") : 
    console.log("goodbye");

