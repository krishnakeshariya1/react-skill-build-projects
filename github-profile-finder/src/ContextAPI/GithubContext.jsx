import { createContext, useState } from "react";

const GitHubContext = createContext();

export const GitHubProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [repo, setRepo] = useState([]);

    async function fetchUserData( username) {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json();

      setUser(data)
    }

    async function fetchRepo( username) {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();

        setRepo(data)
    }

    return(
        < GitHubContext.Provider value={{user, repo, fetchRepo, fetchUserData}}>
          {children}
        </GitHubContext.Provider>
    )
}