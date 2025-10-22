import { createRoot } from 'react-dom/client'
import Navbar from './navbar'
import Home from './home'
import About from './about' 

createRoot(document.getElementById('root')).render(
  <>
 
   <Navbar />
   <About />
   <Home/>
  </>
)
