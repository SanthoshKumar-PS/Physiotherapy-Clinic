import { motion } from "framer-motion";
import { 
  Activity, 
  Bone, 
  Heart, 
  Brain, 
  Dumbbell, 
  Baby,
  Users,
  Zap,
  Target,
  Clock,
  Home,
  Smile
} from "lucide-react";

const treatments = [
  { icon: Activity, name: "Back Pain & Neck Pain Therapy" },
  { icon: Bone, name: "Shoulder, Knee & Joint Pain Treatment" },
  { icon: Heart, name: "Post-Surgery Rehabilitation" },
  { icon: Brain, name: "Stroke Rehabilitation" },
  { icon: Dumbbell, name: "Sports Injury Therapy" },
  { icon: Activity, name: "Arthritis Pain Management" },
  { icon: Users, name: "Geriatric (Elderly) Physiotherapy" },
  { icon: Brain, name: "Neurological Physiotherapy" },
  { icon: Baby, name: "Pediatric Physiotherapy" },
  { icon: Target, name: "Muscle Strengthening & Mobility Training" },
  { icon: Zap, name: "Therapeutic Ultrasound" },
  { icon: Zap, name: "Electrotherapy" }
];

const benefits = [
  { icon: Clock, title: "No Travel or Waiting", description: "Save time and energy with doorstep service" },
  { icon: Heart, title: "Personal Attention", description: "One-on-one focused treatment sessions" },
  { icon: Smile, title: "Convenient Timing", description: "Schedule sessions at your preferred time" },
  { icon: Home, title: "Familiar Surroundings", description: "Faster recovery in your comfortable environment" }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-300/50 ">
        <div className="container mx-auto px-4 sm:px-6">
            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6}}
                className="text-center mb-10 sm:mb-12 md:mb-16"

            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700/80 mb-3 sm:mb-4" >
                    Our Services
                </h2>

                <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"/>

                <div className="text-base sm:text-lg text-gray-600/90 max-w-2xl mx-auto px-2">
                    Comprehensive physiotherapy treatments for all your needs
                </div>

            </motion.div>

            <div className="mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl font-semiold text-gray-700/80 text-center mb-6 sm:mb-6 sm:mb-8 md:mb-10 px-2">
                    Physiotherapy Treatments Provided
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
                    {treatments.map((treatment,index)=>{
                        const Icon = treatment.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity:0, scale:0.9}}
                                whileInView={{opacity:1, scale:1}}
                                viewport={{once:true}}
                                transition={{duration:0.4, delay:index*0.1}}
                                whileHover={{y:-5}}
                                className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300 flex items-center gap-3 sm:gap-4"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500"/>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700/80 font-medium">
                                    {treatment.name}
                                </p>

                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700/80 text-center mb-6 sm:mb-8 md:mb-10 px-2">
                    Home Visit Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {benefits.map((benefit,index)=>{
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity:0, y:30}}
                                whileInView={{opacity:1, y:0}}
                                viewport={{once:true}}
                                transition={{duration:0.5, delay: index*0.1}}
                                className="bg-blue-500 text-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                            >
                                <Icon className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4"/>
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-sm sm:text-base text-white/90">
                                    {benefit.description}
                                </p>

                            </motion.div>
                        )
                    })}
                </div>

            </div>

        </div>

    </section>
  )
}

export default Services