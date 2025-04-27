import Navigation from '@/components/Navigation/Navigation'
import HeroBlock from '@/components/HeroBlock/HeroBlock'
import Promo from '@/components/Promo/Promo'
import OurSignatures from '@/components/OurSignatures/OurSignatures'
import Gallery from '@/components/Gallery/Gallery'
import Reviews from '@/components/Reviews/Reviews'
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
        <OurSignatures />
        <Gallery />
        <Reviews />
      </div>
      {/* <Contact />
      <QuoteForm />
      <Footer /> */}
    </>
  )
}

export default App
