import React from "react";
import { Router, Route, Routes} from "react-router-dom";
import MainPage from "./HomeFolder/Home.js";
import Portf from "./Portfolio/Portfolio.js";
import Contact from "./Contact/Contact.js";

function RouteApp(){
    return (
        <Routes> {/* Acts as array for all routes passed to browser router wrapper*/}
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route path="/Portfolio" element={<Portf />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
    )


}
export default RouteApp
