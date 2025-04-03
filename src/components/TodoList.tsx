
import React, { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const { toast } = useToast();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  
  const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTodo.trim()) {
      toast({
        title: "Error",
        description: "Todo text cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    const todo: Todo = {
      id: generateId(),
      text: newTodo.trim(),
      completed: false,
    };
    
    setTodos([...todos, todo]);
    setNewTodo("");
    
    toast({
      title: "Todo added",
      description: "Your new todo has been added to the list",
    });
  };
  
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    
    toast({
      title: "Todo removed",
      description: "The todo has been removed from your list",
    });
  };
  
  return (
    <div id="todo-list" className="section-container">
      <h2 className="section-title">To-Do List</h2>
      
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-3 py-2 border border-input rounded-md"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-1"
        >
          <Plus size={16} /> Add
        </button>
      </form>
      
      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">
            Your to-do list is empty. Add a new task above.
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 p-3 border border-border rounded-md bg-secondary/50 hover-scale"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-4 w-4 text-primary"
              />
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-500 hover:text-destructive"
                aria-label="Delete todo"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
