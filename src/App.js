import { createContext, useEffect, useState } from "react";
import AddTAsk from "./Components/AddTAsk";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

export const deleteHandlerContext = createContext();
export const editHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editedText, setEditedText] = useState("");
  const [toggleEditMood, setToggleEditMood] = useState(true);

  useEffect(() => {
    //getting data
    fetchingData();
  }, []);

  //fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://aluminum-delicate-snowshoe.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("something went wrong!");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //delete event
  const handleDelete = (id) => {
    //delete data
    deleteData(id);
    //set updated tasks
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const deleteData = async (id) => {
    await fetch(`https://aluminum-delicate-snowshoe.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json()",
      },
    });
  };

  //editing event
  const handleEdit = (id) => {
    const [editableTarget] = tasks.filter((task) => task.id === id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);

    setTasks([...tasks]);
    setToggleEditMood(false);
    //re-arrange
    tasks
      .filter((task) => task.id !== id)
      .map((targetEl) => (targetEl.isEditable = false));
  };

  //editing task form handler
  const handleEditSubmitter = (e, id) => {
    e.preventDefault();
    setToggleEditMood(!toggleEditMood);

    //parsis data
    const editPersistance = {
      text: editedText,
      id: id,
    };

    //put request
    puttingRequest(id, editPersistance);

    //realTime update
    const [editableTarget] = tasks.filter((task) => task.id === id);
    editableTarget.isEditable = false;
    editableTarget.text = editPersistance.text;
    setTasks([...tasks]);
  };

  const puttingRequest = async (id, newData) => {
    fetch(`https://aluminum-delicate-snowshoe.glitch.me/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  };

  return (
    <div className="Wrapper bg-teal-900 bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <deleteHandlerContext.Provider value={handleDelete}>
        <editHandlerContext.Provider value={handleEdit}>
          <Header />
          <AddTAsk tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditSubmitter={handleEditSubmitter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </editHandlerContext.Provider>
      </deleteHandlerContext.Provider>
    </div>
  );
};

export default App;
