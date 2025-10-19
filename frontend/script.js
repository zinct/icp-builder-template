let todos = [];

// Add event listener for adding new todo
document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("todoInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Make deleteTodo globally accessible
window.deleteTodo = deleteTodo;

// Get todos
async function getTodos() {
  renderTodos();
}

// Add new
async function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Masukkan teks todo!");
    return;
  }

  input.value = "";

  todos.push({
    id: todos.length + 1,
    text: text,
  });

  await getTodos();
}

// Delete todo
async function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  await getTodos();
}

// Render todos to the UI
function renderTodos() {
  const todoList = document.getElementById("todoList");

  if (todos.length === 0) {
    todoList.innerHTML = '<div class="empty-state">Belum ada todo. Tambahkan todo pertama Anda!</div>';
    return;
  }

  todoList.innerHTML = todos
    .map(
      (todo) => `
    <li class="todo-item">
      <span class="todo-text">${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Hapus</button>
    </li>
  `
    )
    .join("");
}

// Initialize the app
getTodos();
