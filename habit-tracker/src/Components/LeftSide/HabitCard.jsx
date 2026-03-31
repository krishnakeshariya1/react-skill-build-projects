export const HabitCard = ({habits}) => {
    return (
        <div className="flex flex-col px-7 gap-3">
            {habits.map((habit, id)=>{
                return (
                    <div key={id} className="flex items-center justify-between px-5 py-3 align-middle bg-white shadow-lg rounded-xl">
                <div className="flex flex-col align-middle">
                    <h3 className="font-semibold text-xl text-[#1A365D]">{habit.name}</h3>
                    <span className="font-lite ml-3 text-[#4A5568]">{habit.category}</span>
                </div>
                <div className="leftSide w-12">
                    <input type="checkbox"/>
                </div>
            </div>
                )
            })}
        </div>
    )
}