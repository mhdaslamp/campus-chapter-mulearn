import Marquee from "react-fast-marquee";
import styles from "./Gallery.module.css";
import data from '../../../data.json'

const Gallery = () => {
    const marqParams = {
        autoFill: true,
        pauseOnHover: true,
    };

    return (
        <div className={styles.gallery} id="gallery">
            <h2>Memories</h2>
            <div className={styles.row}>
                <Marquee {...marqParams} style={{ width: "100vw" }}>
                    {data.gallery.row1.map((src, index) => (
                        <div key={index} className={styles.imgContainer}>
                            <img src={src.image} loading="lazy" alt={`Gallery image ${index + 1}`} />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className={styles.row}>
                <Marquee
                    direction="right"
                    {...marqParams}
                    style={{ width: "100vw" }}
                >
                    {data.gallery.row2.map((src, index) => (
                        <div key={index} className={styles.imgContainer}>
                            <img src={src.image} loading="lazy" alt={`Gallery image ${index + 1}`} />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className={styles.viewAllContainer}>
                <a 
                    href="/gallery" 
                    className={styles.viewAllButton}
                >
                    View All Gallery
                </a>
            </div>
        </div>
    );
};

export default Gallery;
