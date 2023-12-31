// Steps: 1. Loop through array. 2. Create some HTML code for each todo. 3. Put the HTML on web page.

const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  { name: "wash dishes", dueDate: "2022-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  addDeleteListeners();
}

function addDeleteListeners() {
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

// We use ".querySelectorAll()" to target ALL delete buttons generated by our code. The elements are listed like an array with index numbers, so we can loop through the list of delete buttons with a .forEach loop method.

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  // todoList.push({ name: name, dueDate: dueDate });
  todoList.push({ name, dueDate }); // When the "property name" and "variable name" are the same, Objects have a "shorthand property syntax" which does the same thing as commented out code above.

  inputElement.value = ""; // clears input textbox.

  renderTodoList();
}
