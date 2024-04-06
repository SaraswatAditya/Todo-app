import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const allTodos = useSelector((state) => {
    return state.todos; // Return all todos
  });

  // console.log("Filtered Todos:", allTodos);
  return (
    <ul>
      {allTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
