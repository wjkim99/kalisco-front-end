import React, { useEffect } from "react";
import Swiper from "swiper";
import styles from "./mobile_main_vertical_list.module.scss";
import mainImage1 from "../../../static/images/mobile/img-main-1@2x.png";
import mainImage2 from "../../../static/images/mobile/img-main-2@2x.png";
import mainImage3_1 from "../../../static/images/mobile/img-main-3-1-noround.jpg";
import mainImage3_2 from "../../../static/images/mobile/img-main-3-2-noround.jpg";
import mainImage3_3 from "../../../static/images/mobile/img-main-3-3-noround.jpg";
import mainImage4 from "../../../static/images/mobile/img-main-4@2x.png";
import mainImage5 from "../../../static/images/mobile/img-main-5@2x.png";
import mainImage6 from "../../../static/images/mobile/img-main-6@2x.png";
import mainImage7 from "../../../static/images/mobile/img-main-7@2x.png";
import { Link } from "react-router-dom";
import MobileMainCircle from "./circle/MobileMainCircle";
import SupportIcon from "./circle/svg/SupportIcon";
import NoticeIcon from "./circle/svg/NoticeIcon";
import EventIcon from "./circle/svg/EventIcon";
import RecruitIcon from "./circle/svg/RecruitIcon";
import kaliscoWhiteLogo from "../../../static/svg/mobile/logo-header-wh-m.svg";

export default function MobileMainVerticalList({ rootHeight }) {
  useEffect(() => {
    new Swiper(`.${styles.swiperContainer}`, {
      direction: "vertical",
      allowTouchMove: true,
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 650,
      loop: false,
      wrapperClass: styles.swiperWrapper,
      slideClass: styles.swiperSlide,
      /*pagination: {
        clickable: false,
        el: `.${styles.swiperPagination}`,
      },*/
    });
  }, []);

  return (
    <div
      className={styles.swiperContainer}
      style={{ height: `${rootHeight}px` }}
    >
      <div className={styles.swiperWrapper}>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <h1 className={styles.firstSlideTitle}>
                ?????? ?????? ????????? ????????????
              </h1>
              <div className={styles.firstSlideDescription}>
                ????????? ?????? ?????????.
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage1} alt="main" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.secondSlideEnglishTitle}>
                We believe that
                <br />
                Good food is a source
                <br />
                for tasty lifeness
              </div>
              <div className={styles.secondSlideKoreanTitle}>
                ?????? ????????? ???????????? ????????? ?????????
                <br />
                ?????? ?????? ???????????? ?????? ??????
              </div>
              <div className={styles.slideVerticalDivider} />
              <div className={styles.secondSlideTextList}>
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Trust</div>
                </div>
                <div className={styles.secondSlideListDot} />
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Sincerity</div>
                </div>
                <div className={styles.secondSlideListDot} />
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Connectivity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage2} alt="main 2" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.thirdSlideFlexWrapper}>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Wholesomeness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    ????????? ??????
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    ?????? ?????? ????????? ???????????????
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    ???????????? ???????????? ????????? ???????????? ????????????
                    <br />
                    ????????? ????????? ?????? ???????????? ???????????? ???????????????.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_1} alt="main 3_1" className="img-fill" />
                </div>
              </div>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Sincereness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    ????????? ??????
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    ?????? ?????? ????????? ??????
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    ?????? ????????? ????????? ????????? ?????? ????????? ????????? ?????????
                    <br />
                    ????????? ???????????? ???????????? ????????? ????????? ???????????????.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_2} alt="main 3_2" className="img-fill" />
                </div>
              </div>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Togetherness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    ????????? ??????
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    ?????? ?????? ????????????
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    ????????? ?????? ???????????? ?????? ?????????
                    <br />
                    ???????????? ???????????????.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_3} alt="main 3_3" className="img-fill" />
                </div>
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage2} alt="main 2" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Kalisco Family</div>
              <div className={styles.slideDescription}>
                ?????? ?????? ????????? ??????
                <br />
                ??????????????? ????????? ??????
              </div>
              <div className={styles.slideDivider} />
              <Link to="/supports" className={styles.slideButton}>
                ?????? ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage4} alt="main 4" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Product</div>
              <div className={styles.slideDescription}>
                ?????????????????? ?????? ??? ??? ?????????-
              </div>
              <div className={styles.slideDivider} />
              <Link to="/products/homemade" className={styles.slideButton}>
                ???????????? ?????? ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage5} alt="main 5" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Join Us</div>
              <div className={styles.slideDescription}>
                ?????? ?????? ???????????? ????????????.
              </div>
              <div className={styles.slideDivider} />
              <Link to="/hr/talent" className={styles.slideButton}>
                ?????? / ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage6} alt="main 6" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Beyond Taste</div>
              <div className={styles.slideDescription}>
                20?????? ????????? ?????? ?????????
                <br />
                ?????? ?????? ????????? ?????????
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage7} alt="main 7" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.lastSlideBackgroundWrapper}>
            <div className={styles.lastSlideCircleWrapper}>
              <MobileMainCircle
                Logo={SupportIcon}
                link="/faq"
                text={
                  <>
                    ????????????
                    <br />
                    FAQ
                  </>
                }
              />
              <MobileMainCircle
                Logo={NoticeIcon}
                link="/notices"
                text={<>Notice</>}
              />
              <MobileMainCircle
                Logo={EventIcon}
                link="/supports/events"
                text={<>?????????</>}
              />
              <MobileMainCircle
                Logo={RecruitIcon}
                link="/recruit"
                text={<>Recruit</>}
              />
            </div>
            {/*<div className={styles.lastSlideFooterWrapper}>
              <div className={styles.footerLogoWrapper}>
                <img src={kaliscoWhiteLogo} alt="kalisco white logo" />
              </div>
              <div>
                ????????? ????????? ????????? 115 2??? (???)06243
                <br />
                ????????????????????? 211-88-32153 | ???????????? ?????????
              </div>
            </div>*/}
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.lastSlideBackgroundWrapper}>
            <footer className={styles.mobileFooterBackgroundWrapper}>
              <div>
                <img src={kaliscoWhiteLogo} alt="kalisco logo" />
              </div>
              <div>
                <div>????????? ????????? ????????? 115 2??? (???)06243</div>
                <div>????????????????????? 211-88-32153 | ???????????? ?????????</div>
              </div>
              <div>
                <div className={styles.mobileFooterEmailWrapper}>
                  <div className={styles.mobileFooterEmailFlexWrapper}>
                    <div>???????????? ??? ????????????</div>
                    <div>
                      <a
                        href="mailto:chulkyun.jung@kalisco.co.kr"
                        className={styles.mobileFooterEmailLink}
                      >
                        chulkyun.jung@kalisco.co.kr
                      </a>
                    </div>
                  </div>
                  <div className={styles.mobileFooterEmailFlexWrapper}>
                    <div>Easy to cook(?????????) ???????????? ??? ????????????</div>
                    <div>
                      <a
                        href="mailto:heonchan.kim@kalisco.co.kr"
                        className={styles.mobileFooterEmailLink}
                      >
                        heonchan.kim@kalisco.co.kr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>???????????? ???????????? : 1833-4550</div>
                <div>(?????? 09:00 ~ 18:00, ????????? ??????)</div>
              </div>
              <div>COPYRIGHT ?? 2020 KALISCO. ALL RIGHTS RESERVED.</div>
            </footer>
          </div>
        </div>
      </div>
      {/*<div className={styles.swiperPagination} />*/}
    </div>
  );
}
