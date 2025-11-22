import { motion } from "framer-motion";
import { Phone, Calendar, ClipboardCheck, FileText, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call or Book Online",
    description: "Contact us via phone, WhatsApp, or our online booking form"
  },
  {
    icon: Calendar,
    title: "Therapist Assigns Visit Time",
    description: "We schedule a convenient time for your home visit"
  },
  {
    icon: ClipboardCheck,
    title: "Home Assessment & Diagnosis",
    description: "Our expert conducts a thorough evaluation at your home"
  },
  {
    icon: FileText,
    title: "Customized Treatment Plan",
    description: "Receive a personalized therapy program tailored to your needs"
  },
  {
    icon: TrendingUp,
    title: "Regular Monitoring & Recovery",
    description: "Ongoing sessions with progress tracking for optimal results"
  }
];
const HowItWorks = () => {
  return (
    <section id="how-it-works" 
        className="py-12 sm:py-16 md:py-20 bg-white"
    >
        <div className="container mx-auto px-4 sm:px-6">
            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6}}
                className="text-center mb-10 sm:mb-12 md:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700/80 mb-3 sm:mb-4">
                    How It Works
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"/>
                <p className="text-base sm:text-lg text-gray-600/90 max-w-2xl mx-auto px-2">
                    Simple steps to start your home physiotherapy journey
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto relative ">
                {/* TimeLine */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"/>

                {steps.map((step,index)=>{
                    const Icon = step.icon;
                    const isEven = index%2===0;
                    
                    return (
                        <motion.div
                            key={index}
                            initial={{opacity:0, x:isEven?-50:50}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{once:true}}
                            transition={{duration:0.6, delay:index*0.2}}
                            className={`relative mb-12 lg:mb-16 flex items-center ${isEven?"lg:flex-row":"lg:flex-row-reverse"}`}
                        >
                            {/* Content */}
                            <div className={`lg:w-1/2 ${isEven? "lg:pr-12 lg:text-right":"lg:pl-12 lg:text-left"}`}>
                                <div className={`bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-300 ml-8 lg:ml-0`}>
                                    <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isEven?"lg:flex-row-reverse":""}`}>
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white"/>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semobold text-gray-700/80">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600/80">
                                        {step.description}
                                    </p>


                                </div>
                            </div>

                            {/* TimeLine Circle */}
                            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                                {index+1}
                            </div>

                            {/* Mobile Badge */}
                            <div className="lg:hidden absolute -left-2 top-4 sm:top-6 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                                {index+1}
                            </div>

                        </motion.div>
                    ) 
                })}

            </div>

        </div>

    </section>
  )
}

export default HowItWorks