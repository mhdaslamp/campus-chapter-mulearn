import styles from "./About.module.css";
import data from "../../../data.json";

const About = () => {
    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About Us</h1>
            <p>
                {data.about}
                {" "}
                <a href="/about" className={styles.readMoreLink}>
                    Read More
                </a>
            </p>
        </div>
    );
};

export default About;
