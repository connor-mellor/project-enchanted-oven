import React from "react";

const HeroBlock: React.FC = () => {
    return (
        <section>
            <div className="hero-block-container">
                <img src="src/assets/hero-img.jpg" />
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