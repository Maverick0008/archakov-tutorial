//Adds text to todo list - if not empty
document.getElementById("buttonAddTask").addEventListener("click", function () { //  берем кнопку и вешаем обработчик событий
  let task = document.querySelector("input").value; // в переменную кладем то, что написали в инпуте
  if (task) { // если что-то есть то ...
    addNewTask(task); // вызываем функцию
    document.querySelector("input").value = ""; // очищаем интуп
  }
});

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;

  parent.removeChild(item);
}

function addNewTask(item) {
  let list = document.querySelector(".ListTodo");

  let newItem = document.createElement("li");
  newItem.innerText = item;
  let button = document.createElement("div");
  button.classList.add("button");
  let remove = document.createElement("button");
  remove.innerText = "X";
  remove.classList.add("remove");
  remove.addEventListener("click", removeItem);

  button.appendChild(remove);
  newItem.appendChild(button);

  list.insertBefore(newItem, list.childNodes[0]);
}
