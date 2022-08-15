import React from "react";
import FirstImage from "../imgs/Season1-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season1 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 1</h1>
                <img className = {styles.serverimg} src = {FirstImage} alt = "Season 1"/>
            사진 추가 예정
        </div>
    );
}

export default Season1;