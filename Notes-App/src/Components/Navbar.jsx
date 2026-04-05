export const Navbar = () => {
    return (
        <nav className="px-6 py-4 bg-gray-200 flex items-center justify-between">
            <div className="flex gap-7 items-center">
                <h1 className="border-gray-500 border-r-2 pr-3 font-bold text-xl">Notes App</h1>
                <input type="text" placeholder="Search."
                    className=" bg-white rounded-xl px-4 py-1 w-xl  shadow-lg" />
            </div>
            <div>
                <button className="theme-btn">
                    <div className="toggle-track">
                        <div className="toggle-thumb"></div>
                    </div>
                    <span id="themeLabel">Light Mode</span>
                </button>
            </div>
        </nav>
    )
}