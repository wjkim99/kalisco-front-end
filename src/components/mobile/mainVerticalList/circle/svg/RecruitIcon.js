import React from "react";
import styles from "./icon.module.scss";

export default function RecruitIcon({ hovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.664"
      height="29.664"
      viewBox="0 0 29.664 29.664"
    >
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M28.9,26.476a3.387,3.387,0,0,1-3.366-3.134l-.114-1.6a3.489,3.489,0,1,1,6.961,0l-.115,1.6A3.387,3.387,0,0,1,28.9,26.476Zm0-7.416a2.43,2.43,0,0,0-2.424,2.6l.115,1.6a2.315,2.315,0,0,0,4.618,0l.115-1.6a2.43,2.43,0,0,0-2.424-2.6Z"
        transform="translate(-14.07 -10.584)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M32.184,38H20.53a.53.53,0,0,1-.53-.53v-2a3.185,3.185,0,0,1,1.863-2.892l2.823-1.287a.53.53,0,1,1,.44.964L22.3,33.539a2.124,2.124,0,0,0-1.242,1.928V36.94H31.654V35.467a2.124,2.124,0,0,0-1.242-1.928l-2.824-1.287a.53.53,0,1,1,.44-.964l2.823,1.287a3.184,3.184,0,0,1,1.862,2.892v2A.53.53,0,0,1,32.184,38Z"
        transform="translate(-11.524 -16.81)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M28.376,24.119a13.636,13.636,0,0,1-2.525-.258.53.53,0,0,1,.2-1.041,13.5,13.5,0,0,0,1.8.226V22.53a.53.53,0,0,1,.9-.375,4.55,4.55,0,0,0,2.62.874l.5.009a.53.53,0,0,1-.021,1.059l-.53-.011a6.972,6.972,0,0,1-2.41-.6v.1A.53.53,0,0,1,28.376,24.119Z"
        transform="translate(-14.073 -12.465)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M31.53,9.3a.53.53,0,0,1-.53-.53V4.53a.53.53,0,1,1,1.059,0V8.767A.53.53,0,0,1,31.53,9.3Z"
        transform="translate(-16.698 -4)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M8.767,32.059H4.53A.53.53,0,1,1,4.53,31H8.767a.53.53,0,0,1,0,1.059Z"
        transform="translate(-4 -16.698)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M31.53,55.3a.53.53,0,0,1-.53-.53V50.53a.53.53,0,0,1,1.059,0v4.238A.53.53,0,0,1,31.53,55.3Z"
        transform="translate(-16.698 -25.633)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M54.767,32.059H50.53a.53.53,0,0,1,0-1.059h4.238a.53.53,0,0,1,0,1.059Z"
        transform="translate(-25.633 -16.698)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M19.773,33.545A13.773,13.773,0,1,1,33.545,19.773,13.773,13.773,0,0,1,19.773,33.545Zm0-26.486A12.713,12.713,0,1,0,32.486,19.773,12.713,12.713,0,0,0,19.773,7.059Z"
        transform="translate(-4.941 -4.941)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M21.654,33.308A11.654,11.654,0,1,1,33.308,21.654,11.654,11.654,0,0,1,21.654,33.308Zm0-22.248A10.594,10.594,0,1,0,32.248,21.654,10.594,10.594,0,0,0,21.654,11.059Z"
        transform="translate(-6.822 -6.822)"
      />
    </svg>
  );
}
