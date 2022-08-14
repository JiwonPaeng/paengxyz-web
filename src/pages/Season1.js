import React from "react";
import FirstImage from "../imgs/Season1-1.png";
import "../css/SeasonMenu.css";

const Season1 = () => {
    return (
        <div className="ret">
            <h1>시즌 1</h1>
            <div className="image">
                <img src = {FirstImage} alt = "Season 1"/>
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season1;