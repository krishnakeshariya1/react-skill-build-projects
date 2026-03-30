export const NavBar = () =>{
    return(
        <div className="w-full h-auto px-5 py-2.5 flex items-center justify-between">
            <h1 className=" text-[#005236] font-bold text-lg" >Habit Tracker</h1>
            <div className=" overflow-hidden ">
                <img src="https://www.svgrepo.com/show/486506/user-profile-filled.svg" alt="user Profile" className="w-10" />
            </div>
        </div>
    )
}