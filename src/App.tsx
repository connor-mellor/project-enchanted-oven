import './App.css'
import Navigation from './components/Navigation'
import Promo from './components/Promo.tsx'
import HeroBlock from './components/HeroBlock.tsx'
import WhatWeDo from './components/WhatWeDo.tsx'
import Reviews from './components/Reviews.tsx'
import Gallery from './components/Gallery.tsx'
import Contact from './components/Contact.tsx'
import QuoteForm from './components/QuoteForm..tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Navigation />
      <Promo>🐰 Order now in time for the Easter Bunny - April 20th 🐰</Promo>
      <HeroBlock />
      <WhatWeDo />
      <Gallery />
      <Reviews />
      <Contact />
      <QuoteForm />
      <Footer />
    </>
  )
}

export default App
