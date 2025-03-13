type ImageZoomProps = {
    imageUrl: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imageUrl, imageAlt, onClose }) => {
    if(!imageUrl) return null; // consider swapping out for conditional render

    return (
        <section className="image-zoom">
            <div className="image-zoom-container">
                <div className="button-container">
                    <button 
                        onClick={onClose} 
                        aria-label="Close image zoom modal"
                    >
                        &times;
                    </button>
                </div>
                <div className="image-zoom-container">
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            </div>
        </section>
    )
}

export default ImageZoom;