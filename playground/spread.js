// function add (a, b){
//     return a+b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['jax', 'yasuo'];
// var groupB = ['garen'];
// var final = [3, ...groupA];

// console.log(final);

var person = ['Injo', 25];
var personTwo = ['Baik', 28];

function greet(name, age){
    console.log('hi ' + name + ' ,you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'ben']
var final = ['Jayce', ...names];

final.forEach(function (name){
    console.log('hi ' + name);
});