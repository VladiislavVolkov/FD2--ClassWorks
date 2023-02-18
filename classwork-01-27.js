// const sum = (a, b) => a + b;

// module.exports = {
//     sum,
// };


/////////////// LESSON #4 - 27-01-2023


// const arr = [
//     'minsk',
//     'moscow',
//     'brest'
// ];

// const result = [];

// for (let i = 0; i < arr.length; i++) {
//        result.push(arr[i] + ' smt');
// }

// console.log(result)



// const data = [0, 1, false, 2, '', 3];
// const compact = (arr) => {
//     cosnt result = [];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]) {
//             result.push(arr[index])
//         }
//     }
//     result
// };



// const concat = (arr, ...rest) => {
//     return [...arr, ...rest];
// };



// const concat = (arr, ...rest) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     for (let i = 0; i < rest.length; i++) {
//         result.push(rest[i])
//     }
//     return result
// };



// const join = (arr, separator) => {
//     let result = "";
//     for ( let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result += element + separator;
//     }
//     return result;
// };

// console.log([1,2,3], "~");



// const reverse = (arr) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const lastElement = arr.length - 1 - i;
//         result.push(arr[lastElement] );
//     }
//     return result;
// }

// console.log(reverse([1,2,3]))



const truncate = (text, length, separator) => {
    const lengthText = text.length;
    if (lengthText > length) {
        text = text.substr(0, length);
        text += separator;
    } 
    return text;
}

console.log(truncate("Добро пожаловать на новостной сайт", prompt("Введите номер символа c которого будет обрезка"), "..."))



// const truncate = (str, options) => {
//     const separator = options.separator ?? "---";
//     return str.slice(0, options.length) + options.separator;
// };

// let str = "Lorem lorem lorem dsfsdf"
// console.log(
//     truncate(str, {
//     length: 10;
//     separator: "...",
// })
// );



///////

const data = [1, 2, 3];

data.push(100)
data.pop();
data.unshift(50);
data.shift();  
console.log(data.indexOf(1));
console.log(data.includes(5));

///////////////////

const users = [
    {id: "1", name: "jons 1", age: 18},
    {id: "2", name: "jons 2", age: 28},
    {id: "3", name: "jons 3", age: 38},
    {id: "4", name: "jons 4", age: 48}, 
  ]
  
  const number = prompt('Enter number')  
  
  const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        };
    }
  };
  
  const a = find(users, (b) => {
    return b.id === number;
  });
  
  console.log(a);