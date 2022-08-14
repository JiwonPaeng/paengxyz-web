import React from "react";
import Image from "../imgs/Season5-1.png";
import "../css/SeasonMenu.css";

const Season5 = () => {
    return (
        <div className="ret">
            <h1>시즌 5</h1>
            <div className="image">
                <img src = {Image} alt = "Season 5"/>
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season5;