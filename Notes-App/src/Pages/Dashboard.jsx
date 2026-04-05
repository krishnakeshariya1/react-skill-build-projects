import { Category } from "../Components/Category"
import { Navbar } from "../Components/Navbar"
import { NotesCard } from "../Components/NotesCard"

export const Dashboard = ({notes}) => {
    return (
        <div className="w-full min-h-screen  bg-gray-50">
            < Navbar />
            < Category/>
            < NotesCard notes={notes} />
        </div>
    )
}