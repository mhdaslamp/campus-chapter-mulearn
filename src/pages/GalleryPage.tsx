import { useState } from 'react';
import styles from './GalleryPage.module.css';
import data from '/data.json';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const allImages = [...data.gallery.row1, ...data.gallery.row2];

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className={styles.galleryPage}>
            <div className={styles.header}>
                <h1>Our Gallery</h1>
            </div>

            <div className={styles.galleryGrid}>
                {allImages.map((image, index) => (
                    <div 
                        key={index} 
                        className={styles.galleryItem}
                        onClick={() => handleImageClick(image.image)}
                    >
                        <img 
                            src={image.image} 
                            alt={`Gallery image ${index + 1}`} 
                            loading="lazy" 
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.imagePopup} onClick={handleClosePopup}>
                    <div className={styles.popupContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleClosePopup}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={selectedImage} alt="Gallery popup" />
                    </div>
                </div>
            )}

            <div className={styles.backButtonContainer}>
                <Link to="/" className={styles.backButton}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default GalleryPage; 