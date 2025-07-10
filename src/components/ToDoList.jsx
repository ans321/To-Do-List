import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
