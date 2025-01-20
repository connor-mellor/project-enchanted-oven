import image1 from '../assets/cake.png'
import image2 from '../assets/cookies.png'
import image3 from '../assets/cupcakes.png'
import image4 from '../assets/cupcakes-2.png'
import image5 from '../assets/brownies.png'
import image6 from '../assets/multi.png'

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
        { name: "Cheesecake", image: image5},
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