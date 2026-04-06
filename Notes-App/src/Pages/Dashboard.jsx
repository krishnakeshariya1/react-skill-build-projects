import { useContext } from "react"
import { Category } from "../Components/Category"
import { Navbar } from "../Components/Navbar"
import { NotesCard } from "../Components/NotesCard"
import { ThemeContext } from "../ContextAPI/ThemeContext"

export const Dashboard = ({notes, deleteNote, DoneNote, filterNote, setSearch}) => {

    const {Theme} = useContext(ThemeContext);
    
    return (
        <div className={`w-full min-h-screen ${Theme} bg-(--bg-body-Color)`}>
            < Navbar setSearch={setSearch}/>
            < Category filterNote={filterNote}/>
            < NotesCard notes={notes} deleteNote={deleteNote} DoneNote={DoneNote}/>
        </div>
    )
}