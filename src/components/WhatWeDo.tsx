import inventory from "../data/InventoryItems";

const WhatWeDo: React.FC = () => {
    return (
        <section className="what-we-do">
            <div className="section-title">
                <h1>What We Do</h1>
            </div>
            <div className="tile-container">
                {inventory.map(({ name }, i) => (
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