import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Heart, MessageCircle, Users, ChevronRight } from 'lucide-react';

import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'Rev. Bagoole\'s counseling helped me through the most difficult time in my marriage. His wisdom and biblical guidance gave us the tools to rebuild our relationship.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'David K.',
      quote: 'The courses offered here provided practical steps to overcome anxiety using scripture. I\'ve found a new peace I never thought possible.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Grace T.',
      quote: 'I was struggling with purpose after retirement. Through counseling with Rev. Bagoole, I discovered God\'s calling for this new season of my life.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-primary-700 to-primary-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7648055/pexels-photo-7648055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find Comfort and Guidance Through Christ
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scripture guided services to help you navigate life's challenges with faith, hope, and purpose.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/counseling">
                <Button
                  variant="secondary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl"
                >
                  Book a Session
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <Section
        title="How We Can Help You"
        subtitle="At Comfort.In, we offer a range of services designed to support your spiritual, emotional, and mental well-being."
        centerText
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Counseling Service */}
          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Heart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Personal Counseling</h3>
            <p className="text-gray-600 mb-4">
              One-on-one sessions addressing personal challenges, spiritual growth, emotional healing, and finding God\'s purpose for your life.
            </p>
            <Link to="/counseling" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
              Learn more <ChevronRight size={16} className="ml-1" />
            </Link>
          </Card>

          {/* Courses Service */}
          <Card className="p-6">
            <div className="mb-4 bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-secondary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Biblical Courses</h3>
            <p className="text-gray-600 mb-4">
              Structured courses on various topics including marriage, parenting, overcoming anxiety, and building a stronger relationship with God.
            </p>
            <Link to="/courses" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
              View courses <ChevronRight size={16} className="ml-1" />
            </Link>
          </Card>

          {/* Group Sessions */}
          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Users size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Group Sessions</h3>
            <p className="text-gray-600 mb-4">
              Community-based support groups where you can share experiences, find encouragement, and grow together with others on similar journeys.
            </p>
            <Link to="/counseling" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
              Join a group <ChevronRight size={16} className="ml-1" />
            </Link>
          </Card>
        </div>
      </Section>

      {/* About Preview */}
      <Section backgroundColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Rev. Robert Bagoole" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
            >
              Meet Rev. Robert Bagoole
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6"
            >
              With over 15 years of experience in Christian ministry and counseling, Rev. Bagoole has helped countless individuals find healing, purpose, and renewed faith through Christ-centered guidance.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              His approach combines sound biblical principles with professional counseling techniques, creating a supportive environment where you can grow spiritually while addressing life\'s challenges.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/about#">
                <Button variant="primary">
                  About Rev. Robert Bagoole
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Blog Posts */}
      <Section
        title="Recent Blog Articles"
        subtitle="Wisdom, inspiration, and practical advice from a biblical perspective."
        centerText
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Finding Peace in Troubling Times" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-secondary-600 font-medium">Faith & Hope</span>
              <h3 className="text-xl font-serif font-bold mt-2 mb-3">Finding Peace in Troubling Times</h3>
              <p className="text-gray-600 mb-4">
                Practical ways to maintain your faith and find God\'s peace when facing life\'s greatest challenges.
              </p>
              <Link to="/blog/1" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                Read more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8941077/pexels-photo-8941077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Strengthening Your Marriage Through Prayer" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-secondary-600 font-medium">Relationships</span>
              <h3 className="text-xl font-serif font-bold mt-2 mb-3">Strengthening Your Marriage Through Prayer</h3>
              <p className="text-gray-600 mb-4">
                How shared spiritual practices can transform your relationship and deepen your connection.
              </p>
              <Link to="/blog/2" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                Read more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Overcoming Anxiety with Scripture" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-secondary-600 font-medium">Mental Health</span>
              <h3 className="text-xl font-serif font-bold mt-2 mb-3">Overcoming Anxiety with Scripture</h3>
              <p className="text-gray-600 mb-4">
                Biblical verses and principles to help you combat worry and experience God\'s perfect peace.
              </p>
              <Link to="/blog/3" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                Read more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline">
              View All Articles
            </Button>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="Testimonials"
        subtitle="Hear from those who have found comfort and guidance through our counseling services."
        centerText
        backgroundColor="bg-primary-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="text-primary-400 w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Begin Your Journey to Healing Today
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step toward finding comfort, peace, and purpose in your life through Christ-centered counseling.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/counseling">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Schedule Counseling
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;