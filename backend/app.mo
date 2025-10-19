import Text "mo:base/Text";
import Array "mo:base/Array";

persistent actor TodoList {
  
  // Define Todo type
  public type Todo = {
    id: Nat;
  };

  // Store todos in stable variable
  transient var todos: [Todo] = [];

  // Add a new todo
  public func addTodo(text: Text): async () {
  };

  // Get all todos
  public query func getTodos(): async [Todo] {
    return [];
  };

  // Delete a todo by id
  public func deleteTodo(id: Nat): async () {
  };
};
