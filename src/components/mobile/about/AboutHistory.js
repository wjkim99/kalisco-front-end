import React, { useEffect } from "react";
import styles from "./mobile_about.module.scss";
import history1 from "../../../static/images/history_img_01.png";
import history2 from "../../../static/images/history_img_02.png";
import history3 from "../../../static/images/history_img_03.png";
import history4 from "../../../static/images/history_img_04.png";
import history5 from "../../../static/images/history_img_05.png";
import history6 from "../../../static/images/history_img_06.png";
import history7 from "../../../static/images/history_img_07.png";
import history8 from "../../../static/images/history_img_08.png";
import history9 from "../../../static/images/history_img_09.png";
import historyLogo from "../../../static/images/History.png";
import historyLogo1 from "../../../static/svg/history_logo_01.svg";
import historyLogo2 from "../../../static/svg/history_logo_02.svg";
import historyLogo3 from "../../../static/images/history_logo_03.png";
import historyLogo4 from "../../../static/images/history_logo_04.png";
import historyLogo5 from "../../../static/svg/history_logo_05.svg";
import historyLogo6 from "../../../static/images/history_logo_06.png";
import historyLogo7 from "../../../static/svg/history_logo_07.svg";
import historyLogo8 from "../../../static/svg/history_logo_08.svg";
import historyLogo9 from "../../../static/svg/history_logo_09.svg";
import historyLogo10 from "../../../static/svg/history_logo_10.svg";
import historyLogo11 from "../../../static/images/history_logo_11.png";

export default function AboutHistory() {
    document.documentElement.style.setProperty("--animate-duration", "2s");

    useEffect(() => {
      const PointList = document.querySelectorAll(`.${styles.aboutHistoryPoint}`);
      const observer = new IntersectionObserver((entry) => {
        entry.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.style.borderColor = "#e8390e";
            }, 300);
          } else {
            setTimeout(() => {
              e.target.style.borderColor = "#dddddd";
            }, 300);
          }
        });
      });
      PointList.forEach((e) => observer.observe(e));
    }, []);

    return (
        <>
            <section className={styles.aboutHistorySection}>
                <div className={styles.aboutHistoryWrapper}>
                    <div className={styles.aboutHistoryTitle}>History</div>
                    <div className={styles.aboutHistoryTimeLine}>
                        <ul className={styles.aboutHistoryList}>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history1} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo1} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ?????? ????????? ????????? <br />
                                        ??????????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2001</div>
                                    <div className={styles.aboutHistoryDescSub}>????????? 1?????? ????????? ??????</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2001</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDateRight}>2009</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history2} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo2} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ??????????????? ?????? ?????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2009</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history3} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo3} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ?????? ?????? ????????????<br /> 
                                        ???????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2012</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2012</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDateRight}>2014</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo4} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ?????? ???????????? ???????????? ??????????????? ????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2014</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history4} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo5} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ????????? ????????? ?????? ????????? ??????????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2014</div>
                                    <div className={styles.aboutHistoryDescSub}>????????? 1?????? ???????????????????????? ??????</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2014</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                            <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo6} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        Modern Korean dining ????????? ???????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2014</div>
                                    <div className={styles.aboutHistoryDescSub}>?????? ???????????? T1??? ??????</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2014</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                            <div className={styles.aboutHistoryDateRight}>2016</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history5} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo7} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        Katsu&Rounge ??????????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2016</div>
                                    <div className={styles.aboutHistoryDescSub}>????????? 1?????? ?????????????????? ??????</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                            <div className={styles.aboutHistoryDateRight}>2016</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo8} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ????????? ????????? ?????????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2016</div>
                                    <div className={styles.aboutHistoryDescSub}>
                                        Modern & Contemporary ?????? ????????????<br />
                                        ????????? ???????????? ??????????????? ?????????
                                    </div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history6} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                    ????????? Easy to cook(?????????) ?????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2018</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2018</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                            <div className={styles.aboutHistoryDateRight}>2018</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history7} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ????????? ?????? ???????????????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2018</div>
                                    <div className={styles.aboutHistoryDescSub}>????????????????????? ??????</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                            <div className={styles.aboutHistoryDateRight}>2019</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        HMR ?????? ????????? ?????? ?????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2019</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history8} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo9} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                    ??????????????? ????????? 20??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2020</div>
                                </div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDate}>2020</div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDateRight}>2020</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={history9} alt="img"/>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo10} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                        ?????? ?????? ????????? ??????????????? ??????<br />
                                        ????????? Dinning Cafe ??? ????????? ??????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2020</div>
                                    <div className={styles.aboutHistoryDescSub}>??? ??????????????? ?????? ???????????? 1?????? ?????????????????? ??????</div>
                                </div>
                            </li>
                            <li className={styles.aboutHistoryListItem}>
                                <div className={styles.aboutHistoryDateRight}>2020</div>
                                <div className={styles.aboutHistoryPoint} />
                                <div className={styles.aboutHistoryDesc}>
                                    <img className={styles.aboutHistoryDescImg} src={historyLogo11} alt="img"/>
                                    <div className={styles.aboutHistoryDescTitle}>
                                    ?????????????????? ????????? ?????? ??? ?????? ?????? ?????????
                                    </div>
                                    <div className={styles.aboutHistoryDescYear}>2020</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}