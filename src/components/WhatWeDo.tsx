import image1 from '../assets/cake.png'
import image2 from '../assets/cookies.png'
import image3 from '../assets/cupcakes.png'
import image4 from '../assets/brownies.jpg'
import image5 from '../assets/rocky-road.png'
import image6 from '../assets/cheesecakes.jpg'
import image7 from '../assets/giant-cookies.jpg'

type Inventory = {
    name: string;
    image: string;
}

const WhatWeDo: React.FC = () => {

    const INVENTORY: Inventory[] = [
        { name: "Cakes", image: image1},
        { name: "Cookies", image: image2},
        { name: "Cupcakes", image: image3},
        { name: "Brownies", image: image4},
        { name: "Rocky Road", image: image5},
        { name: "Cheesecakes", image: image6},
        { name: "Giant Cookies", image: image7},
    ];

    return (
        <section className="what-we-do">
            <div className="section-title">
                <h1>What We Do</h1>
            </div>
            <div className="tile-container">
                {INVENTORY.map(({ name, image }, i) => (
                    <div className="tile" key={i}>
                        <img src={image} alt={name} loading="lazy"/>
                        <div className="tile-overlay">
                            <h3>{name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatWeDo;