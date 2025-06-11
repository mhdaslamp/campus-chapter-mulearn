import styles from './Navbar.module.css';
import { useEffect, useState } from "react";
import { ULearn } from "../../assets/svg/svg";
import { AiOutlineMenu } from "react-icons/ai";
import data from "/data.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navContent = ["home", "about", "events", "gallery", "team", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
      
      // Find current section in view
      const sections = navContent.map(section => document.getElementById(section));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navContent[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navContent]);

  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? "rgba(255,255,255,0.4)" : "transparent",
      }}
    >
      <div className={styles.navbarLeft}>
        <a href="#home">
          <ULearn />
          <p>{data.collegeCode}</p>
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((content, i) => (
            <a 
              href={`#${content}`} 
              key={i.toString() + content}
              style={{
                display: "inline-block",
                padding: "0 4px",
                marginBottom: "4px"
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "22px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: activeSection === content ? "#ae59ff" : "inherit",
                    transition: "all 0.3s ease",
                    margin: 0
                  }}
                >
                  {content}
                </p>
                {activeSection === content && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#ae59ff",
                      borderRadius: "2px"
                    }}
                  />
                )}
              </div>
            </a>
          ))}
        </div>
        <button>
          <a target="_blank" href="http://app.mulearn.org/register">
            Join µlearn
          </a>
        </button>
      </div>

      <div className={styles.navbarMobile}>
        <button onClick={openMenu} className={styles.hamburger}>
          <AiOutlineMenu />
        </button>
        {isMenuOpen && (
          <div>
            {navContent.map((content, i) => (
              <a 
                href={`#${content}`} 
                key={i.toString() + content}
                style={{
                  display: "block",
                  padding: "8px 4px",
                  marginBottom: "4px"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "22px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      color: activeSection === content ? "#ae59ff" : "inherit",
                      transition: "all 0.3s ease",
                      margin: 0
                    }}
                  >
                    {content}
                  </p>
                  {activeSection === content && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundColor: "#ae59ff",
                        borderRadius: "2px"
                      }}
                    />
                  )}
                </div>
              </a>
            ))}
            <button>
              <a href="http://app.mulearn.org">Join µlearn</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
