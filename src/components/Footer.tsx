

const Footer = () => {
  const currentYear  = new Date().getFullYear();
  return (
    <footer className="bg-slate-700 text-background py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Gayathri Physiotherapy Clinic
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">
              Expert home physiotherapy care at your doorstep. Professional treatment for faster recovery and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 ">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}                
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}                
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}                
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* Developed By  Santhosh*/}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3">
              Developed By
            </h4>

            <p className="text-sm sm:text-base text-white font-bold mb-3">
              Santhosh Kumar P S
            </p>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/santhosh-kumar-periyanahalli-sakthivel/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8.74H4.7V24H.23zM8.1 8.74H12.3V10.7h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V24h-4.47v-7.17c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24H8.1z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919597889163"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.1 3.9A11.8 11.8 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.14 1.61 5.95L0 24l6.2-1.63A11.84 11.84 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.47-8.47zM12 21.6a9.6 9.6 0 01-4.9-1.34l-.35-.2-3.68.96.98-3.6-.22-.38a9.6 9.6 0 01-1.46-5.03C2.39 6.03 6.04 2.4 12 2.4c2.55 0 4.96 1 6.77 2.82A9.5 9.5 0 0121.6 12c0 5.96-3.64 9.6-9.6 9.6zm5.14-7.37c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.08-.17.19-.34.21-.62.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.61-1.52-1.88-.16-.28-.02-.43.12-.57.13-.13.28-.34.4-.51.13-.17.17-.28.26-.47.09-.19.04-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.17-.01-.35-.01-.54-.01s-.5.07-.76.35c-.26.28-1 1.03-1 2.52 0 1.48 1.02 2.92 1.16 3.11.14.19 2 3.06 4.85 4.29 2.85 1.22 2.85.81 3.36.76.51-.05 1.65-.67 1.89-1.32.23-.64.23-1.19.16-1.32-.07-.14-.25-.21-.52-.35z"/>
                </svg>
              </a>

              {/* Call Button */}
              <a
                href="tel:+919597889163"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.26 16.27l-4.9-2.1a1.15 1.15 0 00-1.34.33l-2.2 2.7c-2.93-1.4-5.31-3.78-6.7-6.7l2.7-2.2c.36-.28.47-.76.33-1.15L7.7 2.03c-.16-.54-.63-.91-1.18-.91H2.9C2.12 1.12 1.5 1.73 1.5 2.5c0 11.43 9.27 20.7 20.7 20.7.77 0 1.38-.62 1.38-1.38v-3.62c0-.54-.33-1.02-.82-1.26z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 sm:pt-8 text-center">
        <p className="text-xs sm:text-sm text-white/80">
        © {currentYear} Gayathri Physiotherapy Clinic. All rights reserved.
        </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer