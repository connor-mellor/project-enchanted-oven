import React from "react";
// import styles from './HeroBlock.module.css'

const HeroBlock: React.FC = () => {
    return (
        <section className={'min-h-[80vh] bg-l-primaryContainer flex flex-col py-12 items-center gap-8'}>
            <div className="px-4 py-10 container mx-auto md:py-2 lg:px-20 lg:py-16 xl:py-20 flex flex-col gap-16 sm:gap-8 md:gap-4 md:flex-row justify-center items-center xl:gap-24">
            {/* <div> */}
                <div className="w-full flex-1 flex flex-col gap-6 text-center md:text-left">
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="font-extrabold text-l-onPrimary">
                            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">Marie's</span>
                            <span className="text-l-onPrimary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Cakes & Bakes</span>
                        </h1>
                        <p>Catered for all occasions, sweet treats and celebration cakes all freshly made to order.</p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-l-onSecondaryContainer/30">
                        <div className="flex -space-x-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/21.jpg"
                                alt="User"
                                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-l-onPrimary object-cover"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/12.jpg"
                                alt="User"
                                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-l-onPrimary object-cover"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/women/24.jpg"
                                alt="User"
                                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-l-onPrimary object-cover"
                            />
                            <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-l-onPrimary bg-neutral-900 dark:bg-amber-500 text-white dark:text-neutral-900 text-xs font-medium">
                                +5K
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <i className="bx bxs-star text-yellow-300 mr-1"></i>
                                <i className="bx bxs-star text-yellow-300 mr-1"></i>
                                <i className="bx bxs-star text-yellow-300 mr-1"></i>
                                <i className="bx bxs-star text-yellow-300 mr-1"></i>
                                <i className="bx bxs-star-half text-yellow-300 mr-1"></i>
                                <span className="text-l-onPrimaryContainer text-sm ml-1">4.8/5</span>
                            </div>
                            <p className="text-l-onPrimary text-sm">
                                Loved by{' '}
                                <span className="font-bold text-l-onPrimaryContainer">5,000+</span>{' '}
                                happy customers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-60 h-60 sm:w-70 sm:h-70 lg:w-80 lg:h-80 xl:w-100 xl:h-100 rounded-full bg-radial from-primary-tint-80 to-l-primaryContainer flex justify-center items-center">
                    <img src="cupcake-gen-1.png" alt="" className="object-center" />
                </div>
            </div>
            <button className="bg-l-primary hover:bg-primary-tint-15 transition-colors duration-300 text-md font-medium text-l-onPrimary rounded-full cursor-pointer px-8 py-3 lg:px-12 lg:py-4 ">Order Now</button>
        </section>
    )
}

export default HeroBlock;