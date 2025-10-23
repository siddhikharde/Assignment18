import { createRoot } from 'react-dom/client'
import Navbar from './navbar'
import Home from './home'
import About from './about' 
import Contact from './contact'
import Footer from './footer'

createRoot(document.getElementById('root')).render(
  <>
 
   <Navbar />
   <Contact/>
   <About />
   <Home/>
   <Footer/>
  </>
)
