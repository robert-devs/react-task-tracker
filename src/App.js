import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "feb 5th at 3:40pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Scholl Meeting",
      day: "feb 5th at 3:40pm",
      reminder: true,
    },
    { id: 3, text: "Shopping", day: "feb 5th at 3:40pm", reminder: false },
  ]);
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : Task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no thanks"
      )}
    </div>
  );
}
// CSS in jsx
// const headeingStyleing = {
//   color:'red',
//   background:'black'
// }

export default App;
