import React from "react";
import Image from "../imgs/Season2-1.png";
import "../css/SeasonMenu.css";

const Season2 = () => {
    return (
        <div className="ret">
            <h1>시즌 2</h1>
            <div className="image">
                <img src = {Image} alt = "Season 2"/>
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season2;