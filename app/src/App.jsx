import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CreateTestimonials from './components/CreateTestimonials';


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Home/>
      <Properties/>
      <About/>
      <Testimonials/>
      <CreateTestimonials/>
      <Contact/>
      <Footer/>
      {/* <Routes>
          <Route path="/about" element={<About />} />
        </Routes> */}
    </Router>
      
    </>
  )
}

export default App


