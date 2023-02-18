// const link = document.querySelectorAll('.link');
// console.log(link);

// const link1 = document.querySelector('.link');
// console.log(link1);

// console.log(link1.dataset, link1.dataset.secretLink);

// console.log(link1.hasAttribute('href'))
// console.log(link1.hasAttribute('id'))
// console.log(link1.hasAttribute('title'))

// console.log(link1.getAttribute('href'))
// console.log(link1.getAttribute('title'))

// console.log(link1.classList.add('active'));

// console.log(link1.classList.remove('link'));

// link1.classList.toggle('newClass')
// link1.classList.toggle('newClass')

// link1.setAttribute('id', 'newId')
// link1.setAttribute('ghjsdj', 'newId')

const root = document.getElementById("root");

// console.log(root.firstChild);
// console.log(root.firstElementChild);
// console.log(root.lastChild);
// console.log(root.children);

const button = document.createElement("button");
const button1 = document.createElement("button");

button.style.background = "red";
button.style.border = "5px solid blue";
button.textContent = "BUTTON 1";

button1.style.background = "blue";
button1.style.border = "5px solid red";
button1.textContent = "BUTTON 2";
button1.style.color = "white";

root.append(button);
root.replaceChild(button1, button);

const Button = (etv) => {
  return `<button class='btn'>${etv}</button>`;
};

root.insertAdjacentHTML("afterbegin", Button("button1"));
root.insertAdjacentHTML("beforeend", Button("button2"));

const root2 = document.getElementById("root2");
root2.style.marginTop = "50px";

const buttonNew = root2.querySelector("button");

// root2.insertAdjacentElement("beforeend", buttonNew);

buttonNew.addEventListener("click", (evt) => {
  console.log("CLICK!");
  console.log(evt);
});
