import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";

import Season1 from "./pages/Season1";
import Season2 from "./pages/Season2";
import Season3 from "./pages/Season3";
import Season4 from "./pages/Season4";
import Season5 from "./pages/Season5";
import Season6 from "./pages/Season6";
import Season7 from "./pages/Season7";

import "./css/App.css";

function App() {
  return (
    <div className="App">
        <nav className = "nav">
            <a href = "/" className = "site-title">
                paeng.xyz
            </a>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/counter">Counter</Link>
            <Link to = "/season1">시즌 1</Link>
            <Link to = "/season2">시즌 2</Link>
            <Link to = "/season3">시즌 3</Link>
            <Link to = "/season4">시즌 4</Link>
            <Link to = "/season5">시즌 5</Link>
            <Link to = "/season6">시즌 6</Link>
            <Link to = "/season7">시즌 7</Link>
            <Link to = "/"></Link>
        </nav>
        <Routes className = "paeng-ul">
            <Route path = "/" element = {<Home></Home>}></Route>
            <Route path = "/about" element = {<About></About>}></Route>
            <Route path = "/counter" element = {<Counter></Counter>}></Route>
            <Route path = "/Season1" element = {<Season1></Season1>}></Route>
            <Route path = "/Season2" element = {<Season2></Season2>}></Route>
            <Route path = "/Season3" element = {<Season3></Season3>}></Route>
            <Route path = "/Season4" element = {<Season4></Season4>}></Route>
            <Route path = "/Season5" element = {<Season5></Season5>}></Route>
            <Route path = "/Season6" element = {<Season6></Season6>}></Route>
            <Route path = "/Season7" element = {<Season7></Season7>}></Route>
        </Routes>
    </div>
  );
}

export default App;