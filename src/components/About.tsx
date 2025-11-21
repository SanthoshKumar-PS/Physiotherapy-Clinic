import { div, section } from "framer-motion/client";
import { Award, DollarSign, Heart, Home, PhoneCall, Users } from "lucide-react";
import {motion} from 'framer-motion';

const features = [
  {
    icon: Home,
    title: "Home Visit Physiotherapy",
    description: "Professional treatment in the comfort of your own home"
  },
  {
    icon: Users,
    title: "Experienced Physiotherapists",
    description: "Friendly, certified therapists with years of clinical experience"
  },
  {
    icon: Heart,
    title: "Tailored Treatment Plans",
    description: "Personalized care programs designed for your specific needs"
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible payment options"
  },
  {
    icon: Award,
    title: "Best Service in Town",
    description: "Recognized for excellence in physiotherapy care"
  },
  {
    icon: PhoneCall,
    title: "Emergency Service Available",
    description: "Doorstep physiotherapy on request for urgent needs"
  }
];
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6}}
                className="text-center mb-10 md:mb-14"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600/90  mb-3 sm:mb-4">
                    About Us
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"/>
                <p className="text-base sm:text-lg md:text-xl text-gray-700/80 max-w-3xl mx-auto leading-relaxed px-2">
                    Gayathri Physiotherapy Clinic provides high-quality, on-call physiotherapy services for patients who prefer treatment in the comfort of their homes. With years of clinical experience, personalized care plans, and advanced therapeutic techniques, we ensure faster recovery and long-term wellness.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                {features.map((feature,index)=>{
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1, y:0}}
                            viewport={{once:true}}
                            transition={{duration:0.5,delay:index*0.1}}
                            whileHover={{scale:1.05}}
                            className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-300"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-200/30 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500"/>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600/90 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700/80">
                                {feature.description}
                            </p>

                        </motion.div>
                    )
                })}

            </div>

        </div>

    </section>
  )
}

export default About