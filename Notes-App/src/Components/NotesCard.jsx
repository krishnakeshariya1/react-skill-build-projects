import { Link } from "react-router-dom"
export const NotesCard = ({ notes, deleteNote, DoneNote }) => {
    return (
        <div className="grid grid-cols-4 px-24 py-5 gap-10 ">
            < Link to="/Add">
                <div
                    className="
                      h-56 py-10  border-2 border-dashed border-gray-300  rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition ">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-200 text-xl font-bold max-w-2xl">
                        +
                    </div>

                    <h2 className="mt-4 font-semibold text-gray-700">
                        Create New Note
                    </h2>

                    <p className="text-sm text-gray-400">
                        Start a fresh thought
                    </p>
                </div>
            </Link>
            {notes.map((note,) => {
                return (
                    <div key={note.id} className={`${note.isCompleted ? "bg-green-500" : "bg-white"} h-56 shadow-lg rounded-2xl px-4 py-2 flex flex-col max-w-2xl`}>
                        <div className="flex justify-between items-center">
                            <h2 className="bg-sky-200 px-2 py-1 rounded-xl font-semibold">{note.category}</h2>
                            <p>{note.date}</p>
                        </div>
                        <div>
                            <h1 className="font-bold ml-2.5 mr-2.5 mt-5 text-2xl">{note.title}</h1>
                        </div>
                        <div className="flex justify-between px-2 items-center mt-auto ">
                            < button className="bg-red-500 px-3 py-1 rounded-xl"
                              onClick={()=> deleteNote(note.id)}>Delete</button>
                            <button className="bg-green-500 px-3 py-1 rounded-xl"
                             onClick={()=> DoneNote(note.id)}>{note.isCompleted ? "Undo" : "Done"}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}