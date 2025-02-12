import React from "react";
import heroImg from '../assets/hero-img.jpg'

const HeroBlock: React.FC = () => {
    return (
        <section className="hero-block">
            <div className="hero-block-container">
                <img src={heroImg} loading="lazy" />
                <div className="overlay-card">
                    <h1>Marie's Cakes & Bakes</h1>
                    <h2>Catered for all occasions, sweet treats and celebration cakes all freshly made to order.
                        <span className="muffin-icon">🧁</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HeroBlock;