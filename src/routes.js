import React from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./Home.js";
import Portf from "./Portfolio.js";
import Contact from "./Contact.js";

function RouteApp(){
    return (
        <Routes> {/* Acts as array for all routes passed to broswer router wrapper*/}
                <Route exact path ="/" element={<MainPage/>}></Route> {/* Acts as individual route being passed back */}
                <Route path = "Home" element={<MainPage/>}></Route>
                <Route path="/Portfolio" element={<Portf />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
    )


}
export default RouteApp
