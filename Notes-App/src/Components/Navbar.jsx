import { useContext } from "react"
import { ThemeContext } from "../ContextAPI/ThemeContext"

export const Navbar = () => {
    const {Theme, toggleTheme} = useContext(ThemeContext)
    return (
        <nav className={`px-6 py-4 flex items-center justify-between w-full ${Theme} bg-(--bg-Navbar)`}>
            <div className="flex gap-7 items-center">
                <h1 className={` border-(--border-Color) text-(--primary-text-Color) border-r-2 pr-3 font-bold text-xl ${Theme} `}>Notes App</h1>
                <input type="text" placeholder="Search."
                    className={`${Theme} bg-(--primary-bg) rounded-xl px-4 py-1 w-xl shadow-lg`} />
            </div>
            <div>
                <button className={`theme-btn ${Theme} bg-(--secondary-bg) text-(--seconday-Color)`}
                onClick={()=>toggleTheme()}>
                    <div className={`toggle-track `}>
                        <div className="toggle-thumb"></div>
                    </div>
                    <span id="themeLabel">{Theme === "light" ? "Light Mode" : "Dark Mode"}</span>
                </button>
            </div>
        </nav>
    )
}