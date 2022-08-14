import React from "react";
import i2020 from "../imgs/Season1-0.png";
import "../css/Home.css";

const Home = () => {
    return (
        <div className="Homeret">
            <h1>HOME</h1>
            아직 개발중인 웹사이트입니다
            <div className = "homeimage">
                <img src = {i2020} alt = "2020"></img>
            </div>
        </div>
    );
}

export default Home;