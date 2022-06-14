import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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
      day: "feb 10th at 7:40pm",
      reminder: true,
    },
    { id: 3, text: "Shopping", day: "feb 6th at 4:40pm", reminder: false },
  ]);
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask />
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
