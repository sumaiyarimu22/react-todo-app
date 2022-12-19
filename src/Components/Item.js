import { FiEdit, FiTrash } from "react-icons/fi";

const Item = ({ task }) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-gray-800 to-slate-800 justify-between p-5 rounded hover:from-teal-900 hover:to-gray-800 group">
      <div className="flex gap-3">
        <span>
          <input type="checkbox" className="accent-teal-400 cursor-pointer" />
        </span>
        <p className="group-hover:text-teal-500">{task.text}</p>
      </div>
      <div className="flex gap-3 text-gray-500">
        <button className="hover:text-teal-400 duration-300 cursor-pointer">
          <FiEdit />
        </button>
        <button className="hover:text-rose-500 duration-300 cursor-pointer">
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default Item;
