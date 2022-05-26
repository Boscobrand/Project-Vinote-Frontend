import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import header from "./Components/header";
import Footer from "./Components/Footer";
import Collect from "./Components/Collect";
import About from "./Components/About";

import "./App.css";



const App = () => {
   return (
    <div className="App">
            <nav>

                <div class=".container-1" >
                    <Link to= "/">Home</Link>
                    <Link to="/Home/"><h4>Home</h4></Link>
                    <Link to="/About/"><h4>About</h4></Link>
                </div>
            </nav>
            <nav2>
                <div class=".container-2">
                    <Link to="/Discover/"><h4>Discover</h4></Link>
                    <Link to="/Experience/"><h4>Experience</h4></Link>
                    <Link to="/Collect/"><h4>Collect</h4></Link>
                    <Link to="/Share/"><h4>Share</h4></Link>
                </div>
            </nav2>

            <header />
            <main>

            <Routes>         
                <Route path = "/" element = {<header />}><Route index element={<><scrollToTop /></>}/></Route>
                <Route path = "/About" element={<About />}></Route>
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