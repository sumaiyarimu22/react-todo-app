import { useEffect, useState } from "react";
import AddTAsk from "./Components/AddTAsk";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Wrapper bg-teal-900 bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTAsk tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
