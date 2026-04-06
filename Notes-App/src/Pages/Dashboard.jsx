import { Category } from "../Components/Category"
import { Navbar } from "../Components/Navbar"
import { NotesCard } from "../Components/NotesCard"

export const Dashboard = ({notes, deleteNote, DoneNote, filterNote}) => {
    return (
        <div className="w-full min-h-screen  bg-gray-50">
            < Navbar />
            < Category filterNote={filterNote}/>
            < NotesCard notes={notes} deleteNote={deleteNote} DoneNote={DoneNote}/>
        </div>
    )
}