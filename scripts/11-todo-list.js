// Steps: 1. Loop through array. 2. Create some HTML code for each todo. 3. Put the HTML on web page.

const todoList = ["make dinner", "wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; // This is called "Generating the HTML"
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = ""; // clears input textbox.

  renderTodoList();
}
