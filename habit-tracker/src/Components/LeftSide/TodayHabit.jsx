import { AddHabit } from "./AddHabit"
import { HabitCard } from "./HabitCard"

export const TodayHabit = ({habits, createHabit, deleteHabit, toggleHabit}) =>{
    return(
        <div className="w-full flex flex-col gap-11">
            <h2 className="text-2xl font-semibold text-[#1A365D]  ">Today's Ritual </h2>

            < HabitCard  habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />

            < AddHabit createHabit={createHabit} />
        </div>
    )
}