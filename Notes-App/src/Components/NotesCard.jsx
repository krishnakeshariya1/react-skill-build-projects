export const NotesCard = () =>{
    return(
        <div className="grid grid-cols-4 items-center gap-5 py-10 px-24">
            <div className=" h-56 bg-white shadow-lg rounded-2xl px-4 py-2 flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="bg-sky-200 px-2 py-1 rounded-xl font-semibold">Category</h2>
                    <p>12/06/2005</p>
                </div>
                <div>
                    <h1 className="font-bold ml-2.5 mr-2.5 mt-5 text-2xl">Title is here for you guys justify.</h1>
                </div>
                <div className="flex justify-between px-2 items-center mt-auto ">
                    <button className="bg-red-500 px-3 py-1 rounded-xl">Delete</button>
                    <button className="bg-green-500 px-3 py-1 rounded-xl">Done</button>
                </div>
            </div>
        </div>
    )
}