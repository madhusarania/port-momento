import React from "react";

import Intro from "./components/intro";
import Skills from "./components/skills";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "./app.scss";
import Portfolio from "./components/portfolio";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
