import { Overview } from "./Pages/Overview"
import { BrowserRouter, Route, Router} from "react-router-dom"
import { Repo } from "./Pages/Repo"

const App = () => {

  return(
    <div className="w-full min-h-screen">
      < Overview />
    </div>
  )
  // return(
  // < BrowserRouter >
  //   <Router>
  //     < Route path="/" element={Overview}/>
  //     <Route  path="/repo" element={Repo}/>
  //   </Router>
  // </BrowserRouter>  
  // )
}
export default App