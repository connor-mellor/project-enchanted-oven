type Inventory = {
    name: string;
}

const WhatWeDo: React.FC = () => {
    const INVENTORY: Inventory[] = [
        { name: "Cakes"},
        { name: "Cookies"},
        { name: "Cupcakes"},
        { name: "Brownies"},
        { name: "Cheesecake"},
    ];

    return (
        <section className="what-we-do">
            {INVENTORY.map(({ name }, i) => (
                <div className="tile" key={i}>{name}</div>
            ))}
        </section >
    )
}

export default WhatWeDo;