export const HabitCard = () => {
    return (
        <div className="flex flex-col px-7 gap-3">
            <div className="flex items-center justify-between px-5 py-3 align-middle bg-white shadow-lg rounded-xl">
                <div className="flex flex-col align-middle">
                    <h3 className="font-semibold text-xl text-[#1A365D]">Gym session</h3>
                    <span className="font-lite ml-3 text-[#4A5568]">work-out</span>
                </div>
                <div className="leftSide w-12">
                    <input type="checkbox"
                        className="" />
                </div>

            </div>

            <div className="flex items-center justify-between px-5 py-3 align-middle bg-white shadow-lg rounded-xl">
                <div className="flex flex-col align-middle">
                    <h3 className="font-semibold text-xl text-[#1A365D]">Gym session</h3>
                    <span className="font-lite ml-3 text-[#4A5568] ">work-out</span>
                </div>
                <div className="leftSide w-12">
                    <input type="checkbox" />
                </div>

            </div>
        </div>
    )
}