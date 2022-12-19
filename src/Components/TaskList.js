import Item from "./Item";
const TaskList = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-3 container mx-auto bg-gray-900 p-10">
      {tasks.map((task) => (
        <Item task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
