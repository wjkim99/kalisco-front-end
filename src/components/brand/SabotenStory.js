import React from "react";
import styles from "./saboten.module.scss";
import story1 from "../../static/images/img-p-saboten-story1.png";
import sabotenLogo from "../../static/svg/logo-saboten-story.svg";
import gif1 from "../../static/images/gif-p-saboten-story1.gif";
import gif2 from "../../static/images/gif-p-saboten-story2.gif";
import gif3 from "../../static/images/gif-p-saboten-story3.gif";
import gif4 from "../../static/images/gif-p-saboten-story4.gif";
import lastImage from "../../static/images/img-p-saboten-story-last.png";
import image1 from "../../static/images/img-p-saboten-story-yuja.png";
import image2 from "../../static/images/img-p-saboten-story-breadcrumbs.png";
import image3 from "../../static/images/img-p-saboten-story-pork.png";
import image4 from "../../static/images/img-p-saboten-story-sauce.png";
import image5 from "../../static/images/img-p-saboten-story-handmade.png";

function SabotenStory() {
    return (
        <>
            <section className={styles.storyFirstSection}>
                <div className={styles.firstStoryWrapper}>
                    <div className={styles.firstStoryTextWrapper}>
                        <div>
                            <div className={styles.sabotenStoryFirstTitle}>
                                Saboten
                            </div>
                            <div className={styles.sabotenStoryFirstSubTitle}>
                                Since 1966
                            </div>
                        </div>
                        <div
                            className={styles.storyHr}
                            style={{ height: "156px" }}
                        />
                        <div className={styles.storyDescription}>
                            1966년 처음 문을 연 정통 돈카츠 전문점 사보텐은
                            <br />
                            오랜 시간 동안 오로지 맛있고 건강한 돈카츠를
                            <br />
                            고객에게 정성껏 대접하는 일에만 매달렸습니다.
                        </div>
                    </div>
                    <div>
                        <img src={story1} alt="story 1" className="img-fluid" />
                    </div>
                </div>
                <div className={styles.secondStoryWrapper}>
                    <div className="text-center">
                        <img src={sabotenLogo} alt="saboten logo" />
                    </div>
                    <div
                        className={`${styles.secondDescriptionWrapper} ${styles.storyDescription}`}
                    >
                        사보텐은 스페인어로{" "}
                        <span style={{ fontSize: "28px" }}>‘선인장’</span>을
                        의미 합니다.
                        <br />
                        <br />
                        신주쿠 돈카츠 전문점 사보텐은
                        <br />
                        선인장과 같은 영원한 생명력을 염원으로 탄생한 브랜드
                        입니다.
                    </div>
                    <div
                        className={`${styles.storyHr} ${styles.storySecondHr}`}
                        style={{ height: "198px" }}
                    />
                    <div className={styles.gifListWrapper}>
                        <div style={{ paddingRight: "20px" }}>
                            <img
                                src={gif1}
                                alt="gif 1"
                                className={styles.sabotenKatsuImages}
                            />
                        </div>
                        <div>
                            <img
                                src={gif2}
                                alt="gif 2"
                                className={styles.sabotenKatsuImages}
                            />
                        </div>
                        <div
                            className={`${styles.storyDescription} ${styles.sabotenKatsuDescriptionWrapper}`}
                        >
                            50년 넘게 지켜온 사보텐 고유의 정통 돈카츠 레시피를
                            <br />
                            끊임없는 연구를 통해
                            <br />
                            우리의 입맛에 맞게 개선하였습니다.
                        </div>
                    </div>
                    <div className={styles.redBoxWrapper}>
                        <div
                            className={`${styles.redBox} ${styles.storyDescription}`}
                        >
                            1966년 동경 신주쿠점을 최초로 오픈한 이래
                            <br />
                            끊임없는 연구로 개발한&nbsp;
                            <b>숙성 돈육, 생빵가루, 순식물성 기름,특제소스</b>로
                            <br />
                            일본의 정통 돈카츠 맛을 완성했습니다.
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div>
                            <img
                                src={image1}
                                alt="yuja"
                                className="img-fluid"
                            />
                        </div>
                        <div
                            className={styles.storyFlexRightDescriptionWrapper}
                        >
                            <div className={styles.storyFlexDescriptionTitle}>
                                전남고흥 유자샐러드 소스
                            </div>
                            <div className={styles.storyFlexDescription}>
                                전라남도 고흥의 엄선된 유자 본연의 향과 맛을
                                <br />
                                느낄 수 있는 샐러드 드레싱
                            </div>
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div className={styles.storyFlexLeftDescriptionWrapper}>
                            <div className={styles.storyFlexDescriptionTitle}>
                                50년 전통비법 생 빵가루
                            </div>
                            <div className={styles.storyFlexDescription}>
                                50년 전통비법 레시피로 만든,
                                <br />
                                부드럽고 바삭한 사보텐만의 차별화된 생빵가루
                            </div>
                        </div>
                        <div className={styles.storyRightImageWrapper}>
                            <img
                                src={image2}
                                alt="breadcrumb"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div>
                            <img src={gif3} alt="fry" className="img-fluid" />
                        </div>
                        <div
                            className={styles.storyFlexRightDescriptionWrapper}
                        >
                            <div className={styles.storyFlexDescription}>
                                신선하고 바삭한 튀김의 식감을 위해 자체 제작하는
                                <br />
                                1.1cm 길이의 생빵가루는 오직 사보텐만의
                                비법입니다.
                            </div>
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div className={styles.storyFlexLeftDescriptionWrapper}>
                            <div className={styles.storyFlexDescriptionTitle}>
                                트랜스지방 0% 튀김유
                            </div>
                            <div className={styles.storyFlexDescription}>
                                트랜스 지방 0%!
                                <br />
                                매일 신선한 기름을 사용하여 고소하며
                                <br />
                                느끼하지 않은 국내최초 돈카츠 전용 튀김유
                            </div>
                        </div>
                        <div className={styles.storyRightImageWrapper}>
                            <img src={gif4} alt="oil" className="img-fluid" />
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div>
                            <img
                                src={image3}
                                alt="pork"
                                className="img-fluid"
                            />
                        </div>
                        <div
                            className={styles.storyFlexRightDescriptionWrapper}
                        >
                            <div className={styles.storyFlexDescriptionTitle}>
                                192시간 숙성 프리미엄 돈육
                            </div>
                            <div className={styles.storyFlexDescription}>
                                엄선된 1등급 돈육만을 192시간 숙성 기술로 완성한
                                <br />
                                부드러운 숙성 돈육
                            </div>
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div className={styles.storyFlexLeftDescriptionWrapper}>
                            <div className={styles.storyFlexDescriptionTitle}>
                                5과1주 돈카츠 소스
                            </div>
                            <div className={styles.storyFlexDescription}>
                                5가지 과일 고유의 단맛과 레드와인의 풍미로
                                <br />
                                돈카츠의 맛을 풍부하게 만들어 주는
                                <br />
                                특제 돈카츠 소스
                            </div>
                        </div>
                        <div className={styles.storyRightImageWrapper}>
                            <img
                                src={image4}
                                alt="sauce"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className={styles.storyFlexListWrapper}>
                        <div>
                            <img
                                src={image5}
                                alt="homemade"
                                className="img-fluid"
                            />
                        </div>
                        <div
                            className={styles.storyFlexRightDescriptionWrapper}
                        >
                            <div className={styles.storyFlexDescriptionTitle}>
                                일본 정통의 수제 방식
                            </div>
                            <div className={styles.storyFlexDescription}>
                                일본식 돈카츠 본연의 맛을 느낄 수 있는
                                <br />
                                일본 장인의 돈육 수제 두드림 방식 테테타타쿠
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.storySecondSection}>
                <div className={styles.storySecondBackgroundWrapper}>
                    <div className="text-center">
                        음식에 대한 신뢰는 시간의 축적으로 만들어집니다.
                        <br />
                        오랜 시간 많은 사람들의 한끼 식사를 책임져온
                        <br />
                        대한민국 대표 돈카츠 전문점 사보텐은
                        <br />
                        장인정신을 바탕으로 최고의 카츠 요리에 대한 변함 없는
                        기준을 제시합니다.
                    </div>
                </div>
                <div>
                    <img src={lastImage} alt="man" className="img-fill" />
                </div>
            </section>
        </>
    );
}

export default SabotenStory;