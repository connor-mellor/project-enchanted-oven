import inventory from "../../data/InventoryItems";
import styles from './WhatWeDo.module.css'

const WhatWeDo: React.FC = () => {
    return (
        <section className={styles.what_we_do}>
            <div className={styles.section_title}>
                <h1>What We Do</h1>
            </div>
            <div className={styles.tile_container}>
                {inventory.map(({ name }, i) => (
                    <div className={styles.tile} key={i}>
                        <div className={styles.tile_overlay}>
                            <h3>{name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatWeDo;