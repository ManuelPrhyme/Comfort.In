import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Sample counseling services data
const counselingServices = [
  {
    id: 1,
    title: 'Individual Counseling',
    description: 'One-on-one sessions focused on your personal challenges, spiritual growth, and emotional wellbeing.',
    duration: '60 minutes',
    price: '$85',
    features: [
      'Personalized biblical guidance',
      'Confidential, safe environment',
      'Flexible scheduling options',
      'In-person or online sessions',
    ],
  },
  {
    id: 2,
    title: 'Marriage Counseling',
    description: 'Strengthening your relationship through Christ-centered principles and practical communication tools.',
    duration: '90 minutes',
    price: '$120',
    features: [
      'Biblical perspective on marriage',
      'Conflict resolution techniques',
      'Communication skill building',
      'Joint and individual sessions',
    ],
  },
  {
    id: 3,
    title: 'Group Counseling',
    description: 'Find strength and encouragement in community with others facing similar challenges.',
    duration: '120 minutes',
    price: '$40',
    features: [
      'Small groups (5-8 people)',
      'Topic-focused discussions',
      'Peer support and accountability',
      'Guided by biblical principles',
    ],
  },
  {
    id: 4,
    title: 'Youth Counseling',
    description: 'Guidance for teenagers and young adults navigating faith, identity, and life decisions.',
    duration: '45 minutes',
    price: '$65',
    features: [
      'Age-appropriate approach',
      'Faith-based guidance',
      'Parental involvement options',
      'Building healthy foundations',
    ],
  },
];

// Sample frequently asked questions
const faqs = [
  {
    question: 'What can I expect in my first counseling session?',
    answer: 'Your first session will be primarily focused on getting to know each other. We\'ll discuss what brought you to counseling, your faith background, your goals for our time together, and begin to develop a plan for moving forward. It\'s an opportunity for you to ask questions and determine if we\'re a good fit for working together.',
  },
  {
    question: 'How is Christian counseling different from secular counseling?',
    answer: 'Christian counseling integrates biblical principles and prayer into the therapeutic process. While we use evidence-based counseling techniques, we view them through the lens of Scripture and believe that true healing and transformation come through a relationship with Christ. Your faith journey is welcomed as an integral part of our discussions.',
  },
  {
    question: 'How long will I need counseling?',
    answer: 'The duration of counseling varies greatly depending on your specific situation, goals, and the depth of the issues being addressed. Some people find significant benefit from 6-8 sessions, while others may continue for several months. We\'ll regularly evaluate your progress and discuss the appropriate timeline together.',
  },
  {
    question: 'Do you offer online counseling sessions?',
    answer: 'Yes, I offer both in-person and online counseling sessions via secure video conferencing. Online sessions provide the same quality of care while offering convenience, especially for those with busy schedules, transportation challenges, or who live at a distance.',
  },
  {
    question: 'Is what I share in counseling confidential?',
    answer: 'Yes, confidentiality is a cornerstone of the counseling relationship. What you share remains private, with a few exceptions required by law: if there is risk of harm to yourself or others, suspicion of child or elder abuse, or if records are court-ordered. I\'ll always discuss these limits to confidentiality with you in detail.',
  },
  {
    question: 'How do I know if counseling is right for me?',
    answer: 'If you\'re experiencing challenges that are affecting your quality of life, relationships, or spiritual walk—and these challenges haven\'t resolved with time and prayer alone—counseling may be beneficial. I offer a free 15-minute consultation call to discuss your situation and help you determine if my services would be a good fit for your needs.',
  },
];

