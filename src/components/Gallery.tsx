import image1 from '../assets/gallery/position-1.jpg';
import image2 from '../assets/gallery/position-2.jpg';
import image3 from '../assets/gallery/position-3.jpg';
import image4 from '../assets/gallery/position-4.jpg';
import image5 from '../assets/gallery/position-5.jpg';
import image6 from '../assets/gallery/position-6.jpg';
import image7 from '../assets/gallery/position-7.jpg';
import image8 from '../assets/gallery/position-8.jpg';
import image9 from '../assets/gallery/position-9.jpg';
import image10 from '../assets/gallery/position-10.jpg';
import image11 from '../assets/gallery/position-11.jpg';
import image12 from '../assets/gallery/position-12.jpg';
import image13 from '../assets/gallery/position-13.png';
import image14 from '../assets/gallery/position-14.png';
import image15 from '../assets/gallery/position-15.jpg';

type Images = {
    name: string,
    src: string
}

const Gallery: React.FC = () => {
    const IMAGES: Images[] = [
        { name: "Position 1", src: image1 },
        { name: "Position 2", src: image2 },
        { name: "Position 3", src: image3 },
        { name: "Position 4", src: image4 },
        { name: "Position 5", src: image5 },
        { name: "Position 6", src: image6 },
        { name: "Position 7", src: image7 },
        { name: "Position 8", src: image8 },
        { name: "Position 9", src: image9 },
        { name: "Position 10", src: image10 },
        { name: "Position 11", src: image11 },
        { name: "Position 12", src: image12 },
        { name: "Position 13", src: image13 },
        { name: "Position 14", src: image14 },
        { name: "Position 15", src: image15 },
      ];

    return (
        <section className="gallery">
            <div className="gallery-container">
                {IMAGES.map(({name, src}, i) => (
                    <div className="image-container" key={i}>
                        <img src={src} alt={name} loading="lazy"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;