import { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar/Navbar"
import { InfoList } from "./Components/HabitList/InfoList";
import { TodayHabit } from "./Components/LeftSide/TodayHabit";

function getDate() {
  const today = new Date();
  return today.toLocaleDateString('en-US')
}

const App = () => {

  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits])

  function createHabit(inp, catg) {

    const habit = {
      id: Date.now().toString(),
      name: inp,
      category: catg,
      completed: false,
      streak: 0,
      lastCompletedDate: null
    }

    setHabits((prev) => [...prev, habit])

  }

 function manageStreak(id) {
  const today = new Date().toDateString();

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toDateString();

  setHabits((prev) =>
    prev.map((habit) => {
      if (habit.id !== id) return habit;

      if (habit.lastCompletedDate === today ) {
        return {
          ...habit,
          completed: false,
          streak: Math.max(0, habit.streak - 1),        
          lastCompletedDate: yesterday               
        };
      }

      if (habit.lastCompletedDate === yesterday) {
        return {
          ...habit,
          completed: true,
          streak: habit.streak + 1,
          lastCompletedDate: today
        };
      }

      return {
        
        ...habit,
        completed: true,
        streak: 1,
        lastCompletedDate: today
      };
    })
  );
}

   useEffect(() => {
    console.log(habits)
  }, [habits, setHabits])

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

  return (

    <div className="w-full min-h-screen bg-[#e9f6fa] ">

      < NavBar />

      <div className="px-16 py-4">
        <h1 className="text-4xl font-bold text-[#1A365D] mb-1">Good Morning, Krishna!</h1>
        <p className="ml-2 font-medium text-[#4A5568]">{getDate()}</p>
      </div>

      < InfoList />

      <div className="container px-16 py-6 w-full">
        < TodayHabit habits={habits} createHabit={createHabit} deleteHabit={deleteHabit}  manageStreak={manageStreak}/>
      </div>

    </div>
  )
}
export default App