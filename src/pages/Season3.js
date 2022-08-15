import React from "react";
import Image from "../imgs/Season3-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season3 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 3</h1>
                <img className = {styles.serverimg} src = {Image} alt = "Season 3"/>
            사진 추가 예정
        </div>
    );
}

export default Season3;