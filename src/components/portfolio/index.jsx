import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
import Thumb7 from "../../images/portfolio/thumb-7.jpg";
import Thumb1 from "../../images/portfolio/thumb-1.jpg";
import Thumb2 from "../../images/portfolio/thumb-2.jpg";
import Thumb3 from "../../images/portfolio/thumb-3.jpg";
import Thumb4 from "../../images/portfolio/thumb-4.jpg";
import Thumb5 from "../../images/portfolio/thumb-5.jpg";
import Thumb6 from "../../images/portfolio/thumb-6.jpg";
import Thumb8 from "../../images/portfolio/thumb-8.jpg";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: Thumb7,
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: Thumb2,
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: Thumb8,
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: Thumb1,
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: Thumb6,
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: Thumb4,
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: Thumb3,
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: Thumb5,
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
