import styles from "./About.module.css";
import data from "/data.json";
import { useState } from "react";

const About = () => {
    const [showExtra, setShowExtra] = useState(false);
    const extraText = " Our community is built on the principles of collaboration, innovation, and continuous learning.";

    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About Us</h1>
            <p>
                {data.about}
                {showExtra && extraText}
                {" "}
                <button 
                    onClick={() => setShowExtra(!showExtra)} 
                    className={styles.readMoreLink}
                >
                    {showExtra ? "Show Less" : "Read More"}
                </button>
            </p>
        </div>
    );
};

export default About;
