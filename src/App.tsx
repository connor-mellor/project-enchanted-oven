import './App.css'
import Navigation from './components/Navigation'
import Promo from './components/Promo.tsx'
import HeroBlock from './components/HeroBlock.tsx'
import WhatWeDo from './components/WhatWeDo.tsx'
import QuoteForm from './components/QuoteForm..tsx'
import Footer from './components/Footer.tsx'
import Reviews from './components/Reviews.tsx'
// import Reviews from './components/Reviews.tsx'

function App() {
  return (
    <>
    
      <Navigation />
      <Promo>Get your order in for Valentines Day now! - Feburary 14th</Promo>
      <HeroBlock />
      <WhatWeDo />
      <Reviews />
      <QuoteForm />
      <Footer />
    </>
  )
}

export default App
