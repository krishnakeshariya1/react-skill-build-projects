import { AllNotesLayout } from "../Components/AllNotesLayout"
import { Category } from "../Components/Category"
import { Navbar } from "../Components/Navbar"

export const Dashboard = () => {
    return (
        <div className="w-full min-h-screen  bg-gray-50">
            < Navbar />
            < Category/>
            < AllNotesLayout />
        </div>
    )
}