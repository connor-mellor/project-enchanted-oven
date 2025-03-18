import React from "react";
import styles from './HeroBlock.module.css'

const HeroBlock: React.FC = () => {
    return (
        <section className={styles.hero_block}>
            <div className={styles.hero_block_container}>
                <img src="hero-img.jpg" alt="cover image of multi-coloured muffins" />
                <div className={styles.overlay_card}>
                    <h1>Marie's Cakes & Bakes</h1>
                    <h2>Catered for all occasions, sweet treats and celebration cakes all freshly made to order.
                        <span className={styles.muffin_icon}>🧁</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HeroBlock;