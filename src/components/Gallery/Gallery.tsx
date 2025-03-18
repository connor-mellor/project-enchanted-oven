import images from "../../data/GalleryImages";
import styles from './Gallery.module.css'
import ImageZoom from "../ImageZoom/ImageZoom";
import { useState } from "react";

const Gallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageData, setImageData] = useState({ imageUrl: "", imageAlt: "" });
    const setClose = () => setIsOpen(false);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>, src: string, i: number) => {        
        setImageData({ imageUrl: src, imageAlt: `Position-${i}` })
        setIsOpen(true)
    }

    return (
        <section className={styles.gallery}>
            <div className={styles.gallery_container}>
                {images.map((src, i) => (
                    <div className={styles.image_container} key={i} onClick={(e) => handleClick(e, src, i)}>
                        <img src={src} alt={`position-${i+1}`} loading="lazy"/>
                        <div className={styles.zoom_icon}></div>
                    </div>
                ))}
            </div>
            {isOpen && <ImageZoom imageUrl={imageData.imageUrl} imageAlt={imageData.imageAlt} onClose={setClose} />}
        </section>
    )
}

export default Gallery;