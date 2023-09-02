import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
    console.log(data);

    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div
                    key={project.name}
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <img
                        src={project.media.thumbnail}
                        alt={project.name}
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
