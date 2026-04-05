import { AddNotes } from "./AddNotes"
import { NotesCard } from "./NotesCard"

export const AllNotesLayout =() =>{
    return(
               <div className="grid grid-cols-4 items-center gap-5 py-8 px-24">
                <AddNotes />
                < NotesCard />
               </div>
    )
}