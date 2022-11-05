// import { useState } from "react";

const NewTask = ({ tasks, setTasks, textInput, setTextInput }) => {
  // functions
  const handleSubmit = (event) => {
    event.preventDefault();
    const tab = [...tasks];
    tab.push({
      id: Date.now(),
      name: textInput,
      done: false,
    });
    setTasks(tab);
    setTextInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task">
      <input
        type="text"
        placeholder="search task / create new task"
        name="task"
        value={textInput}
        onChange={(event) => {
          setTextInput(event.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTask;
