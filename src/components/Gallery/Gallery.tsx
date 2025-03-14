import images from "../../data/GalleryImages";
import styles from './Gallery.module.css'

const Gallery: React.FC = () => {
    return (
        <section className={styles.gallery}>
            <div className={styles.gallery_container}>
                {images.map((src, i) => (
                    <div className={styles.image_container} key={i}>
                        <img src={src} alt={`Position-${i+1}`} loading="lazy"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;