import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../static/svg/logo-header-or.svg";
import styles from "./nav.module.scss";
import SubNavData from "./SubNavData";
import axios from "axios";
import { url } from "../../utils/server";

function ConditionalLinkRenderer({ link, title, alternativeLink }, ref) {
  if (link && link.includes("http")) {
    return (
      <a
        href={link}
        rel="noopener noreferrer"
        className={`${styles.navLink}`}
        target="_blank"
      >
        {title}
      </a>
    );
  } else if (link) {
    return (
      <Link
        to={link}
        className={`${styles.navLink} ${
          ref.current.includes(alternativeLink ? alternativeLink : link)
            ? styles.active
            : ""
        }`}
      >
        {title}
      </Link>
    );
  } else {
    return (
      <div
        className={styles.navLink}
        onClick={() => window.alert("준비중입니다.")}
      >
        {title}
      </div>
    );
  }
}

function Nav() {
  const location = useLocation();
  const currentPathRef = useRef(location.pathname);
  const [currentHovered, setCurrentHovered] = useState("");

  function handleSignOut(e) {
    e.preventDefault();
    const authToken = window.localStorage.getItem("userAuthToken");

    axios
      .delete(`${url}/user/signout`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        const status = res.data.status;
        if (status === "OK") {
          window.localStorage.removeItem("userAuthToken");
          window.location.assign("/");
        } else {
          return Promise().reject("Not validated");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <nav className={styles.homeNav} onMouseLeave={() => setCurrentHovered("")}>
      <ul className={styles.homeNavWrapper}>
        <li>
          <Link to="/">
            <img src={logo} alt="Brand logo" />
          </Link>
        </li>
        <li className="mx-auto d-flex align-self-center">
          <div>
            <Link
              to="/about"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("about") ||
                currentHovered.includes("about")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("about")}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/brand"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("brand") ||
                currentHovered.includes("brand")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("brand")}
            >
              Brand
            </Link>
          </div>
          <div>
            <Link
              to="/products"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("products") ||
                currentHovered.includes("products")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("products")}
            >
              Product
            </Link>
          </div>
          <div>
            <Link
              to="/supports"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("supports") ||
                currentHovered.includes("supports")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("supports")}
            >
              Support
            </Link>
          </div>
          <div>
            <Link
              to="/hr"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("hr") ||
                currentHovered.includes("hr")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("hr")}
            >
              HR
            </Link>
          </div>
          <div>
            <Link
              to="/recruit"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("recruit") ? styles.active : ""
              }`}
              onMouseEnter={() => setCurrentHovered("recruit")}
            >
              Recruit
            </Link>
          </div>
        </li>
        {/* <li style={{ opacity: 0, visibility: "hidden" }}>
                    <Link to="/">
                        <img src={logo} alt="Brand logo" />
                    </Link>
                </li> */}
        <li>
          <div>
            {window.localStorage.getItem("userAuthToken") ? (
              <div
                className={styles.navLink}
                style={{ display: "inline-block" }}
                onClick={handleSignOut}
              >
                로그아웃
              </div>
            ) : (
              <Link
                to="/login"
                className={`${styles.navLink} ${
                  currentPathRef.current.includes("login") ? styles.active : ""
                }`}
                onMouseEnter={() => setCurrentHovered("contact")}
              >
                로그인
              </Link>
            )}

            <Link
              to="/contact"
              className={`${styles.navLink} ${
                currentPathRef.current.includes("contact") ||
                currentPathRef.current.includes("mail") ||
                currentPathRef.current.includes("notices") ||
                currentPathRef.current.includes("faq")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setCurrentHovered("contact")}
            >
              고객소통
            </Link>
          </div>
        </li>
      </ul>
      {SubNavData[currentHovered] && (
        <ul className={styles.homeNavWrapper}>
          <li className="mx-auto d-flex align-self-center">
            {SubNavData[currentHovered].map((d, i) => {
              return (
                <div key={i}>{ConditionalLinkRenderer(d, currentPathRef)}</div>
              );
            })}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
