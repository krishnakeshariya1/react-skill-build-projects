export const ProfileCard = () => {
    return (
        <div className="w-1/3 text-end">

            <img
                src="https://via.placeholder.com/150"
                className="rounded-full w-80 h-80 border-2 border-amber-50 ml-auto"
            />

            <div className="my-5 w-2/3 ml-auto ">
                <h1 className="text-2xl font-bold text-start px-5">Krishna Keshariya</h1>
                <p className="text-gray-400 text-start px-6 ">krishnakeshariya1</p>
            </div>

            <button className="w-2/3 bg-[#363a3f96] py-1 rounded mb-5">
                Edit profile
            </button>

            <div className=" w-2/3 ml-auto">
                <p className="text-sm text-gray-400 text-start  flex gap-3.5">
                    <span>3 followers </span> <span>· 2 following</span>
                </p>
            </div>

            <div className=" w-2/3 ml-auto mt-5">
            <p className="text-sm text-start">keshariyakrishna8@gmail.com</p>
            </div>
            

        </div>
    )
}