import { useEffect, useState } from "react"
import { AddNotes } from "./Components/AddNotes"
import { AllNotesLayout } from "./Components/AllNotesLayout"
import { Category } from "./Components/Category"
import { Navbar } from "./Components/Navbar"
import { NotesCard } from "./Components/NotesCard"
import { Dashboard } from "./Pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddNotesPage } from "./Pages/AddNotesPage"

const App = () =>{

  const [notes, setNotes] = useState(()=>{
    const data = localStorage.getItem("notes")
    return data ? JSON.parse(data) : []
  })

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])
  
  return(
     <BrowserRouter >
      < Routes >
        <Route  path="/" element={< Dashboard />} />
        <Route path="/Add" element={ <AddNotesPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App