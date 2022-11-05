import "./App.css";
import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRectangleList, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { tab } from "@testing-library/user-event/dist/tab";
library.add(faRectangleList, faTrash);

function App() {
  //UseStates
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  // Functions
  const displayTasks = () => {
    const tasksToDisplay = [];
    const tabToDisplay = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name.includes(textInput)) {
        tasksToDisplay.push(tasks[i]);
      }
    }
    // on trie le tableau en fonction de la clé 'done'
    tasksToDisplay.sort((a, b) => {
      if (a.done && b.done) {
        return 0;
      } else if (a.done) {
        return 1;
      } else {
        return -1;
      }
    });
    // on crée un tableau de balises
    for (let i = 0; i < tasksToDisplay.length; i++) {
      tabToDisplay.push(
        <Task
          key={tasksToDisplay[i].id}
          task={tasksToDisplay[i]}
          tasks={tasks}
          setTasks={setTasks}
        />
      );
    }
    return tabToDisplay;
  };

  // Start Here
  const tasksToDisplay = displayTasks();
  return (
    <div className="App">
      <Header />
      <main>
        <div className="tasks-header">
          <div className="left">
            <span className="done">done</span>
            <span>{`TASKS (${tasksToDisplay.length} / ${tasks.length})`}</span>
          </div>
          <div className="right">
            <span>delete</span>
          </div>
        </div>

        <div className="tasks-list">{tasksToDisplay}</div>
        <NewTask
          tasks={tasks}
          setTasks={setTasks}
          textInput={textInput}
          setTextInput={setTextInput}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
