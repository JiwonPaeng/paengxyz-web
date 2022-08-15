import React from "react";
import Image from "../imgs/Season4-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season4 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 4</h1>
                <img className = {styles.serverimg} src = {Image} alt = "Season 4"/>
            사진 추가 예정
        </div>
    );
}

export default Season4;