import { useState } from "react"

export const AddHabit = ({createHabit}) =>{

    const [name, setName] = useState("");
    const [catg, setCatg] = useState("");

    function validateInput(){

        console.log(catg)
        if(!name.trim() || !catg.trim()) return;

        setName("");
        setCatg("");
        createHabit(name, catg)
    }

    return(
        <div className="w-full border-dotted border-2 rounded-2xl border-black px-6 py-4 ">

           <div className="flex gap-5">
            <div className="w-1/2 flex flex-col">
            <label className="ml-5">HABIT NAME :</label>
            <input type="text" className="w-full bg-white px-4 py-2 rounded-2xl text-black outline-green-500" placeholder="Enter Habit" value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }} />
           </div>

           <div className="w-1/2 flex flex-col">
            <label className="ml-5">HABIT Category :</label>
            <select className="bg-white w-full px-5 py-2 rounded-2xl text-black font-bold "
            value={catg}
            onChange={(e)=>{
                setCatg(e.target.value)
            }} >
                <option value=""></option>
                <option value="Work-out">Work-out</option>
                <option value="writing">writing</option>
                <option value="singing">Singing</option>
                <option value="coding">Coding</option>
            </select>
           </div>

           </div>

           <button className="w-full bg-green-600 mt-5 py-2 rounded-2xl font-bold text-white" onClick={()=>{
            validateInput();
           }}>Add Habit</button>
        </div>
    )
}