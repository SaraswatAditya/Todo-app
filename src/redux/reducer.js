import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
} from "./actionTypes";

// load initial state from local storage if available
const initialState = JSON.parse(localStorage.getItem("todos")) || { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.payload.text, completed: false };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify({ todos: updatedTodos }));
      return { todos: updatedTodos };

    case REMOVE_TODO:
      const filteredTodos = state.todos.filter(
        (todo, index) => index !== action.payload.id
      );
      localStorage.setItem("todos", JSON.stringify({ todos: filteredTodos }));
      return { todos: filteredTodos };

    case MARK_COMPLETED:
      const completedTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, completed: true } : todo
      );
      // Save state to local storage
      localStorage.setItem("todos", JSON.stringify({ todos: completedTodos }));
      return { todos: completedTodos };

    case MARK_INCOMPLETE:
      const incompleteTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, completed: false } : todo
      );
      // Save state to local storage
      localStorage.setItem("todos", JSON.stringify({ todos: incompleteTodos }));
      return { todos: incompleteTodos };

    default:
      return state;
  }
};

export default todoReducer;
