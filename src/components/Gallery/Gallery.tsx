import images from '@/data/GalleryImages';
// import styles from './Gallery.module.css'
// import ImageZoom from "@/components/ImageZoom/ImageZoom";
import { useState } from "react";

const Gallery: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    // const [activeImage, setActiveImage] = useState(0);
    // const [isOpen, setIsOpen] = useState(false);
    // const [imageData, setImageData] = useState({ imageUrl: "", imageAlt: "" });
    // const setClose = () => setIsOpen(false);
    // const handleClick = (e: React.MouseEvent<HTMLDivElement>, src: string, i: number) => {
    //     setImageData({ imageUrl: src, imageAlt: `Position-${i}` })
    //     setIsOpen(true)
    // }

    return (
        <section className="bg-l-surfaceDim">
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-2xl font-semibold mb-2">Gallery </h1>
                <div className="grid gap-4 mx-auto my-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(showAll ? images : images.slice(0, 6)).map((src, i) => {
                            return (
                                <div key={i} className="cursor-pointer" >
                                    <img className="h-auto max-w-full rounded-lg" src={src} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className='mt-12 text-center text-lg underline cursor-pointer' onClick={() => setShowAll(!showAll)} >See {showAll ? "less" : "more"}</p>
            </div>
        </section >
    )
}

export default Gallery;