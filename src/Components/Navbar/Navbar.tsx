import styles from './Navbar.module.css';
import { useEffect, useState, useCallback } from "react";
import { ULearn } from "../../assets/svg/svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import data from "/data.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navContent = ["Home", "About", "Events", "Achievements", "Gallery", "Team", "Contact"];

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    const sections = navContent.map(section => ({
      id: section.toLowerCase(),
      element: document.getElementById(section.toLowerCase())
    }));

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element && section.element.offsetTop <= scrollPosition) {
        setActiveSection(section.id);
        break;
      }
    }
  }, [navContent]);

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update active section based on current path
  useEffect(() => {
    if (location.pathname === "/all-events") {
      setActiveSection("events");
    } else if (location.pathname === "/gallery") {
      setActiveSection("gallery");
    } else {
      window.addEventListener("scroll", updateActiveSection);
      return () => window.removeEventListener("scroll", updateActiveSection);
    }
  }, [location.pathname, updateActiveSection]);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  const handleNavClick = (content: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = content.toLowerCase();
    
    if (location.pathname === "/all-events" && content === "Events") {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else if (location.pathname === "/gallery" && content === "Gallery") {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? "rgba(255,255,255,0.4)" : "transparent",
      }}
    >
      <div className={styles.navbarLeft}>
        <a href="/" onClick={handleLogoClick}>
          <ULearn />
          <p>{data.collegeCode}</p>
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((content, i) => (
            <a 
              href={`#${content.toLowerCase()}`} 
              key={i.toString() + content}
              onClick={(e) => handleNavClick(content, e)}
              className={styles.navLink}
              style={{
                color: activeSection === content.toLowerCase() ? "#ae59ff" : "inherit",
                fontWeight: activeSection === content.toLowerCase() ? "600" : "400"
              }}
            >
              {content}
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
                href={`#${content.toLowerCase()}`} 
                key={i.toString() + content}
                onClick={(e) => handleNavClick(content, e)}
                className={styles.mobileNavLink}
                style={{
                  color: activeSection === content.toLowerCase() ? "#ae59ff" : "white",
                  fontWeight: activeSection === content.toLowerCase() ? "600" : "400"
                }}
              >
                {content}
              </a>
            ))}
            <button>
              <a href="http://app.mulearn.org/register">Join µlearn</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
