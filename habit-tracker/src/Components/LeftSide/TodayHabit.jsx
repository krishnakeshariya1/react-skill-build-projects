import { AddHabit } from "./AddHabit"
import { HabitCard } from "./HabitCard"

export const TodayHabit = () =>{
    return(
        <div className="w-full flex flex-col gap-15">
            <h2 className="text-2xl font-semibold ">Today's Ritual </h2>

            < HabitCard />

            < AddHabit />
        </div>
    )
}