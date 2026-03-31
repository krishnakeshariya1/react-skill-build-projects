export const NavBar = () =>{
    return(
        <div className="w-full h-auto px-5 py-2.5 flex items-center justify-between bg-[#1A365D] text-white">
            <h1 className=" font-bold text-lg" >Habit Tracker</h1>
            <div className=" overflow-hidden ">
                <img src="https://www.svgrepo.com/show/486506/user-profile-filled.svg" alt="user Profile" className="w-10 cursor-pointer bg-white rounded-3xl" />
            </div>
        </div>
    )
}