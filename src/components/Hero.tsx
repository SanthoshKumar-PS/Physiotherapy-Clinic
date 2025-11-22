import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-500/80'>
        <div className='absolute inset-0 bg-black/20 z-10'/>
        <img src="/hero.jpg" alt="Gayathri Physiotherapy Hero Image" 
         className='absolute inset-0 w-full h-full object-cover blur-[2px]'
        />

        <div className='container mx-auto px-4 sm:px-6 py-16 sm:py-20 z-20 relative'>
            <div className='max-w-3xl mx-auto text-center space-y-3 md:space-y-4'>
                {/* mb-3 sm:mb-4 */}
                <motion.h1
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-2'
                >
                    Gayathri Physiotherapy Clinic
                </motion.h1>
                <motion.p
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.8, delay:0.2}}
                    className='text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 '
                >
                    Expert Home Physiotherapy Care, At Your Doorstep.
                </motion.p>

                <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8, delay:0.4}}
                    className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4'
                >
                    <Button
                        size="lg"
                        className='w-full sm:w-auto bg-orange-500 hover:bg-orange-500/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-lg hover:shadow-xl transition-all'
                        onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                    >
                        Book an Appointment
                    </Button>

                    <Button
                        size='lg'
                        variant='outline'
                        className='w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white-30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:text-green-500'
                    >
                        <a href="tel:+919597889163" className='flex items-center justify-center '>
                            <Phone className='mr-2 h-4 w-4 sm:h-5 sm:w-5'/>
                            <span className='text-sm sm:text-base'>Call: +91-9597889163</span>
                        </a>
                    </Button>

                </motion.div>

            </div>
        </div>

        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:0.8}}
            className='absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block'
        >
            <div className='w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 sm:p-2'>
                <motion.div
                    animate={{y:[0,12,0]}}
                    transition={{duration:1.5, repeat:Infinity}}
                    className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full'
                >

                </motion.div>
            </div>
        </motion.div>

    </section>
  )
}

export default Hero