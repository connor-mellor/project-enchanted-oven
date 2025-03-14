import './App.css'
import Navigation from './components/Navigation/Navigation'
import Promo from './components/Promo/Promo'
import HeroBlock from './components/HeroBlock/HeroBlock'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import Reviews from './components/Reviews/Reviews'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import QuoteForm from './components/QuoteForm/QuoteForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Promo>🐰 Order now in time for the Easter Bunny - April 20th 🐰</Promo> {/* consider adding feature flag file and pull content here */}
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
