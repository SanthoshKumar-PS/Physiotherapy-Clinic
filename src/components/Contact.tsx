import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from "emailjs-com";
import { redirectLinks, SHOW_PHONE_NUMBER } from '@/lib/redirectLinks';
import { toast } from 'sonner';
  const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleContactSubmit =async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          publicKey
        )
        toast.success("Submitted Successfully!", {
          description: "We received your enquiry.",
          style: {
            backgroundColor: "#3b82f6",  // blue-800
            color: "white",
            border: "1px solid #3b82f6",
          },
        });
      setFormData({name:"", phone:"", email:"", message:""});
    } catch (error:any) {
        toast.error("Failed to Submit!", {
          description: "Try again after sometime.",
          style: {
            backgroundColor: "#dc2626",
            color: "white",
            border: "1px solid #b91c1c",
          },
        });
        console.log("Error occured while submitting form")
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <section id='contact' className='py-12 sm:py-16 md:py-20 bg-gray-300/20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className='text-center mb-10 sm:mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700/80 mb-3 sm:mb-4'>
            Contact Us
          </h2>
          <div className='w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6'/>
          <p className='text-base sm:text-lg text-gray-600/80 mx-w-2xl mx-auto px-2'>
            Get in touch to schedule your home visit physiotherapy session
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <motion.div
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
          >
            <h3 className='text-2xl sm:text=3xl font-semibold text-gray-700/80 mb-6 sm:mb-8'>
              Gayathri Physiotherapy Clinic
            </h3>

            <div className='space-y-5 sm:space-y-6'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Phone className='h-5 w-5 sm:h-6 sm:w-6 text-white'/>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700/80 mb-1 text-sm sm:text-base'>Phone</h4>
                  <a href={redirectLinks.call} className='text-sm sm:text-base text-gray-600/90 hover:text-blue-500 transition-colors'>
                    {SHOW_PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Mail className='h-5 w-5 sm:h-6 w-6 text-white'/>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700/80 mb-1 text-sm sm:text-base'>
                    Email
                  </h4>
                  <a href={redirectLinks.email} className='text-sm sm:text-base text-gray-600/90 hover:text-blue-500 transition-colors break-all'>
                    santhoshkumarsakthi2003@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MapPin className='h-5 w-5 sm:h-6 sm:w-6 text-white'/>
                </div>

                <div >
                  <h4 className='font-semibold text-gray-700/80 mb-1 text-sm sm:text-base'>Location</h4>
                  <p className='text-sm sm:text-base text-gray-600/90 hover:text-blue-500'   
                  onClick={() =>
                    window.open(redirectLinks.maps,
                      "_blank"
                    )}>Karimangalam</p>
                </div>
              </div>

              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Clock className='h-5 w-5 sm:h-6 sm:w-6 text-white'/>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700/80 mb-1 text-sm sm:text-base'>Operating Hours</h4>
                  <p className='text-sm sm:text-base text-gray-600/90'>Available 7 days</p>
                  <p className='text-sm sm:text-base text-gray-600/90'>Home visits on appointment</p>
                </div>
              </div>
            </div>

            <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4'>
              <Button
                className='bg-blue-500 hover:bg-blue-500/90 w-full sm:w-auto'
                size="lg"
                asChild
              >
                <a href={redirectLinks.call} className='flex items-center justify-center'>
                  <Phone className='mr-2 h-4 w-4 sm:h-5 sm:w-5'/>
                  <span className='text-sm sm:text-base'>Call Now</span>
                </a>
              </Button>
              <Button
                className='bg-orange-500 hover:bg-orange-500/90 w-full sm:w-auto'
                size='lg'
                asChild
              >
                <a href={redirectLinks.whatsapp} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center'>
                <MessageCircle className='mr-2 h-4 w-4 sm:h-5 sm:w-5'/>
                <span className='text-sm sm:text-base'>Whatsapp Now</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{opacity:0, x:30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className='bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-300'
          >
            <h3 className='text-xl sm:text-2xl font-semibold text-gray-700/80 mb-5 sm:mb-6'>
              Book an Appointment
            </h3>
            <form onSubmit={handleContactSubmit} 
              className='space-y-3.5 sm:space-y-4'
            >
              <div>
                <Input
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={(e:any) => setFormData({...formData,name:e.target.value})}
                  required
                  className='text-sm sm:text-base'
                />
              </div>

              <div>
                <Input
                  type='tel'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={(e:any) => setFormData({...formData,phone:e.target.value})}
                  required
                  className='text-sm sm:text-base'
                />
              </div>

              <div>
                <Input
                  type='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={(e:any) => setFormData({...formData,email:e.target.value})}
                  required
                  className='text-sm sm:text-base'
                />
              </div>
              <div>
                <Textarea 
                  placeholder='Tell us about your condition and preferred appointment time'
                  value={formData.message}
                  onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  rows={4}
                  required
                  className='text-sm sm:text-base'
                />
              </div>
              <Button
                type='submit'
                disabled={isLoading}
                className='w-full bg-blue-500 hover:bg-blue-500/90'
                size='lg'
              >
                {isLoading?"Submitting...":"Submit request"}
              </Button>


            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact