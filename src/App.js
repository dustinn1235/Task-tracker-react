import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    setTasks([...tasks, { ...task, id: id }]);
  };

  return (
    <div className="container">
      <Header
        showAdd={() => setShowAddTask(!showAddTask)}
        isShown={showAddTask}
      ></Header>
      {showAddTask && <TaskForm onAdd={addTask}></TaskForm>}
      <Tasks
        tasks={tasks}
        onToggle={toggleReminder}
        onDelete={deleteTask}
      ></Tasks>
      <Footer></Footer>
    </div>
  );
}

export default App;
