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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; // Destructured (shortened) version of commented out code above.
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `; // This is called "Generating the HTML"
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

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
