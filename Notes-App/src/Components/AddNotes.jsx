export const AddNotes = () => {
  return (
    <div
      className="
        h-auto py-10 w-60 border-2 border-dashed border-gray-300  rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition ">
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
  );
};