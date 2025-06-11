import styles from './GalleryPage.module.css';
import data from '/data.json';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    // Combine all gallery images into a single array
    const allImages = [...data.gallery.row1, ...data.gallery.row2];

    return (
        <div className={styles.galleryPage}>
            <div className={styles.header}>
                <Link to="/" className={styles.backButton}>← Back to Home</Link>
                <h1>Our Gallery</h1>
            </div>
            <div className={styles.galleryGrid}>
                {allImages.map((image, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <img src={image.image} alt={`Gallery image ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage; 