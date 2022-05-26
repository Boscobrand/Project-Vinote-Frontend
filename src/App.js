import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import header from "./Components/header.js";
import Discover from "./Components/Discover.js";
import Experience from "./Components/Experience.js";
import Collect from "./Components/Collect.js";
import Share from "./Components/Share.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import Images from "./Images/vinote.png";

import "./App.css";



const App = () => {
   return (
    <div className="App">
        
            <title>
                    <img src={Images} alt="logo" className="logo"/>
                    <Link to= "/">Home</Link>
                    <Link to="/Home/"><h4>Home</h4></Link>
            </title>
            <nav>
                    <Link to="/Discover/"><h4>Discover</h4></Link>
                    <Link to="/Experience/"><h4>Experience </h4></Link>
                    <Link to="/Collect/"><h4>Collect </h4></Link>
                    <Link to="/Share/"><h4> Share</h4></Link>
                    <Link to="/About/"><h4>About</h4></Link>
            </nav>

            <header />

            <main>

            <Routes>         

                <Route path = "/" element = {<header />}><Route index element={<><scrollToTop /></>}/></Route>
                <Route path = "/About" element={<About />}></Route>
                <Route path = "/Collect/" element={<Collect />}></Route>
                <Route path = "/Discover/" element={<Discover />}></Route>
                <Route path = "/Experience/" element={<Experience />}></Route>
                <Route path = "/Share/" element={<Share />}></Route>
                <Route path = "/Footer/" element = {<Footer />} />  


            </Routes>
            </main>
        </div>

    );
}
export default App;