import React, { useState } from "react";
import Dish from "../../static/svg/dish.svg";
import Market from "../../static/svg/market.svg";
import Research from "../../static/svg/research.svg";
import { CSSTransition } from "react-transition-group";

import "./main_business_intro.scss";

function MainBusinessIntro() {
    const [firstInfoHovered, setFirstInfoHovered] = useState(false);
    const [secondInfoHovered, setSecondInfoHovered] = useState(false);
    const [thirdInfoHovered, setThirdInfoHovered] = useState(false);
    const nodeRefFirst = React.useRef(null);
    const nodeRefSecond = React.useRef(null);
    const nodeRefThird = React.useRef(null);
    const nodeRef4th = React.useRef(null);
    const nodeRef5th = React.useRef(null);
    const nodeRef6th = React.useRef(null);

    return (
        <div className="main-business-intro-wrapper">
            <h2 className="intro-title">ėŽėėę°</h2>
            <div className="row main-business-intro-card-list">
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setFirstInfoHovered(true)}
                        onMouseLeave={() => setFirstInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!firstInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefFirst}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefFirst}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Dish}
                                        alt="Dish icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>ėļėėŽė</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={firstInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefSecond}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefSecond}
                            >
                                <div>ėļėėŽė</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        ë§ė ėë ėŽëëĪė
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        ėēëęļ°ė ėšëĶŽėĪė―ëĨž ë§ëĪėīę°ëëĪ.
                                        <br />
                                        <br />
                                        20ėŽëę° ėļėė°ėëķėžėė
                                        <br />
                                        íëķí ęē―íęģž ëļíė°ëĨž ėė ėĻ ęļëĄëē
                                        ęļ°ė,
                                        <br />
                                        ėšëĶŽėĪė―
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setSecondInfoHovered(true)}
                        onMouseLeave={() => setSecondInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!secondInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefThird}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefThird}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Market}
                                        alt="Market icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>ę°ė ę°íļė</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={secondInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef4th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef4th}
                            >
                                <div>ę°ė ę°íļė</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        ë§ė ėë ėŽëëĪ ėšëĶŽėĪė―ë
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        ë ėĪí ëėė ëë ë§ęģž íëĶŽí°ëĨž
                                        <br />
                                        ę·ļ ë§, ę·ļëëĄ ę°ė ėėë ėĶęļļ ė ėëëĄ
                                        <br />
                                        ęģ ëŊžíęģ  ė°ęĩŽíĐëëĪ.
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setThirdInfoHovered(true)}
                        onMouseLeave={() => setThirdInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!thirdInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef5th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef5th}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Research}
                                        alt="Research icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>ęąīę°ė°ęĩŽ</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={thirdInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef6th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef6th}
                            >
                                <div>ęąīę°ė°ęĩŽ</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        2021 <br />
                                        Coming Soon
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        ë§ė ėë ėŽëëĪ ėšëĶŽėĪė―ë
                                        <br />
                                        ëŊļëëĨž íĨíėŽ ėĪëđėĪėëëĪ.
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBusinessIntro;
