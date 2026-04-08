import { Navbar } from "../Components/Navbar"
import { ProfileCard } from "../Components/ProfileCard"

export const Overview = () => {
    return (
        <div className="w-full min-h-screen bg-[#0d1117] text-white">
            < Navbar />
            <div className="flex flex-col mt-10">
            < ProfileCard />
            </div>
        </div>
    )
}