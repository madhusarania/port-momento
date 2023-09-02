import React from "react";
import "./style.scss";
import Section from "../shared/section";
import Logo from "../../images/logo.png";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="JS Dev"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://meta.stackoverflow.com"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2022 JS Dev | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
