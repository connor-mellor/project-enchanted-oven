import image1 from '../assets/cake.png'
import image2 from '../assets/cookies.png'
import image3 from '../assets/cupcakes.png'
import image4 from '../assets/cupcakes-2.png'
import image5 from '../assets/brownies.png'
import image6 from '../assets/multi.png'

type Images = {
    [key: string]: string;
}

type Inventory = {
    name: string;
    image: string;
}

const WhatWeDo: React.FC = () => {
    const IMAGES: Images = { image1, image2, image3, image4, image5, image6 };

    const INVENTORY: Inventory[] = [
        { name: "Cakes", image: IMAGES.image1},
        { name: "Cookies", image: IMAGES.image2},
        { name: "Cupcakes", image: IMAGES.image3},
        { name: "Brownies", image: IMAGES.image4},
        { name: "Cheesecake", image: IMAGES.image5},
    ];

    return (
        <section className="what-we-do">
            {INVENTORY.map(({ name, image }, i) => (
                <div className="tile" key={i}>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </div>
            ))}
        </section>
    )
}

export default WhatWeDo;