import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "feb 5th at 3:40pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Scholl Meeting",
      day: "feb 5th at 3:40pm",
      remainder: true,
    },
    { id: 3, text: "Shopping", day: "feb 5th at 3:40pm", remainder: false },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
// CSS in jsx
// const headeingStyleing = {
//   color:'red',
//   background:'black'
// }

export default App;
