import Navigation from '@/components/Navigation/Navigation'
import HeroBlock from '@/components/HeroBlock/HeroBlock'
import Promo from '@/components/Promo/Promo'
// import WhatWeDo from '@/components/WhatWeDo/WhatWeDo'
// import Reviews from '@/components/Reviews/Reviews'
// import Gallery from '@/components/Gallery/Gallery'
// import Contact from '@/components/Contact/Contact'
// import QuoteForm from '@/components/QuoteForm/QuoteForm'
// import Footer from '@/components/Footer/Footer'

function App() {
  return (
    <>
      <div className='min-h-screen '>
        <Navigation />
        <HeroBlock />
        <Promo>Egg-stra special treats await! Order before April 20th</Promo>
      </div>
      {/* <WhatWeDo />
      <Gallery />
      <Reviews />
      <Contact />
      <QuoteForm />
      <Footer /> */}
    </>
  )
}

export default App
