import React from "react";
import Image from "../imgs/Season7-1.png";
import "../css/SeasonMenu.css";

const Season7 = () => {
    return (
        <div className="ret">
            <h1>시즌 7</h1>
            <div className="image">
                <img src = {Image} alt = "Season 7"/>
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season7;