import { useEffect } from 'react';
import styles from './ImageZoom.module.css'

type ImageZoomProps = {
    imageUrl: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imageUrl, imageAlt, onClose }) => {
    useEffect(() => {
        toggleBodyScroll(!!imageUrl);
        return () => toggleBodyScroll(false);
    }, [imageUrl]);

    const toggleBodyScroll = (shouldLock: boolean): void => {
        document.body.style.overflow = shouldLock ? 'hidden' : '';
    }
    
    if(!imageUrl) return null; // consider swapping out for conditional render

    return (
        <section className={styles.image_zoom}>
            <button onClick={onClose} aria-label="close image zoom modal">
                <img src='icons/close.svg' alt="close image zoom modal" loading="lazy"/>
            </button>
            <div className={styles.image_zoom_container}>
                <img src={imageUrl} alt={imageAlt} loading="lazy" />
            </div>
        </section>
    )
}

export default ImageZoom;