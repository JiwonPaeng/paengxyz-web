import React from "react";
import Image from "../imgs/Season5-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season5 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 5</h1>
                <img className = {styles.serverimg} src = {Image} alt = "Season 5"/>
            사진 추가 예정
        </div>
    );
}

export default Season5;