import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="bg-black text-white py-3 px-8 flex flex-col gap-4 border-b-[0.2px] border-gray-500">
            <div className="flex items-center justify-between">
                <div>
                    <img src="Public\github-white-icon.webp" alt="github logo"
                        className="w-9" />
                </div>
                <div className="flex items-center gap-10">
                    <input type="text" className="border-[1px] border-gray-600 rounded-md px-2 py-1"
                        placeholder="Type / to search" />

                    <img src="Public\abstract-user-flat-4.png" className="w-10  rounded-3xl" />
                </div>
            </div>
            <div className="flex  gap-15 font-light">
                <NavLink
                    to="/"
                    className={({ isActive }) => `text-white ${isActive ? "underline underline-offset-17 " : ""}`}>
                    Overview
                </NavLink>
                <NavLink
                    to="/repo"
                    className={({ isActive }) => `text-white ${isActive ? "underline underline-offset-17 " : ""}`}>
                    Repositry
                </NavLink>
            </div>
        </div>

    )
}