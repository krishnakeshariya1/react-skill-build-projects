import { HabitCard } from "./HabitCard"

export const TodayHabit = () =>{
    return(
        <div className="w-full border-2">
            <h2 className="text-2xl font-semibold mb-2">Today's Ritual </h2>
            < HabitCard />
        </div>
    )
}