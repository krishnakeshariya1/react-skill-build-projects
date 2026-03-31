import { useEffect } from "react";
import { NavBar } from "./Components/NavBar/Navbar"
import { HabitList, InfoList } from "./Components/HabitList/InfoList";

function getDate(){
  const today = new Date();
  return today.toLocaleDateString('en-US')
}

const App = () =>{

  return(

    <div className="w-full h-screen bg-[#c3ffde]">

      < NavBar />

      <div className="px-16 py-4">
        <h1 className="text-4xl font-bold text-[#003824] mb-1">Good Morning, Krishna!</h1>
        <p className="ml-1 font-medium text-[#4b8171]">{ getDate()}</p>
      </div>

      < InfoList />

    </div>
  )
}
export default App