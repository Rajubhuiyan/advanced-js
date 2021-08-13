const numbers = [2, 3, 4, 5, 6, 1, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// ...
// element, index, Array
// ...


// function square(element) {
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;


// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x)

// console.log(result);

//for each
// redios

const bigger = numbers.filter( x => x > 5);

const isShare = numbers.find( x => x > 5);

console.log(bigger);









//practice

const newNum = [10, 9, 3, 4, 6, 2];

const square = newNum.map(function(x){
    return x * x;
});
console.log(square);
const cond = newNum.filter(function(x){
    return x > 3;
})
console.log(cond);

const find = newNum.find(x => x> 3);
console.log(find);