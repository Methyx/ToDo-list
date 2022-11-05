import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, tasks, setTasks }) => {
  // functions
  const handleDelete = (id) => {
    const tab = [...tasks];
    let indexToModifiy = -1;
    for (let i = 0; i < tab.length; i++) {
      if (id === tab[i].id) {
        indexToModifiy = i;
        break;
      }
    }
    if (indexToModifiy >= 0) {
      tab.splice(indexToModifiy, 1);
      setTasks(tab);
    }
  };

  const handleDone = (id) => {
    const tab = [...tasks];
    let indexToModifiy = -1;
    for (let i = 0; i < tab.length; i++) {
      if (id === tab[i].id) {
        indexToModifiy = i;
        break;
      }
    }
    if (indexToModifiy >= 0) {
      tab[indexToModifiy].done = !tasks[indexToModifiy].done;
      setTasks(tab);
    }
  };

  // icons
  const unChecked = "🔲";
  const checked = "🔳";

  // return
  return (
    <div className="task">
      <span
        onClick={() => {
          handleDone(task.id);
        }}
        className="coche"
      >
        {task.done ? checked : unChecked}
      </span>
      <span
        style={
          task.done
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task.name}
      </span>
      <span
        onClick={() => {
          handleDelete(task.id);
        }}
        className="trash"
      >
        <FontAwesomeIcon icon="trash" />
      </span>
    </div>
  );
};

export default Task;
