import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCo from './Components/NavabarCo';
import SliderCo from './Components/SliderCo';
import Destionations from './Components/Destinations';
import './assets/style/input.css'
import Footer from './Components/Footer';
import Cateogry from './Components/Cateogry';

function App() {

  return (
     <>
       <NavbarCo expand="lg" />
       <SliderCo />
       <Cateogry />
       <Destionations />
       <Footer />
     </>
  )
}

export default App
