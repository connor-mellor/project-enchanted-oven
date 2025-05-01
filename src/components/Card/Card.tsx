import React from 'react'

type CardProps = {
    image: string
    title: string
    description: string
}

function Card({ image, title, description } : CardProps ) {
    return (
        <div className="rounded-md w-70 shadow-md/90 border border-l-primary transform-style-3d hover:scale-105 transform hover:translate-z-20 transition-transform duration-300">
            <img src={image} alt="" className="rounded-t-md w-70" />
            <div className="m-4">
                <h2 className="font-semibold mb-3 text-lg">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card