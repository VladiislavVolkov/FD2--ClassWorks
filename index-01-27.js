// const user = {};
// user.name = "Jonh";
// console.log(user);
// user.surname = "Smith";
// user.name = "pete";
// console.log(user);
// delete user.name;






// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

// const obj = {
//   name: 10,
//   age:20,
// };

// console.log(isEmpty(obj))





// const data ={};

// data["new propety"] = "inNewPropety";
// console.log(data)

// let newPropety2 = confirm("This apple?") ? (newPropety2 = "apple") : (newPropety2 = "banana");
// console.log(newPropety2);

// data[newPropety2] = 4;
// console.log(data)




// const data2 = {
//   qwerty: 50,
//   asdfg: "qwertyyyyy",
// }

// for (let keyInData2 in data2) {
//   console.log(keyInData2);
// }

// const data3 = data2;

// data3.qwerty = 51;
// console.log(data2);
// console.log(data3);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      } else if (typeof obj[key] !== 'number'){
        obj[key] += "newproperty"
      }
    }
    console.log(menu)
  }
  
  multiplyNumeric(menu);