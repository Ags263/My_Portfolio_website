import React from "react";


import {
    About,
    Contact,
    Header,
    Skills,
    Work,
    Education,
    Certifications,
    Experience,

} from "./container";

import {
    Navbar,
    Footer
} from "./components";
import "./App.scss";

const App = () => {
    return ( <
        div className = "app" >
        <
        Navbar / >
        <
        Header / >
        <
        About / >
        <
        Work / >
        <
        Skills / >
        <
        Education / >
        <        
        Contact / >
        <
        Footer / >
        </div>
    );
};

export default App;
