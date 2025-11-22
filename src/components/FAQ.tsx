import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide treatment at home?",
    answer: "Yes, we specialize in physiotherapy home visits. Our experienced therapists come to your home with all necessary equipment to provide professional treatment in the comfort of your own space."
  },
  {
    question: "What if I need urgent treatment?",
    answer: "Call us immediately — we try to schedule an urgent visit if available. We understand that some conditions require immediate attention, and we do our best to accommodate emergency requests."
  },
  {
    question: "How long is a session?",
    answer: "Typically, each physiotherapy session lasts between 45 minutes to 1 hour. The duration may vary depending on your specific treatment plan and condition."
  },
  {
    question: "What areas do you cover?",
    answer: "We provide home physiotherapy services throughout the city and nearby areas. Contact us to confirm if we serve your location."
  },
  {
    question: "Do I need any equipment at home?",
    answer: "No, our therapists bring all necessary equipment for your treatment. You just need to provide a comfortable space for the session."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, bank transfers, and digital payments. Payment is typically due after each session or can be paid in advance for packages."
  }
];
const FAQ = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700/80 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"/>
          <p className="text-base sm:text-lg text-gray-600/90 max-w-2xl mx-auto px-2">
              Find answers to common questions about our home physiotherapy services
          </p>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible
            className="space-y-3 sm:space-y-4"
          >
            {faqs.map((faq,index)=>(
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-300 rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-700/80 hover:text-blue-500 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600/90 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>

        </motion.div>

      </div>

    </section>
  )
}

export default FAQ