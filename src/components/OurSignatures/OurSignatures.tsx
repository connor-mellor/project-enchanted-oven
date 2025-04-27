// import inventory from "@/data/InventoryItems";
// import styles from './WhatWeDo.module.css'
import Card from "../Card/Card";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const customerFavourites = [
    {
        img: "cake.png",
        title: "Chocolate Bueno Cake",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: "cookies.png",
        title: "Gold Sprinkle Cookies",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: "cupcakes.png",
        title: "All Occasion Pastries",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: "giant-cookie.png",
        title: "Giant Super Cookie",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    }
]

const OurSignatures: React.FC = () => {
    return (
        <section className='bg-l-surface'>
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-2xl font-semibold mb-2">Customer Favourites </h1>
                <div className={'mx-auto'}>
                    <ScrollArea className="max-w-[90vw] rounded-md">
                        <div className="flex justify-center items-center gap-8 my-8 mx-2">
                            {customerFavourites.map((item) => {
                                return <Card image={item.img} title={item.title} description={item.description} />
                            })}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </section>
    )
}

export default OurSignatures;