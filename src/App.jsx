import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions/actions";

const App = () => {
  const [addTask, setAddTask] = useState("");
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log(tasks);

  function addTasks() {
    if (addTask.length !== 0) {
      dispatch(addTodo(addTask));
      setAddTask("");
    }
  }

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
        />
        <button onClick={addTasks}>Add Task</button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            {task.text}{" "}
            <span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
