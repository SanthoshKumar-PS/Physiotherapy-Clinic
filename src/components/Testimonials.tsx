import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh ",
    condition: "Knee Pain",
    testimonial: "The best home physiotherapy service in our area. My knee pain reduced within a week! The therapist was professional, caring, and really understood my needs.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    condition: "Stroke Recovery",
    testimonial: "Very professional and caring. My mother recovered quickly after stroke because of their treatment. The home visits made such a difference in her comfort level.",
    rating: 5
  },
  {
    name: "Anil Verma",
    condition: "Back Pain",
    testimonial: "Excellent service! I was suffering from chronic back pain for years. After just two weeks of treatment at home, I can finally move without discomfort. Highly recommended!",
    rating: 5
  },
  {
    name: "Lakshmi Reddy",
    condition: "Post-Surgery Rehabilitation",
    testimonial: "Outstanding care after my hip replacement surgery. The therapist came right to my home and guided me through recovery step by step. I'm walking normally now!",
    rating: 5
  }
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-blue-200/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700/80 mb-3 sm:mb-4">
            What Our Patients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"/>
          <p className="text-base sm:text-lg text-gray-600/90 max-w-2xl mx-auto px-2">
            Real stories from real people who found relief through physiotherapy services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:index*0.1}}
              whileHover={{scale:1.02}}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border border-gray-300 relative"
            >
              <Quote className="absolute top-2 right-4 sm:top-6 sm:right-6 h-8 w-8 sm:h-10 sm:w-10 text-blue-500/20"/>

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_,i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-orange-500 text-orange-500"/>
                ))}
              </div>

              <p className="text-gray-700/80 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed italic pr-6 sm:pr-0">
                "{testimonial.testimonial}"
              </p>

              <div className="border-t border-gray-300 pt-3 sm:pt-4">
                <p className="font-semibold text-gray-700/80 text-base sm:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm sm:text-base text-gray-600/80">
                  {testimonial.condition}
                </p>

              </div>


            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials