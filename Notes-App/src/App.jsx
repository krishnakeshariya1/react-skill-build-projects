import { useContext, useEffect, useState } from "react";
import { Dashboard } from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddNotesPage } from "./Pages/AddNotesPage";
import { ThemeContext } from "./ContextAPI/ThemeContext";

const App = () => {

  const [notes, setNotes] = useState(() => {
    try {
      const data = localStorage.getItem("notes");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  const [filters, setFilter] = useState("all");
  const [search, setSearch] = useState(null);


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNote(noteData) {
    if (!noteData.title.trim() || !noteData.category.trim()) return;

    const note = {
      id: Date.now().toString(),
      title: noteData.title,
      category: noteData.category,
      date: noteData.date,
      isCompleted: false,
      isEditing: false,
    };

    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(id) {
    if (!id) return;

    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  function DoneNote(id) {
    setNotes((prev) => prev.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          isCompleted: !note.isCompleted,
        }
      }
    }))
  }
  
  const filterNote = notes.filter((note) => {
  const matchesSearch =
    (note.title || "")
      .toLowerCase()
      .includes((search || "").toLowerCase());

  const matchesCategory =
    filters === "all" ||
    (note.category && note.category === filters);

  return matchesSearch && matchesCategory;
});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard notes={filterNote} deleteNote={deleteNote} DoneNote={DoneNote} filterNote={setFilter} setSearch={setSearch} />} />
        <Route path="/Add" element={<AddNotesPage handleSubmit={createNote} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;