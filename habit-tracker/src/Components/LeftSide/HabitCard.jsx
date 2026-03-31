export const HabitCard = () =>{
    return(
        <div className="flex flex-col px-7 ">
                <div className="flex items-center justify-between px-5 py-3 align-middle bg-amber-50 rounded-xl">
                    <div className="flex flex-col align-middle">
                        <h3 className="font-semibold text-xl">Gym session</h3>
                        <span className="font-lite ml-3 ">work-out</span>
                    </div>
                    <div  className="leftSide w-12">
                        <input type="checkbox"
                         className="" />
                    </div>
                </div>
            </div>
    )
}