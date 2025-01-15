import './App.css'
import Navigation from './components/Navigation'
import HeroBlock from './components/HeroBlock.tsx'

function App() {
const a = "darren";
  return (
    <>
      <Navigation />
      <HeroBlock name={a}/>
    </>
  )
}

export default App
