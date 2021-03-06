import React, { useEffect, useRef } from "react";
import styles from "./login.module.scss";
import loginIcon from "../../static/svg/icon-loginman.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../utils/server";

export default function Login() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const dataObject = {};
    formData.forEach((d, k) => (dataObject[k] = d));
    const jsonString = JSON.stringify(dataObject);
    axios
      .post(`${url}/user/signin`, jsonString, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        const accessToken = data.accessToken;
        localStorage.setItem("userAuthToken", accessToken);
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "로그인에 실패했습니다! 아이디 또는 비밀번호를 확인해주세요"
        );
      });
  }

  useEffect(() => {
    const authToken = localStorage.getItem("userAuthToken");
    if (authToken) {
      axios
        .post(
          `${url}/user/valid`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((res) => {
          const status = res.data.status;
          if (status === "OK") {
            window.location.assign("/");
          } else {
            return Promise().reject("Not validated");
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginPanel}>
          <div className={styles.loginIconWrapper}>
            <div className={styles.loginIcon}>
              <img src={loginIcon} alt="login icon" />
            </div>
          </div>
          <div className={styles.loginTitle}>로그인</div>
          <div className={styles.loginFormWrapper}>
            <div className={styles.loginFormPanel}>
              <div>
                <label htmlFor="email" className={styles.loginInputLabel}>
                  아이디
                </label>
              </div>
              <div className={styles.loginInputWrapper}>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className={styles.loginInput}
                  placeholder="아이디 입력"
                />
              </div>
              {/*<small className={styles.loginValidationText}>
                아이디를 입력해주세요.
              </small>*/}
            </div>
            <div className={styles.loginFormPanel}>
              <div>
                <label htmlFor="password" className={styles.loginInputLabel}>
                  비밀번호
                </label>
              </div>
              <div className={styles.loginInputWrapper}>
                <input
                  type="password"
                  name="password"
                  className={styles.loginInput}
                  placeholder="비밀번호 입력"
                  id="password"
                />
              </div>
              {/*<small className={styles.loginValidationText}>
                아이디를 입력해주세요.
              </small>*/}
            </div>
            <div className={styles.loginButtonWrapper}>
              <button type="submit" className={styles.loginButton}>
                로그인
              </button>
            </div>
          </div>
          <div className={styles.otherLinkWrapper}>
            <div className={styles.otherLink}>아이디 찾기</div>
            <div className={styles.otherLink}>비밀번호 찾기</div>
            <div className={styles.otherLink}>
              <Link to="/agreement" className={styles.otherLink}>
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
