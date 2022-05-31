import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import header from "./Components/header.js";
import Discover from "./Components/pages/Discover";
import Experience from "./Components/pages/Experience";
import Collect from "./Components/pages/Collect";
import Share from "./Components/pages/Share";
import About from "./Components/pages/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Images from "./Images/vinote.png";
import "./App.css";



const App = () => {
   return (
        <><div classsName="navigation">
           <title>
               <img src={Images} alt="logo" className="logo" />
               <Link to="/"><h4>Home</h4></Link>
           </title>
           <nav>
               <Link to="/Discover/"><h4>Discover</h4></Link>
               <Link to="/Experience/"><h4>Experience </h4></Link>
               <Link to="/Collect/"><h4>Collect </h4></Link>
               <Link to="/Share/"><h4> Share</h4></Link>
               <Link to="/About/"><h4>About</h4></Link>
           </nav>
       </div><div className="discover">

               <Routes>

                   <Route path="/" element={<header />}><Route index element={<><scrollToTop /></>} /></Route>
                   <Route path="/Home" element={<Home />}></Route>
                   <Route path="/About" element={<About />}></Route>
                   <Route path="/Collect/" element={<Collect />}></Route>
                   <Route path="/Discover/" element={<Discover />}></Route>
                   <Route path="/Experience/" element={<Experience />}></Route>
                   <Route path="/Share/" element={<Share />}></Route>
                   <Route path="/Footer/" element={<Footer />} />

               </Routes>

           </div></>
        )

   }    


export default App;