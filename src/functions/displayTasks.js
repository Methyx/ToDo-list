import Task from "./components/Task";

const displayTasks = (tasks, setTasks, textInput) => {
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

export default displayTasks;
