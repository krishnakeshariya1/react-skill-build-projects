import { Overview } from "./Pages/Overview"
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { Repo } from "./Pages/Repo"

const App = () => { 
  return(
  < BrowserRouter >
    <Routes>
      < Route path="/" element={< Overview />}/>
      <Route  path="/repo" element={ <Repo />}/>
    </Routes>
  </BrowserRouter>  
  )
}
export default App