import React from "react";
import Image1 from "../imgs/Season6-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season6 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 6</h1>
                <img className = {styles.serverimg} src = {Image1} alt = "Season 6"/>
            사진 추가 예정
        </div>
    );
}

export default Season6;