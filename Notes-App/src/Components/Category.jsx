import { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

const categories = ["all", "projects", "personal", "work"];

export const Category = ({ filterNote }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="px-20 py-10">
           <h1 className={`text-5xl font-semibold ${theme} text-(--primary-text-Color) `}>Your Creative Space, <span className="text-orange-300 font-serif underline   capitalize">Krishna</span></h1>
        <ul className="flex gap-7 items-center mt-10 ml-4">
            {categories.map((cat) => (
                <li
                    key={cat}
                    onClick={() => filterNote(cat)}
                    className="bg-gray-200 py-2 px-4 rounded-2xl hover:shadow-2xl hover:bg-gray-300 cursor-pointer"
                >
                    {cat}
                </li>
            ))}
        </ul>
        </div>
    );
};
