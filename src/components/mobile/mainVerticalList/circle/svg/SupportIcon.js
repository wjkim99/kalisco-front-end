import React from "react";
import styles from "./icon.module.scss";

export default function SupportIcon({ hovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.089"
      height="29.578"
      viewBox="0 0 27.089 29.578"
    >
      {/*<defs>
        <style>.a{fill:#fff;}</style>
      </defs>*/}
      <g transform="translate(0)">
        <path
          className={!!hovered ? styles.activeIcon : styles.normalIcon}
          d="M41.991,12.226h-.073V10.433a10.433,10.433,0,0,0-20.866,0v1.794h-.439A2.981,2.981,0,0,0,17.757,15.3v4.576a2.892,2.892,0,0,0,2.818,2.964h2.747a.7.7,0,0,0,.662-.727q0-.021,0-.041V13.1c0-.439-.256-.879-.659-.879h-.805V10.433a8.969,8.969,0,1,1,17.937,0v1.794h-.805c-.4,0-.659.439-.659.879v8.969a.7.7,0,0,0,.618.766l.041,0h.842l-.073.11a5.784,5.784,0,0,1-4.649,2.306,3.624,3.624,0,0,0-7.175.7,3.661,3.661,0,0,0,3.661,3.624,3.77,3.77,0,0,0,2.636-1.135,3.222,3.222,0,0,0,.879-1.757,7.248,7.248,0,0,0,5.82-2.892l.7-1.025a2.492,2.492,0,0,0,2.562-2.526V15.667C44.846,14.093,43.675,12.226,41.991,12.226ZM22.516,21.378h-1.9a1.428,1.428,0,0,1-1.392-1.462c0-.013,0-.026,0-.039V15.3a1.518,1.518,0,0,1,1.391-1.611h1.9Zm11.311,6.04a2.16,2.16,0,0,1-1.574.7,2.233,2.233,0,0,1-2.2-2.16,2.16,2.16,0,1,1,4.32,0v0A1.94,1.94,0,0,1,33.827,27.418Zm9.554-7.175c0,.988-.952,1.135-1.391,1.135H40.453V13.691h1.537c.805,0,1.391,1.135,1.391,1.977Z"
          transform="translate(-17.756)"
        />
      </g>
    </svg>
  );
}