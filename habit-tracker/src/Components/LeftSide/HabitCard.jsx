export const HabitCard = ({habits, deleteHabit, toggleHabit}) => {
    return (
        <div className="flex flex-col px-7 gap-3">
            {habits.map((habit, id)=>{
                return (
                    <div key={id} className={`flex items-center justify-between px-5 py-3 ${ habit.completed ? "bg-green-600  shadow-xl" : "bg-white shadow-lg"} align-middle  rounded-xl`}>
                <div className="flex flex-col align-middle">
                    <h3 className="font-semibold text-xl text-[#1A365D]">{habit.name}</h3>
                    <span className="font-lite ml-3 text-[#4A5568]">{habit.category}</span>
                </div>
                <p className="font-bold text-lg">{habit.streak} day streak</p>
                <div className="flex gap-8 items-center justify-between">
                    <button className={`${habit.completed ? " hidden" :"bg-red-600 px-2 py-1 rounded-lg font-bold text-white" }`}
                    onClick={()=>{
                        deleteHabit(habit.id);
                    }}>Delete</button>
                   <label className="leftSide"><input type="checkbox" onChange={()=> toggleHabit(habit.id)} checked={habit.completed}/></label> 
                </div>
            </div>
                )
            })}
        </div>
    )
}