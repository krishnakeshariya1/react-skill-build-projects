import { useEffect, useState } from "react"
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