import { AddNotes } from "./Components/AddNotes"
import { Category } from "./Components/Category"
import { Navbar } from "./Components/Navbar"
import { NotesCard } from "./Components/NotesCard"

const App = () =>{
  
  return(
    <div className="w-full min-h-screen  bg-gray-50">
      <Navbar />

      < Category />
      < NotesCard />
    </div>
  )
}
export default App