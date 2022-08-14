import React from "react";
import Image from "../imgs/Season4-2.png";
import "../css/SeasonMenu.css";

const Season4 = () => {
    return (
        <div className="ret">
            <h1>시즌 4</h1>
            <div className="image">
                <img src = {Image} />
            </div>
            사진 추가 예정
        </div>
    );
}

export default Season4;