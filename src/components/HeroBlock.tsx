import React from "react";
import heroImg from '../assets/hero-img.jpg'

const HeroBlock: React.FC = () => {
    return (
        <section>
            <div className="hero-block-container">
                <img src={heroImg} />
                <div className="overlay-card">
                    <h1>Marie's Muffins</h1>
                    <h2>The moistest muffin in all the land!
                        <span className="muffin-icon">🧁</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HeroBlock;