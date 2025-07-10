import { useState } from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) editTask(task.id, editText);
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      )}
      <div className="btn-group">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
