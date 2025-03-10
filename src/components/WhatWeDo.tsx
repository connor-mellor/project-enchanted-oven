type Inventory = { name: string; }

const WhatWeDo: React.FC = () => {

    const INVENTORY: Inventory[] = [
        { name: "Cakes"},
        { name: "Cookies"},
        { name: "Cupcakes"},
        { name: "Brownies"},
        { name: "Rocky Road"},
        { name: "Cheesecakes"},
        { name: "Giant Cookies"},
    ];

    return (
        <section className="what-we-do">
            <div className="section-title">
                <h1>What We Do</h1>
            </div>
            <div className="tile-container">
                {INVENTORY.map(({ name }, i) => (
                    <div className="tile" key={i}>
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