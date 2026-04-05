import { Link } from "react-router-dom";

export const AddNotes = () => {
  return (
    < Link to="/Add">
    <div
      className="
        h-56 py-10  border-2 border-dashed border-gray-300  rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition ">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-200 text-xl font-bold">
        +
      </div>

      <h2 className="mt-4 font-semibold text-gray-700">
        Create New Note
      </h2>

      <p className="text-sm text-gray-400">
        Start a fresh thought
      </p>
    </div>
    </Link>
  );
};