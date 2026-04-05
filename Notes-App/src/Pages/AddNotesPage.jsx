import { useState } from "react";

export const AddNotesPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col gap-7">
        <h1 className="font-bold text-4xl text-green-500 uppercase ">Add Notes </h1>
    <form
      className="min-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter note title"
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Ideas">Ideas</option>
          <option value="Projects">Projects</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Create Note
      </button>
    </form>
    </div>
  );
};