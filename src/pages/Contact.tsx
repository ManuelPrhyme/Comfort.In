import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reach out to discuss counseling services, ask questions, or schedule an appointment. We're here to help you on your journey toward healing and growth.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information and Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have questions about counseling services, courses, or anything else, please don't hesitate to reach out. I'm here to support you on your journey.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600 mb-1">Call or text to speak directly with Rev. Robert Bagoole</p>
                  <a href="tel:+256782319579" className="block text-primary-600 hover:underline">+256 782 319 579</a>
                  <a href="tel:+256758918200" className="block text-primary-600 hover:underline">+256 752 441 481</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">Send an email for any inquiries:</p>
                  <a href="mailto:robertbgl@gmail.com" className="text-primary-600 hover:underline">robertbgl8@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-600">
                    Jinja, Uganda<br />
                    <span className="text-sm">(Specific address provided when scheduling in-person sessions)</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="text-lg font-serif font-bold mb-3">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * Evening appointments available upon request
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => setFormStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Counseling Inquiry">Counseling Inquiry</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Schedule Appointment">Schedule Appointment</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full flex items-center justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section backgroundColor="bg-gray-50" padding="py-12">
        <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772211171!2d32.521708674546446!3d0.3152114638162319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8900d5a7%3A0x9873ff4ef535c4c5!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1665499729952!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Kampala, Uganda"
          ></iframe>
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Taking the first step is often the hardest part. Reach out today and let's walk this path together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+256782319579">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Call Now
              </Button>
            </a>
            <a href="mailto:robertbgl@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700"
              >
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;