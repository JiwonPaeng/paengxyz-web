import React from "react";
import Image from "../imgs/Season7-1.png";
import styles from "../css/SeasonMenu.module.css";

const Season7 = () => {
    return (
        <div className = {styles.ret}>
            <h1>시즌 7</h1>
                <img className = {styles.serverimg} src = {Image} alt = "Season 7"/>
            사진 추가 예정
        </div>
    );
}

export default Season7;