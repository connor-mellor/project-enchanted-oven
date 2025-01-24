import './App.css'
import Navigation from './components/Navigation'
import Promo from './components/Promo.tsx'
import HeroBlock from './components/HeroBlock.tsx'
import WhatWeDo from './components/WhatWeDo.tsx'
import Reviews from './components/Reviews.tsx'

function App() {
  return (
    <>
      <Navigation />
      <Promo>Get your order in for Valentines Day now! - Feburary 14th</Promo>
      <HeroBlock />
      <WhatWeDo />
      <Reviews />
    </>
  )
}

export default App
