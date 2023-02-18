// function sum (a, b) {
//     console.log(a + b)
// }
// sum (2, 5)

// let sum = (a, b) => a + b;

// ////////////////////////////////

// let min = (a, b) => {
//     if (a < b) {
//         return console.log (a)
//     } else {
//        return console.log (b)
//     }
// };
// console.log(min (5,7))


// let min = (a,b) => {
//     if(a>b) return b;
//     return a
// }
// console.log(min(10,20))


// ///////////////////////////

// let range = (start, max, number) => {
//     if (number >= start && number <= max ) {
//         return true
//     } else {
//         return false
//     }
// };
// console.log(range (10,20,30))


// const range = (start, end, number) => {
//     return number >= start && number <= end;
// };
// console.log(range(10,20,30))


// ////////////////

// const getName = (obj, name) => {
//     return obj[name];
// };

// const obj1 = {
//     name: "alex",
//     age: 29
// };

// console.log(getName(obj1, 'name'))



// const breakpoints = {
//     sm: 'sm',
//     lg: 'lg'
// }

// const sizes = {
//     [breakpoints.sm]: {
//         button: 300,
//         container:980,
//     },
//     [breakpoints.lg]: {
//         button: 200,
//         container:780,
//     },
// }



///////////////

// const user = {
//     name: "John",
//     surname: "Smith"
// }

// console.log(getName(name, "Pete"))
// console.log(delete(name))



let salaries = {
    Jonh: 100,
    Ann: 160,
    Pete: 130
};

const sum = (obj) => {
    let result = 0;
    for (let key in obj) {
        result += obj[key]
    }

    return result;
};

sum(salaries)



