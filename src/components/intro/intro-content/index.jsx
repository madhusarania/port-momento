import React from "react";

import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import girl from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./style.scss";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am </span>
                        </span>
                        <span className="big-text"> Madhu</span>
                    </h1>
                    <p className="title">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Madhu"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
