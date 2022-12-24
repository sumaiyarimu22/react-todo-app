import { useRef, useState } from "react";

const AddTAsk = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const inputRef = useRef(null);

  //add task handle event
  const addTaskHandler = (e) => {
    e.preventDefault();
    //post task into server
    taskPosting(task);

    inputRef.current.blur();
    setTask("");
  };

  //task posting
  //use text
  const taskPosting = async (text) => {
    const res = await fetch(
      "https://aluminum-delicate-snowshoe.glitch.me/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="container bg-gray-900 mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="What thing to do?"
        className="bg-transparent outline-none border-b-2 py-2 px-5 focus:border-teal-600"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTAsk;
