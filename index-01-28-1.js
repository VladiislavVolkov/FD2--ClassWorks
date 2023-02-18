/* 1
Напишите функция сложения двух чисел:*/

// function sum(a, b) {
//   return a + b;
// }
// let result = 0;
// console.log(result);

// let result1 = sum(1, 2);
// console.log(`result = ${result1}` ); 



/* 2
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.*/

// function min(a, b) {
//   if (a < b ) {
//     return a
//   } else {
//     return b
//   }
// }

// function min2(a,b) {
//   return (a < b) ? a : b;
// }

// console.log(min(7,4))
// console.log(`вот такой ответ решения функции ` + min2(7,4))



/* 3
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.*/

function pow(x,n) {
    if (b >= 1) {
      return a**b;
    }
    return "Повторите операцию";
  };  
  
  let a = +prompt('enter your first number', 'x?');
  let b = +prompt(`Enter your second number, please`, `n?`);
  
  console.log(pow(a, b))
  
  
  
  
  /* 4
  Проверка понятия RETURN*/
  
  function isAdult(age) { 
    const control = 18;
    if (age > control) {
      console.log("Вам больше 18. Мы добавили Вам еще +1");
      return age += 1;
    } else if (age === control) {
      console.log("Вам = 18.");
      return age ;
    } else if (age < control) {
      console.log("Вам < 18. Мы добавим вам текст");
      return age += " еще маленький" ;
    };
  }
    
  console.log(isAdult(+prompt('введите свой возраст')))