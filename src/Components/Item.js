import { useContext, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { deleteHandlerContext, editHandlerContext } from "../App";

const Item = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(deleteHandlerContext);
  const handleEdit = useContext(editHandlerContext);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex items-center bg-gradient-to-r from-gray-800 to-slate-800 justify-between p-5 rounded hover:from-teal-900 hover:to-gray-800 group">
      <div className="flex gap-3">
        <span>
          <input
            type="checkbox"
            className="accent-teal-400 cursor-pointer"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </span>

        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, task.id)}>
            <input
              className="bg-transparent outline-none border-b-2 border-gray-500 pb-2 focus:border-teal-500"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}

        {!task.isEditable && (
          <p
            className={`group-hover:text-teal-400 ${
              isChecked
                ? `line-through text-gray-500 group-hover:text-teal-600`
                : null
            }`}
          >
            {task.text}
          </p>
        )}
      </div>
      <div className="flex gap-3 text-gray-500">
        <button onClick={() => handleEdit(task.id)}>
          <FiEdit className="hover:text-teal-400 duration-300 cursor-pointer" />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <FiTrash className="hover:text-rose-500 duration-300 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Item;
