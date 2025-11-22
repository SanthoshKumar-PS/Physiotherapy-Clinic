import { Toaster } from "sonner"
import About from "./components/About"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <div className='min-h-screen'>
      <Toaster richColors position="top-center" />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
