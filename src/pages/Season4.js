import React from "react";
import Image from "../imgs/Season4-1.png";
import "../css/SeasonMenu.css";

const Season4 = () => {
    return (
        <div className="ret">
            <h1>시즌 4</h1>
            <div className="image">
                <img src = {Image} alt = "Season 4"/>
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season4;