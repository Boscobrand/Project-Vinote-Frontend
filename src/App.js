import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Collect from "./Components/Collect"
import About from "./Components/About"
import "./App.css"



function App() {
  return (
    <div className="App">
            <nav>
                <Link to ="/">Home</Link>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/About"><h4>About</h4></Link>
                </div>
            </nav>
            <Header />
            <main>

            <Routes>
  
                <Route path = "/About/" element={<About />}></Route>
                <Route path = "/Collect/" element={<Collect />}></Route>
                {/* <Route path = "/Experience/" element={<Experience />}></Route>
                <Route path = "/Share/" element={<Share />}></Route> */}
                <Route path = "/Footer/" element = {<Footer />} />
                
                {/* <Route path = "/ResultList/:Recipe" element={<Recipe/>}/> */}
                {/* <Route path = "/ResultList/" element={<ResultList recipes={recipes}/>}/> */}
           
            </Routes>
            </main>
        </div>

    );
}
export default App;