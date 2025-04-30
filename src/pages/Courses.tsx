import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Sample course data
const coursesData = [
  {
    id: 1,
    title: 'Biblical Foundations for Marriage',
    description: 'Discover God\'s design for marriage and practical ways to build a Christ-centered relationship that thrives through all seasons of life.',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 158,
    category: 'Relationships',
    image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Overcoming Anxiety Through Faith',
    description: 'Learn practical biblical strategies to manage anxiety, worry, and fear by applying God\'s promises and developing spiritual disciplines.',
    level: 'Beginner',
    duration: '4 weeks',
    students: 224,
    category: 'Mental Health',
    image: 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Raising Godly Children',
    description: 'Equip yourself with biblical principles and practical tools for raising children who love God and develop strong faith foundations.',
    level: 'Intermediate',
    duration: '5 weeks',
    students: 146,
    category: 'Parenting',
    image: 'https://images.pexels.com/photos/6456270/pexels-photo-6456270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Healing from Past Wounds',
    description: 'A biblical approach to healing from emotional wounds, trauma, and past hurts through God\'s restorative power and forgiveness.',
    level: 'Advanced',
    duration: '8 weeks',
    students: 192,
    category: 'Healing',
    image: 'https://images.pexels.com/photos/1329292/pexels-photo-1329292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Discovering Your God-Given Purpose',
    description: 'Explore how to identify and fulfill God\'s unique calling for your life by understanding your spiritual gifts, passions, and life experiences.',
    level: 'Beginner',
    duration: '6 weeks',
    students: 210,
    category: 'Purpose',
    image: 'https://images.pexels.com/photos/1303810/pexels-photo-1303810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Biblical Financial Stewardship',
    description: 'Learn how to manage your finances according to biblical principles, including budgeting, giving, saving, and debt management.',
    level: 'Intermediate',
    duration: '4 weeks',
    students: 135,
    category: 'Finances',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Sample categories
const categories = [
  'All',
  'Relationships',
  'Mental Health',
  'Parenting',
  'Healing',
  'Purpose',
  'Finances',
];

// Sample levels
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Filter courses based on search term, category, and level
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Biblical Courses
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Deepen your faith and gain practical wisdom through our biblically-based courses designed to help you grow spiritually and navigate life's challenges.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Courses Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-serif font-bold mb-4">Search Courses</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  <Search size={18} />
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-serif font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Levels */}
            <div className="mb-8">
              <h3 className="text-lg font-serif font-bold mb-4">Level</h3>
              <ul className="space-y-2">
                {levels.map((level) => (
                  <li key={level}>
                    <button
                      onClick={() => setSelectedLevel(level)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedLevel === level
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {level}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Course */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-4">Featured Course</h3>
              <img
                src="https://images.pexels.com/photos/6456270/pexels-photo-6456270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Raising Godly Children"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="font-medium mb-2">Raising Godly Children</h4>
              <p className="text-sm text-gray-600 mb-4">
                Equip yourself with biblical principles for raising children who love God.
              </p>
              <Link to="/courses/3">
                <Button variant="primary" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Courses List */}
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-secondary-600 font-medium">{course.category}</span>
                        <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={16} className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users size={16} className="mr-1" />
                          {course.students} students
                        </div>
                      </div>
                      <Link to={`/courses/${course.id}`} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                        View Course <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Our courses provide excellent biblical teaching, but sometimes you need personalized counseling to address specific challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
      </Section>
    </>
  );
};

export default Courses;