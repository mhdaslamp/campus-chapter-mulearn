import React, { useRef, useEffect } from "react";
import styles from "./Achievements.module.css";
import data from "../../../data.json";

export interface AchievementDetails {
  title: string;
  description: string;
  images: string[];
}

const Achievements: React.FC = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = (index: number) => {
      const container = scrollRefs.current[index];
      const content = contentRefs.current[index];
      
      if (container && content) {
        // When we've scrolled past the first set of images
        if (container.scrollLeft >= content.offsetWidth / 2) {
          // Reset to the beginning without animation
          container.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        }
      }
    };

    // Create an array of bound event handlers
    const scrollHandlers = scrollRefs.current.map((_, index) => 
      () => handleScroll(index)
    );

    // Add scroll event listeners to all containers
    scrollRefs.current.forEach((container, index) => {
      if (container) {
        container.addEventListener('scroll', scrollHandlers[index]);
      }
    });

    // Cleanup
    return () => {
      scrollRefs.current.forEach((container, index) => {
        if (container) {
          container.removeEventListener('scroll', scrollHandlers[index]);
        }
      });
    };
  }, []);

  const scroll = (direction: 'left' | 'right', index: number) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const renderImages = (images: string[], achievementTitle: string) => {
    // Only duplicate images once instead of three times
    const duplicatedImages = [...images, ...images];
    
    return (
      <>
        {duplicatedImages.map((src, imgIndex) => {
          const originalIndex = imgIndex % images.length;
          return (
            <div key={`${achievementTitle}-${imgIndex}`} className={styles.imgContainer}>
              <img
                src={src}
                alt={`${achievementTitle} achievement - Image ${originalIndex + 1} of ${images.length}`}
                loading="lazy"
                width="450"
                height="350"
                style={{ aspectRatio: '9/7' }}
              />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.achievements} id="achievements">
      {data.achievements.length > 0 && (
        <>
          <h2>Our Achievements</h2>

          <div className={styles.achievementsContainer}>
            {data.achievements.map(
              (achievement: AchievementDetails, index: number) => (
                <div key={index} className={styles.achievementCard}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.achievementTitle}>
                      {achievement.title}
                    </h3>
                    <p className={styles.achievementDescription}>
                      {achievement.description}
                    </p>
                  </div>

                  <div className={styles.imageGallery}>
                    <button 
                      className={`${styles.scrollIndicator} ${styles.scrollLeft}`}
                      onClick={() => scroll('left', index)}
                      aria-label="Scroll left"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>

                    <div 
                      ref={el => scrollRefs.current[index] = el}
                      className={styles.scrollableContainer}
                    >
                      <div 
                        ref={el => contentRefs.current[index] = el}
                        className={styles.scrollableContent}
                      >
                        {renderImages(achievement.images, achievement.title)}
                      </div>
                    </div>

                    <button 
                      className={`${styles.scrollIndicator} ${styles.scrollRight}`}
                      onClick={() => scroll('right', index)}
                      aria-label="Scroll right"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Achievements;
