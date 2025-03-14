import styles from './ImageZoom.module.css'

type ImageZoomProps = {
    imageUrl: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imageUrl, imageAlt, onClose }) => {
    if(!imageUrl) return null; // consider swapping out for conditional render

    return (
        <section className={styles.image_zoom}>
            <div className={styles.image_zoom_container}>
                <div className={styles.button_container}>
                    <button 
                        onClick={onClose} 
                        aria-label="Close image zoom modal"
                    >
                        &times;
                    </button>
                </div>
                <div className={styles.image_container}>
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            </div>
        </section>
    )
}

export default ImageZoom;