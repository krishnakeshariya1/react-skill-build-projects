export const InfoList = () =>{
    return(
        <div className="flex items-center gap-20 px-20 py-8">
            <div className="bg-gray-300 px-9 py-4 rounded-2xl">
                <p className="font-semibold">Total Active Habits</p>
                <h2 className="font-bold text-4xl mt-1 ">12</h2>
            </div>
            <div className="bg-gray-300 px-9 py-4 rounded-2xl">
                <p className="font-semibold">Longest Streak</p>
                <h2 className="font-bold text-4xl mt-1 ">8 <span className="font-medium text-sm">Days</span> </h2>
                
            </div>
            <div className="bg-gray-300 px-9 py-4 rounded-2xl">
                <p className="font-semibold">Completion Rate</p>
                <h2 className="font-bold text-4xl mt-1 ">80%</h2>
            </div>
        </div>
    )
}