import Text "mo:base/Text";
import Array "mo:base/Array";

persistent actor TodoList {
  
  // Define Todo type
  public type Todo = {
    id: Nat;
    text: Text;
  };

  // Store todos in stable variable
  transient var todos: [Todo] = [];

  // Add a new todo
  public func addTodo(text: Text): async Nat {
    let newId = todos.size();
    let newTodo: Todo = {
      id = newId;
      text = text;
    };
    todos := Array.append(todos, [newTodo]);
    return newId;
  };

  // Get all todos
  public query func getTodos(): async [Todo] {
    return todos;
  };

  // Delete a todo by id
  public func deleteTodo(id: Nat): async Bool {
    let filteredTodos = Array.filter<Todo>(todos, func(todo) = todo.id != id);
    if (filteredTodos.size() < todos.size()) {
      todos := filteredTodos;
      return true;
    };
    return false;
  };
};
