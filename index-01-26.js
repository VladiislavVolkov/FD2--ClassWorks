// let userName = 'Вася';

// function showMessage() {
//   let userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции
// showMessage();
// alert( userName );  // Петя, значение внешней переменной было изменено функцией




///////////////////////////////////////

// let showMessage = (a, b) => {
//   let from;
//   from = '*' + a + '*'; // немного украсим "from"
//   alert( from + ': ' + b );
// }

// let welcome = (age, callback) => {
//   if (age < 18) {
//     welcome = "anna"; 
//   } else {
//     welcome = "ritta"; 
//   };
//   callback(welcome, "привет")
// }

// welcome(prompt("Enter your age, please"), showMessage)




/////////////////////////////////

// let q = prompt("enter your number#1");
// let w = prompt("enter your number#2");
// let name = (q > w) ?
//             function() { name = "Anna";} :
//             function() { name = "rita";};
//             alert( name ); 
// alert( name ); // Аня




//////////////////////////////////

let welcomeName = (name, callback1) => {
    if (name === "Владислав") {
      welcomeName = "Уважаемый Владислав";
    } else if (name === "Ирина") {
      welcomeName = "Это не Владислав, а его жена - Ирина!";
    } else {
      welcomeName = "Неизвестный человек..."
    };
    alert("Прооооверка " + welcomeName);
    callback1(welcomeName, "Привет / Hello!");
  }
  
  let yourCity = (a, b) => {
    let city = prompt("Введите из какого Вы города!");
    if (city === "Гомель") {
      alert(yourCity = b +' ' + a + ' ' + "ты явно не из Минска");
    } else {
      alert(yourCity = b +' ' + a + ' ' + "ммм ты из столицы!!!");
    };
    alert("Всеё");
  }
  
  let yourText = (y,x) => {
    let t = promt("Введите число 1 или 0");
    if (true) {
      alert("Your enter number 1 " + t + y + x);
    } else {
      alert("Your enter number 0 " + t + y + x);
    }
  }
  
  welcomeName(prompt("Будте добры введите своё имя!", "Пример: Владислав."), yourCity)