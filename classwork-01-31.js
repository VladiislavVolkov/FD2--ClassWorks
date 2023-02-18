const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];

const uniq = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if(!result.includes(arr[i])) {
     result.push(arr[i])
    }
  }
  return result;
};

console.log(uniq(arr))



///////////////////////////////




const arr = [
  { id: 1, 
    title: "john",
    rating: 4,
    categories: ['clothes'],
    price: 500,
  },
  { id: 2, 
    title: "john2",
    rating: 3,
    categories: ['clothes2'],
    price: 400,
  },
  { id: 3, 
    title: "bag3",
    rating: 4,
    categories: ['clothes3'],
    price: 300, 
  },
  { id: 4, 
    title: "john4",
    rating: 5,
    categories: ['clothes4'],
    price: 700, 
  },
];

// const result = arr.find((item) => {
//   return item.title === 'bag3';
// });

// console.log(result);



// const result1 = arr.filter((item) => {
//   return item.rating < 4;
// });

// console.log(result1);



// const result3 = arr.map((item) => {
//   return item.title 
// });

// console.log(result3)



// const result4 = arr.map((item) => {
//   return {
//     ...item,
//     price: item.price / 2
//   }
// });

// console.log(result4)



const result5 = arr.reduce((acc, item) => {
    return acc += item.price
}, 0);

console.log(result5)


//////////////////////////////


const inventory = [
  { name: "apples", quantity: 2 },
  { name: "Bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find((name) => {
  return name.name === "cherries"
});

console.log(result);


////////


const array = [7, 2, 6, 5, 0, 20];

console.log(array.sort())