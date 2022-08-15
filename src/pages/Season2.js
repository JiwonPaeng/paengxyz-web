import React from "react";
import Image from "../imgs/Season2-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season2 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 2</h1>
                <img className = {styles.serverimg} src = {Image} alt = "Season 2"/>
            사진 추가 예정
        </div>
    );
}

export default Season2;