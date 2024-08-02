import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamBgLineWrapper}>
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
        </div>

        <div className={styles.teamMembersDetailsWrapper}>
          <div className={`${styles.team} ${styles.team1}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.staffAdvisor.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.staffAdvisor.name}
              </div>
              <div className={styles.teamMemberDesignation}>Staff Advisor</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team2}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team3}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusCoLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusCoLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Co-Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team4}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.treasurer.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.treasurer.name}
              </div>
              <div className={styles.teamMemberDesignation}>Creative Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team5}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.technicalLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.technicalLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Technical Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team6}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.mediaLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Media Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team7}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.contentLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.contentLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Design Lead</div>
            </div>
          </div>

          <div className={`${styles.team} ${styles.team8}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.operationLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.operationLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Tech Team</div>
            </div>

            <div className={`${styles.team} ${styles.team9}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team1.image}
                  loading="lazy"
                />
              </div>

              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team1.name}
                </div>
                <div className={styles.teamMemberDesignation}>Tech Team</div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team10}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team2.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team2.name}
                </div>
                <div className={styles.teamMemberDesignation}>Media Team</div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team11}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team3.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team3.name}
                </div>
                <div className={styles.teamMemberDesignation}>Media Team</div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team12}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team4.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team4.name}
                </div>
                <div className={styles.teamMemberDesignation}>Design Team</div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team13}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team5.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team5.name}
                </div>
                <div className={styles.teamMemberDesignation}>Design Team</div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team14}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team6.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team6.name}
                </div>
                <div className={styles.teamMemberDesignation}>
                  IG Lead (Web dev)
                </div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team15}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team7.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team7.name}
                </div>
                <div className={styles.teamMemberDesignation}>
                  IG Lead (UI/UX)
                </div>
              </div>
            </div>

            <div className={`${styles.team} ${styles.team16}`}>
              <div className={styles.team1Img}>
                <img
                  className={styles.teamImageIndividual}
                  src={data.team.team8.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamNameDesignation}>
                <div className={styles.teamMemberName}>
                  {data.team.team8.name}
                </div>
                <div className={styles.teamMemberDesignation}>
                  IG Lead (IOT)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
