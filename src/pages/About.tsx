import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Heart, BookOpen } from 'lucide-react';

import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2086748/pexels-photo-2086748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Rev. Robert Bagoole
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dedicated to guiding others through life's challenges with faith, wisdom, and compassion.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3814539/pexels-photo-3814539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Rev. Robert Bagoole" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">My Journey</h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm Rev. Robert Bagoole, a Christian counselor with over 15 years of experience helping individuals find comfort, healing, and purpose through Christ's teachings.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My journey into counseling began when I experienced firsthand how faith-based guidance helped me overcome my own personal challenges. This experience ignited a passion in me to help others find the same comfort and direction that I discovered through God's word.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Today, I combine my theological training with professional counseling techniques to offer a holistic approach to healing—addressing spiritual, emotional, and mental wellbeing in a way that honors Christ's teachings.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-serif font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">
                <strong>Phone:</strong> +256 782 319 579 / +256 758 918 200
              </p>
              <p>
                <strong>Email:</strong> robertbgl@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Education & Qualifications */}
      <Section 
        title="Education & Qualifications" 
        backgroundColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Book size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Educational Background</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Master of Divinity, Uganda Christian University</li>
              <li>• Bachelor of Theology, Makerere University</li>
              <li>• Certificate in Christian Counseling, African Bible University</li>
              <li>• Advanced Training in Marriage and Family Therapy</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Award size={32} className="text-secondary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Certifications & Memberships</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Licensed Minister, Uganda Christian Council</li>
              <li>• Certified Biblical Counselor</li>
              <li>• Member, Association of Christian Counselors</li>
              <li>• Certified Trauma-Informed Care Provider</li>
              <li>• Youth Mentorship Program Director</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Philosophy & Approach */}
      <Section title="My Counseling Philosophy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-bold mb-4">A Christ-Centered Approach</h3>
            <p className="text-lg text-gray-700 mb-4">
              My counseling approach is built on the foundation that true healing and transformation come through a relationship with Christ. I believe the Bible provides timeless wisdom for today's challenges.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              While firmly rooted in scripture, I also incorporate evidence-based counseling techniques to address the whole person—spirit, mind, and body.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My goal is to create a safe, compassionate space where you can explore your challenges, discover God's purpose for your life, and develop practical skills to overcome obstacles with faith and confidence.
            </p>
            <div className="border-l-4 border-primary-500 pl-4 italic text-gray-600">
              "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/5980800/pexels-photo-5980800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Counseling Session" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* Areas of Expertise */}
      <Section 
        title="Areas of Expertise" 
        subtitle="My counseling practice focuses on several key areas where faith-based guidance can provide significant support and healing."
        backgroundColor="bg-primary-50"
        centerText
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Heart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Marriage & Family</h3>
            <p className="text-gray-600">
              Building strong, Christ-centered marriages and families through biblical principles, communication skills, and conflict resolution.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Spiritual Growth</h3>
            <p className="text-gray-600">
              Deepening your relationship with God, understanding His will, and growing in faith during both challenging and prosperous seasons.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Grief & Loss</h3>
            <p className="text-gray-600">
              Finding comfort and hope in Christ when navigating the difficult journey of loss, grief, and life transitions.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Anxiety & Depression</h3>
            <p className="text-gray-600">
              Addressing mental health challenges through a balanced approach of spiritual support, practical coping strategies, and professional guidance.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Youth Mentoring</h3>
            <p className="text-gray-600">
              Guiding young people to develop a strong faith foundation, make wise choices, and discover God's purpose for their lives.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Life Purpose</h3>
            <p className="text-gray-600">
              Discovering your unique calling and purpose through biblical principles and personal reflection.
            </p>
          </Card>
        </div>
      </Section>

      {/* Testimonial Quote */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote>
            <p className="text-2xl md:text-3xl font-serif italic mb-8">
              "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."
            </p>
          </blockquote>
          <p className="text-xl">Romans 8:38-39</p>
        </div>
      </Section>
    </>
  );
};

export default About;