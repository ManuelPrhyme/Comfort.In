import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Finding Peace in Troubling Times',
    excerpt: 'Practical ways to maintain your faith and find God\'s peace when facing life\'s greatest challenges.',
    category: 'Faith & Hope',
    date: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Strengthening Your Marriage Through Prayer',
    excerpt: 'How shared spiritual practices can transform your relationship and deepen your connection with your spouse.',
    category: 'Relationships',
    date: 'June 8, 2025',
    image: 'https://images.pexels.com/photos/8941077/pexels-photo-8941077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Overcoming Anxiety with Scripture',
    excerpt: 'Biblical verses and principles to help you combat worry and experience God\'s perfect peace.',
    category: 'Mental Health',
    date: 'May 29, 2025',
    image: 'https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Raising Children with Strong Faith',
    excerpt: 'Guidance for parents who want to instill biblical values and a love for God in their children.',
    category: 'Parenting',
    date: 'May 20, 2025',
    image: 'https://images.pexels.com/photos/8942988/pexels-photo-8942988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Healing from Past Trauma Through Faith',
    excerpt: 'How God\'s love and biblical principles can help you heal from painful experiences and find restoration.',
    category: 'Healing',
    date: 'May 12, 2025',
    image: 'https://images.pexels.com/photos/5615710/pexels-photo-5615710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Finding Your Purpose in Christ',
    excerpt: 'Discovering God\'s unique calling for your life and how to live with meaning and fulfillment.',
    category: 'Purpose',
    date: 'May 5, 2025',
    image: 'https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Sample categories
const categories = [
  'All',
  'Faith & Hope',
  'Relationships',
  'Mental Health',
  'Parenting',
  'Healing',
  'Purpose',
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Blog & Articles
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Wisdom, inspiration, and practical advice from a biblical perspective to help you navigate life\'s challenges.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-serif font-bold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
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

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="flex items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded object-cover mr-3"
                    />
                    <div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-sm font-medium hover:text-primary-600 transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-secondary-600 font-medium">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                        Read more <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category selection.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Scripture Banner */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote>
            <p className="text-2xl md:text-3xl font-serif italic mb-8">
              "Your word is a lamp for my feet, a light on my path."
            </p>
          </blockquote>
          <p className="text-xl">Psalm 119:105</p>
        </div>
      </Section>
    </>
  );
};

export default Blog;