// function showMessage (a, b){
//   console.log('result:'  + (a + b  + 2 * a) )
// }
// showMessage(50,10,50)


// function go (a, b) {
//   console.log('a='+a+', b='+b)
// }
// go(1)
// go(1,2)
// go(1,2,3)


// function vinni () {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log('Hello,' + arguments[i]);
//   }
// }
// vinni('Puh', 'Leo+', '')


// function vinni () {
//       console.log(arguments);
// }
// vinni('Puh', 'Leo+', '')


// function vinni (...test) {
//   console.log(test);
// }
// vinni('Puh', 'Leo+', '')


// function vinni (a,b, ...rest) {
//   console.log(a, b, rest);
// }
// vinni('Puh', 'Leo+', 't', 2, 50, "tut")


// function test (...theArg) {
//   let total = 0;
//   for (const argument of theArg) {
//     total += argument;
//   }
//   return total;
// }
// console.log(test(5,10,15,20,25))


// function test (a, b = 500) {
//   console.log (a, b)
// }
// test(50,0)


// const i = function (a, b = 500) {
//   console.log (a, b)
// }
// i(50, "test")



const processUserInput = function (test) {
    const name = prompt ('Say your name')
    console.log(name)
    test(name)
  }
  
  const sayHello = function (name) {
    console.log('Hello ' + name)
  }
  
  processUserInput(sayHello) 
  
  
  
  // let userName = 'Вася';
  // function showMessage() {
  //   let userName = "Петя"; // (1) изменяем значение внешней переменной
  //   let message = 'Привет, ' + userName;
  //   alert(message);
  // }
  // showMessage()
  // alert(userName)
