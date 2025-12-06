import styles from "./Team.module.css";
import data from "../../../../data.json";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const filteredTeam = Object.entries(data.team).filter(
    ([_, member]) => (member as any).year === activeYear
  );

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>

      <div className={styles.toggleContainer}>

        <button
          className={`${styles.toggleButton} ${activeYear === 2025 ? styles.active : ''}`}
          onClick={() => setActiveYear(2025)}
        >
          2025
        </button>
        <button
          className={`${styles.toggleButton} ${activeYear === 2024 ? styles.active : ''}`}
          onClick={() => setActiveYear(2024)}
        >
          2024
        </button>

      </div>

      <div className={styles.teamBodyWrapper}>
        {/* Remove or comment out the line-related section */}
        {/* <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div> */}
        <div className={styles.teamMembersDetailsWrapper}>
          {filteredTeam.map(([key, member], index) => (
            <div key={index} className={styles.team}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={(member as any).image}
                  alt={(member as any).name}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>{(member as any).name}</div>
                <div className={styles.teamMemberDesignation}>
                  {key.includes("null")
                    ? "Team Member"
                    : key.replace("_2024", "").replace(/([A-Z])/g, " $1").trim()}
                </div>
                {(member as any).linkedin && (
                  <a href={(member as any).linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
