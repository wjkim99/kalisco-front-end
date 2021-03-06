import React from "react";
import styles from "../main_footer_circle.module.scss";

function SupportLogo({ hovered }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51.139"
            height="55.836"
            viewBox="0 0 51.139 55.836"
        >
            <g transform="translate(-17.756)">
                <g transform="translate(17.756)">
                    <path
                        className={
                            hovered ? styles.hoveredLogo : styles.normalLogo
                        }
                        d="M63.505,23.081h-.138V19.695a19.695,19.695,0,1,0-39.39,0v3.386h-.829a5.628,5.628,0,0,0-5.39,5.8v8.638a5.459,5.459,0,0,0,5.319,5.6h5.185a1.313,1.313,0,0,0,1.25-1.373q0-.039-.006-.078V24.739c0-.829-.484-1.659-1.244-1.659h-1.52V19.695a16.931,16.931,0,1,1,33.861,0v3.386h-1.52c-.76,0-1.244.829-1.244,1.659V41.67A1.313,1.313,0,0,0,59,43.115l.078.006h1.589l-.138.207a10.918,10.918,0,0,1-8.776,4.354A6.841,6.841,0,0,0,38.213,49a6.91,6.91,0,0,0,6.91,6.841A7.118,7.118,0,0,0,50.1,53.694a6.082,6.082,0,0,0,1.659-3.317,13.682,13.682,0,0,0,10.988-5.459l1.313-1.935c2.971-.207,4.837-2.073,4.837-4.768V29.577C68.9,26.605,66.684,23.081,63.505,23.081ZM26.742,40.357H23.148A2.7,2.7,0,0,1,20.52,37.6c0-.024,0-.049,0-.074V28.886a2.865,2.865,0,0,1,2.626-3.041h3.593ZM48.1,51.759a4.077,4.077,0,0,1-2.971,1.313A4.215,4.215,0,0,1,40.977,49a4.077,4.077,0,1,1,8.154,0v0A3.663,3.663,0,0,1,48.1,51.759ZM66.131,38.215c0,1.866-1.8,2.142-2.626,2.142H60.6V25.845h2.9c1.52,0,2.626,2.142,2.626,3.732Z"
                        transform="translate(-17.756)"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SupportLogo;
