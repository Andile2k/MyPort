import "./App.css";
import React from "react";
import NavBar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/Homescreen";

function App() {
    return (
    <div className="App">
        <Router>
            <div>
                <NavBar/>
            </div>
        </Router>
        
    </div>
    );
}

export default App;