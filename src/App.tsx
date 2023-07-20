import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Interface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div>
          <TaskForm
            btnText="CriarTarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
