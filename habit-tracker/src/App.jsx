import { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar/Navbar"
import { InfoList } from "./Components/HabitList/InfoList";
import { TodayHabit } from "./Components/LeftSide/TodayHabit";

function getDate(){
  const today = new Date();
  return today.toLocaleDateString('en-US')
}

const App = () =>{

  const [habits, setHabits] = useState()

  return(

    <div className="w-full min-h-screen bg-[#e9f6fa] ">

      < NavBar />

      <div className="px-16 py-4">
        <h1 className="text-4xl font-bold text-[#1A365D] mb-1">Good Morning, Krishna!</h1>
        <p className="ml-2 font-medium text-[#4A5568]">{ getDate()}</p>
      </div>

      < InfoList />

      <div className="container px-16 py-6 w-full">
        < TodayHabit />
      </div>

    </div>
  )
}
export default App