const Counseling = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Christian Counseling Services
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional, biblical guidance to help you navigate life's challenges and find healing through Christ's love.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Compassionate Biblical Counseling</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Dove Blessed Ministries, we provide Christ-centered counseling that combines biblical wisdom with professional therapeutic techniques to address the whole person—spirit, mind, and body.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're struggling with anxiety, grief, relationship challenges, or seeking deeper purpose in your life, my goal is to create a safe, compassionate space where you can explore your challenges, discover God's purpose, and develop practical skills to overcome obstacles with faith and confidence.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Every counseling journey begins with understanding your unique story and needs. I invite you to take that first step toward healing and growth today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services">
                <Button variant="primary">
                  Explore Services
                </Button>
              </a>
              <a href="#booking">
                <Button variant="outline">
                  Book a Session
                </Button>
              </a>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Christian Counseling Session" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section 
        id="services"
        title="Counseling Services" 
        subtitle="I offer a range of specialized Christian counseling services to address different needs and life situations."
        backgroundColor="bg-gray-50"
        centerText
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {counselingServices.map((service) => (
            <Card 
              key={service.id} 
              className={`overflow-hidden border-2 transition-all duration-300 ${
                selectedService === service.id 
                  ? 'border-primary-500 shadow-lg' 
                  : 'border-transparent'
              }`}
              onClick={() => toggleService(service.id)}
              hover={false}
            >
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="text-lg font-bold text-primary-600">{service.price}</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  selectedService === service.id ? 'max-h-48' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-2">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={16} className="text-secondary-500 mr-2 mt-1 shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <a href="#booking">
                    <Button 
                      variant={selectedService === service.id ? "primary" : "outline"}
                      className="w-full"
                    >
                      {selectedService === service.id ? "Book This Service" : "Select & View Details"}
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Booking Information */}
      <Section 
        id="booking"
        title="Book a Counseling Session" 
        subtitle="Taking the first step toward healing is an act of courage. I'm here to walk alongside you on this journey."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-serif font-bold mb-4">How to Schedule</h3>
              <p className="text-gray-600 mb-6">
                Booking a counseling session is simple. You can reach out through any of the following methods:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call or Text</h4>
                    <p className="text-gray-600 mb-2">
                      Speak directly with Rev. Bagoole to discuss your needs and schedule an appointment.
                    </p>
                    <div className="space-y-1">
                      <a href="tel:+256782319579" className="block text-primary-600 hover:underline">+256 782 319 579</a>
                      <a href="tel:+256758918200" className="block text-primary-600 hover:underline">+256 758 918 200</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <MessageCircle size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 mb-2">
                      Send an email with your preferred dates/times and a brief description of what you'd like to discuss.
                    </p>
                    <a href="mailto:robertbgl@gmail.com" className="block text-primary-600 hover:underline">robertbgl@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Calendar size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Contact Form</h4>
                    <p className="text-gray-600 mb-2">
                      Fill out the contact form on our website with your information and preferred contact method.
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-primary-600 hover:underline">
                      Go to contact form <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-serif font-bold mb-4">What to Expect</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-medium mb-2">First Session</h4>
                  <p className="text-gray-600">
                    Our initial session focuses on understanding your story, current challenges, and goals for counseling. We'll discuss how faith and biblical principles can be integrated into your healing journey. This is also a time to ask questions and determine if we're a good fit.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-medium mb-2">Session Length</h4>
                  <p className="text-gray-600">
                    Individual sessions typically last 60 minutes, while couples sessions are 90 minutes. Group sessions are 120 minutes. The frequency of sessions will be determined based on your specific needs and goals.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-medium mb-2">Location Options</h4>
                  <p className="text-gray-600">
                    Sessions are available both in-person in Kampala, Uganda, and online via secure video conferencing for those who prefer remote counseling or live elsewhere.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-medium mb-2">Payment Information</h4>
                  <p className="text-gray-600">
                    Payment is expected at the time of service. I accept cash, mobile money, and bank transfers. A sliding scale fee may be available based on financial need.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section 
        title="Frequently Asked Questions" 
        backgroundColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-5">
              <h3 className="text-lg font-serif font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            "Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28
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
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700"
              >
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Counseling;