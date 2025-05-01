import { useState } from 'react'

const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Our Signatures', path: '#' },
    { name: 'Gallery', path: '#' },
    { name: 'Reviews', path: '#' },
    { name: 'Contact', path: '#' },
    // { name: 'Quote', path: '#' },
]


function Navigation() {
    const [mbMenuVisible, setMbMenuVisible] = useState(false)

    return (
        <header className="bg-l-primary">
            <div className='flex justify-between items-center mx-6 md:mx-16 p-1'>
                <div className={'w-18 flex justify-center mx-auto'}>
                    {/* <img src="logo-gen-p2.png" alt="company logo of white bakers pouch with blue love heart" loading="lazy" className='flex-1'/> */}
                    <img src="logo.png" alt="company logo of white bakers pouch with blue love heart" loading="lazy" className='flex-1' />
                </div>
                <nav className="">
                    <div className="lg:hidden flex justify-center items-center text-l-onPrimary">
                        <i className="bx bx-menu text-3xl cursor-pointer" onClick={() => setMbMenuVisible(!mbMenuVisible)}></i>
                        <div className={`md:hidden fixed top-0 left-0 min-h-screen min-w-screen bg-l-primary text-l-onPrimary z-100 ${mbMenuVisible ? 'flex justify-center items-center' : 'hidden'}`}>
                            <ul className='flex flex-col gap-12 font-semibold text-lg'>
                                {navItems.map((item) => {
                                    return (
                                        <li key={item.name} className='cursor-pointer text-l-onPrimary hover:text-primary-tint-20 transition-colors duration-300'>
                                            {item.name}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='fixed top-3.5 right-6 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-l-primaryContainer text-l-onPrimary shadow-lg hover:bg-primary-tint-50 hover:text-l-surfaceDim transition-colors cursor-pointer z-11'>
                                <i className={`bx bx-x text-4xl lg:text-xl`} onClick={() => setMbMenuVisible(!mbMenuVisible)}></i>
                            </div>
                        </div>
                    </div>
                    <ul className='hidden lg:flex gap-8 font-semibold text-lg '>
                        {navItems.map((item) => {
                            return (
                                <li key={item.name} className='cursor-pointer text-l-onPrimary hover:text-primary-tint-20 transition-colors duration-300'>
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation;