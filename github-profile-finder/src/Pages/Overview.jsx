import { Info } from "../Components/Info"
import { Navbar } from "../Components/Navbar"
import { ProfileCard } from "../Components/ProfileCard"

export const Overview = () => {
    return (
        <div className="w-full min-h-screen bg-[#0d1117] text-white ">
            < Navbar />
            <div className="flex mt-10 gap-6">
            < ProfileCard />
            < Info />
            </div>
        </div>
    )
}