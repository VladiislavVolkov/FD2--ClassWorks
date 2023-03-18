import { taskItem } from "./components.js";
import { Todo } from "./Todo.js";

const todo = new Todo();

const form = document.querySelector(".todo-form");
const listGroup = document.querySelector(".list-group");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  console.log(formData);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  todo.create(data);
  todo.onConsoleLog();
  evt.target.reset();
  const tasks = todo.getTasks();
  listGroup.append(taskItem(tasks[tasks.length - 1]));
});

listGroup.addEventListener("click", (evt) => {
  if (evt.target.closest(".btn-danger")) {
    const task = evt.target.closest(".list-group-item");
    const id = evt.target.closest(".list-group-item").dataset.id;
    todo.deleteTask(id);
    listGroup.removeChild(task);
  }
});
