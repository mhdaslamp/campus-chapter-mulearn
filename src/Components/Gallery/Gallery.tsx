import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import data from '/data.json';

const Gallery = () => {
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

        // Add scroll event listeners to all containers
        scrollRefs.current.forEach((container, index) => {
            if (container) {
                container.addEventListener('scroll', () => handleScroll(index));
            }
        });

        // Cleanup
        return () => {
            scrollRefs.current.forEach((container, index) => {
                if (container) {
                    container.removeEventListener('scroll', () => handleScroll(index));
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

    const renderImages = (images: { image: string }[], rowIndex: number) => {
        // Create three sets of images for smoother infinite scroll
        const triplicatedImages = [...images, ...images, ...images];
        
        return (
            <>
                {triplicatedImages.map((item, imgIndex) => (
                    <div key={`row${rowIndex}-${imgIndex}`} className={styles.imgContainer}>
                        <img 
                            src={item.image} 
                            loading="lazy" 
                            alt={`Gallery image ${(imgIndex % images.length) + 1}`} 
                        />
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className={styles.gallery} id="gallery">
            <h2>Memories</h2>
            <div className={styles.row}>
                <button 
                    className={`${styles.scrollIndicator} ${styles.scrollLeft}`}
                    onClick={() => scroll('left', 0)}
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <div 
                    ref={el => scrollRefs.current[0] = el}
                    className={styles.scrollableContainer}
                >
                    <div 
                        ref={el => contentRefs.current[0] = el}
                        className={styles.scrollableContent}
                    >
                        {renderImages(data.gallery.row1, 0)}
                    </div>
                </div>

                <button 
                    className={`${styles.scrollIndicator} ${styles.scrollRight}`}
                    onClick={() => scroll('right', 0)}
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            <div className={styles.row}>
                <button 
                    className={`${styles.scrollIndicator} ${styles.scrollLeft}`}
                    onClick={() => scroll('left', 1)}
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <div 
                    ref={el => scrollRefs.current[1] = el}
                    className={styles.scrollableContainer}
                >
                    <div 
                        ref={el => contentRefs.current[1] = el}
                        className={styles.scrollableContent}
                    >
                        {renderImages(data.gallery.row2, 1)}
                    </div>
                </div>

                <button 
                    className={`${styles.scrollIndicator} ${styles.scrollRight}`}
                    onClick={() => scroll('right', 1)}
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            <div className={styles.viewAllContainer}>
                <Link 
                    to="/gallery" 
                    className={styles.viewAllButton}
                >
                    View All Gallery
                </Link>
            </div>
        </div>
    );
};

export default Gallery;
