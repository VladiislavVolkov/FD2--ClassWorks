let login = prompt("Enter your login, please!");
let trueLogin = "Админ";

if (login === trueLogin) {

  let password = prompt("Enter your password, please!"); 

  if (password === "Я тут главный") {
    alert("Здравствуйтe, ${.login}");
  } else if (password === '' || password === null) {
    alert("Нажата отмена!")
  } else {
    alert("Неверный пароль!")
  }

} else if (login === '' || login === null) {
  alert("Нажата отмена!");
} else {
  alert("Sorry! I don't know you!");
}; 


//////////////////////////////////////////////


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// const value = prompt("Enter your value, please", "your value");

// const browser = (value == 'Edge') ? alert("You've got the Edge!") :
//   (value == "Chrome" || value == "Firefox" || value == "Safari" || value == "Opera") ? alert( 'Okay we support these browsers too' ) :
//   alert( 'We hope that this page looks ok!' );


////////////////////////////////////



// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
      alert('Вы ввели число 0');
      break;
  case 1:
      alert('Вы ввели число 1');
      break;
  case 2:
  case 3:
      alert('Вы ввели число 2, а может и 3');
      break;
}




let userName = 'Vladislav';

function showMessage() {
  userName = "Irina"; 
  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); 
showMessage();

alert( userName ); 