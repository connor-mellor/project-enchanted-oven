import images from "../data/GalleryImages";

const Gallery: React.FC = () => {
    return (
        <section className="gallery">
            <div className="gallery-container">
                {images.map(({name, src}, i) => (
                    <div className="image-container" key={i}>
                        <img src={src} alt={name} loading="lazy"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;