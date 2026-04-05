import { useEffect, useState } from "react";
import { Dashboard } from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddNotesPage } from "./Pages/AddNotesPage";

const App = () => {

  const [notes, setNotes] = useState(() => {
    try {
      const data = localStorage.getItem("notes");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

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
  function deleteNote(id){
    if(!id)return;

    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard notes={notes} deleteNote={deleteNote} />} />
        <Route path="/Add" element={<AddNotesPage handleSubmit={createNote} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;