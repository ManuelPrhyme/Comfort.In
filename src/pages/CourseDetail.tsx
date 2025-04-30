import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Sample courses data
const coursesData = {
  '1': {
    id: 1,
    title: 'Biblical Foundations for Marriage',
    description: 'Discover God\'s design for marriage and practical ways to build a Christ-centered relationship that thrives through all seasons of life.',
    fullDescription: 'This comprehensive course explores God\'s blueprint for marriage as revealed in Scripture, from Genesis to Revelation. You\'ll gain practical insights into building and maintaining a Christ-centered relationship that can weather life\'s challenges and grow stronger through every season. Through biblical teaching, real-life examples, and practical exercises, couples will learn how to communicate effectively, resolve conflicts in healthy ways, cultivate spiritual intimacy, and create a legacy of faith together.',
    level: 'Intermediate',
    duration: '6 weeks',
    sessions: 12,
    students: 158,
    category: 'Relationships',
    instructor: 'Rev. Robert Bagoole',
    price: '$120',
    enrollmentStatus: 'Open',
    startDate: 'July 10, 2025',
    image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'God\'s Original Design',
        description: 'Exploring marriage from Genesis and God\'s intentions for the covenant relationship.',
        lessons: [
          'The Creation of Marriage in Genesis',
          'Understanding Covenant vs. Contract',
          'God\'s Purposes for Marriage',
        ]
      },
      {
        week: 2,
        title: 'Biblical Roles in Marriage',
        description: 'Understanding complementary roles within a Christ-centered marriage.',
        lessons: [
          'Servant Leadership and Loving Headship',
          'Mutual Submission and Respect',
          'Moving Beyond Cultural Stereotypes',
        ]
      },
      {
        week: 3,
        title: 'Communication That Connects',
        description: 'Biblical principles for healthy, Christ-centered communication.',
        lessons: [
          'Speaking Truth in Love',
          'Active Listening as Ministry',
          'Navigating Difficult Conversations',
        ]
      },
      {
        week: 4,
        title: 'Conflict Resolution God\'s Way',
        description: 'Biblical strategies for resolving conflicts and growing through challenges.',
        lessons: [
          'The Role of Forgiveness and Grace',
          'Practical Steps to Healthy Resolution',
          'Growing Through Conflict',
        ]
      },
      {
        week: 5,
        title: 'Cultivating Spiritual Intimacy',
        description: 'Building a shared faith foundation as the cornerstone of your marriage.',
        lessons: [
          'Praying Together Effectively',
          'Studying Scripture as a Couple',
          'Creating Spiritual Rhythms in Your Home',
        ]
      },
      {
        week: 6,
        title: 'Building a Marriage Legacy',
        description: 'Extending the impact of your marriage to future generations.',
        lessons: [
          'Leaving a Legacy of Faith',
          'Mentoring Other Couples',
          'Renewal of Vows and Commitment',
        ]
      },
    ],
    requirements: [
      'Open to married couples of all ages and stages',
      'Singles seriously considering marriage are also welcome',
      'Willingness to participate in discussions and exercises',
      'Basic understanding of Christian faith principles',
    ],
    highlights: [
      'Biblical teaching on marriage principles',
      'Practical communication tools and exercises',
      'Conflict resolution strategies',
      'Individual and couple reflection activities',
      'Community support and discussion',
      'Prayer and Scripture application',
    ],
    testimonials: [
      {
        name: 'James & Sarah K.',
        quote: 'This course transformed our marriage. We\'ve been married for 12 years but never understood God\'s design for our relationship until now.',
        image: 'https://images.pexels.com/photos/4609026/pexels-photo-4609026.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Michael & Grace T.',
        quote: 'The practical communication tools alone were worth the investment. We\'re finally having conversations that lead to understanding rather than arguments.',
        image: 'https://images.pexels.com/photos/5622347/pexels-photo-5622347.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ]
  },
  '2': {
    id: 2,
    title: 'Overcoming Anxiety Through Faith',
    description: 'Learn practical biblical strategies to manage anxiety, worry, and fear by applying God\'s promises and developing spiritual disciplines.',
    fullDescription: 'This course addresses the growing challenge of anxiety from a biblical perspective, offering both spiritual insights and practical tools. You\'ll explore what Scripture teaches about worry, fear, and God\'s peace, while developing a toolkit of spiritual practices that can help calm your mind and heart. The course integrates biblical wisdom with evidence-based approaches to anxiety management, creating a holistic path toward greater peace and trust in God\'s faithfulness.',
    level: 'Beginner',
    duration: '4 weeks',
    sessions: 8,
    students: 224,
    category: 'Mental Health',
    instructor: 'Rev. Robert Bagoole',
    price: '$85',
    enrollmentStatus: 'Open',
    startDate: 'July 15, 2025',
    image: 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'Understanding Anxiety from a Biblical Perspective',
        description: 'Exploring what Scripture teaches about worry, fear, and peace.',
        lessons: [
          'What the Bible Says About Anxiety',
          'The Difference Between Worry and Concern',
          'God\'s Promises for Peace',
        ]
      },
      {
        week: 2,
        title: 'Renewing Your Mind',
        description: 'Practical strategies for transforming thought patterns using Scripture.',
        lessons: [
          'Identifying Anxious Thoughts',
          'Scripture Meditation Techniques',
          'Replacing Lies with Truth',
        ]
      },
      {
        week: 3,
        title: 'Spiritual Practices for Peace',
        description: 'Developing daily disciplines that foster God\'s peace.',
        lessons: [
          'Prayer as an Anxiety Antidote',
          'Creating a Personal Worship Practice',
          'Sabbath Rest and Anxiety',
        ]
      },
      {
        week: 4,
        title: 'Building Your Faith When Facing Fear',
        description: 'Practical steps for walking in faith during anxious seasons.',
        lessons: [
          'Practicing God\'s Presence in Panic',
          'Community Support and Vulnerability',
          'Creating Your Personal Peace Plan',
        ]
      },
    ],
    requirements: [
      'Open to anyone experiencing anxiety or supporting others with anxiety',
      'No prior knowledge required',
      'Willingness to practice new spiritual disciplines',
      'Journal for reflection exercises',
    ],
    highlights: [
      'Biblical exploration of anxiety and peace',
      'Practical scripture application',
      'Breath prayer and meditation techniques',
      'Cognitive restructuring through God\'s Word',
      'Community support and accountability',
      'Personal peace plan development',
    ],
    testimonials: [
      {
        name: 'David M.',
        quote: 'After years of struggling with anxiety, I\'ve finally found strategies that actually work because they address my spiritual life as well as my thought patterns.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Rebecca L.',
        quote: 'The scripture memorization practices have been transformative. When panic starts to rise, I now have God\'s promises ready in my mind and heart.',
        image: 'https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ]
  },
  '3': {
    id: 3,
    title: 'Raising Godly Children',
    description: 'Equip yourself with biblical principles and practical tools for raising children who love God and develop strong faith foundations.',
    fullDescription: 'Parenting is one of life\'s greatest privileges and challenges. This course offers a comprehensive biblical framework for raising children who love God and others. You\'ll explore Scripture\'s guidance for parents while gaining practical age-appropriate strategies for nurturing your child\'s faith from infancy through adolescence. The course addresses common parenting challenges through a biblical lens and helps you create a home environment where faith can flourish naturally.',
    level: 'Intermediate',
    duration: '5 weeks',
    sessions: 10,
    students: 146,
    category: 'Parenting',
    instructor: 'Rev. Robert Bagoole',
    price: '$95',
    enrollmentStatus: 'Open',
    startDate: 'August 5, 2025',
    image: 'https://images.pexels.com/photos/6456270/pexels-photo-6456270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'Biblical Foundations of Parenting',
        description: 'Understanding God\'s design for family and parental responsibility.',
        lessons: [
          'Parenting as Discipleship',
          'God\'s Heart for Children',
          'Parental Authority and Stewardship',
        ]
      },
      {
        week: 2,
        title: 'Nurturing Faith in Young Children (Ages 0-5)',
        description: 'Age-appropriate approaches to introducing faith concepts to little ones.',
        lessons: [
          'Creating Simple Faith Routines',
          'Teaching Through Everyday Moments',
          'Age-Appropriate Bible Stories and Activities',
        ]
      },
      {
        week: 3,
        title: 'Building Strong Foundations (Ages 6-12)',
        description: 'Developing biblical literacy and character during the formative years.',
        lessons: [
          'Moving from Stories to Biblical Concepts',
          'Answering Tough Questions',
          'Cultivating Service and Compassion',
        ]
      },
      {
        week: 4,
        title: 'Guiding Teens Toward Authentic Faith',
        description: 'Navigating the challenges of adolescence with biblical wisdom.',
        lessons: [
          'From Rules to Relationship',
          'Addressing Doubts and Questions',
          'Preparing Teens for Worldview Challenges',
        ]
      },
      {
        week: 5,
        title: 'Creating a Home of Grace and Truth',
        description: 'Practical ways to establish a family culture centered on Christ.',
        lessons: [
          'Discipline That Disciples',
          'Family Worship and Traditions',
          'Building a Legacy of Faith',
        ]
      },
    ],
    requirements: [
      'Open to parents, grandparents, and guardians of children of any age',
      'Expectant parents and those planning for future children are welcome',
      'Basic understanding of Christian faith principles',
      'Willingness to implement new practices at home',
    ],
    highlights: [
      'Age-specific parenting strategies',
      'Practical discipline approaches',
      'Faith conversation starters',
      'Family devotional resources',
      'Bible teaching methods for different ages',
      'Crisis response from a biblical perspective',
    ],
    testimonials: [
      {
        name: 'Thomas & Ruth N.',
        quote: 'This course gave us practical tools we were able to implement immediately with our three children, from our teenager down to our toddler.',
        image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Margaret W.',
        quote: 'As a single mother, I felt overwhelmed by the responsibility of raising my children in faith. This course provided both biblical guidance and practical routines I could manage on my own.',
        image: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ]
  },
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor'>('overview');
  const [expanded, setExpanded] = useState<number[]>([]);
  
  const course = id ? coursesData[id as '1' | '2' | '3'] : null;
  
  // Toggle curriculum week expansion
  const toggleWeek = (weekIndex: number) => {
    if (expanded.includes(weekIndex)) {
      setExpanded(expanded.filter(i => i !== weekIndex));
    } else {
      setExpanded([...expanded, weekIndex]);
    }
  };
  
  // If course doesn't exist, show a message
  if (!course) {
    return (
      <Section>
        <div className="text-center py-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-8">The course you're looking for might have been moved or deleted.</p>
          <Link to="/courses">
            <Button variant="primary">Browse All Courses</Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-white hover:text-secondary-300 transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </Link>
          <div className="max-w-3xl">
            <motion.span 
              className="inline-block bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {course.category}
            </motion.span>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {course.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap items-center text-gray-200 text-sm gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                {course.duration}
              </span>
              <span className="flex items-center">
                <BookOpen size={16} className="mr-1" />
                {course.sessions} Sessions
              </span>
              <span className="flex items-center">
                <Users size={16} className="mr-1" />
                {course.students} Students
              </span>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Course Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  className={`px-4 py-2 font-medium whitespace-nowrap border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-4 py-2 font-medium whitespace-nowrap border-b-2 ${
                    activeTab === 'curriculum'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
                <button
                  className={`px-4 py-2 font-medium whitespace-nowrap border-b-2 ${
                    activeTab === 'instructor'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('instructor')}
                >
                  Instructor
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">About This Course</h2>
                  <div className="mb-8">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <p className="text-lg text-gray-700 mb-6">
                      {course.fullDescription}
                    </p>
                  </div>
                  
                  {/* Course Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-serif font-bold mb-4">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-secondary-500 mr-2 mt-1 shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Requirements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-serif font-bold mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle size={18} className="text-primary-500 mr-2 mt-1 shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Testimonials */}
                  {course.testimonials && course.testimonials.length > 0 && (
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-4">Student Testimonials</h3>
                      <div className="grid grid-cols-1 gap-6">
                        {course.testimonials.map((testimonial, index) => (
                          <Card key={index} className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
                              />
                              <div>
                                <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                                <span className="font-medium">{testimonial.name}</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Course Curriculum</h2>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((week, weekIndex) => (
                      <div key={weekIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                          onClick={() => toggleWeek(weekIndex)}
                        >
                          <div>
                            <h3 className="font-medium">Week {week.week}: {week.title}</h3>
                            <p className="text-sm text-gray-500">{week.description}</p>
                          </div>
                          <span className="text-primary-600">
                            {expanded.includes(weekIndex) ? '-' : '+'}
                          </span>
                        </button>
                        
                        {expanded.includes(weekIndex) && (
                          <div className="p-4 border-t border-gray-200">
                            <h4 className="font-medium mb-2">Lessons:</h4>
                            <ul className="space-y-2">
                              {week.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-start">
                                  <BookOpen size={16} className="text-primary-500 mr-2 mt-1 shrink-0" />
                                  <span className="text-gray-700">{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Instructor Tab */}
              {activeTab === 'instructor' && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Meet Your Instructor</h2>
                  
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                    <img 
                      src="https://images.pexels.com/photos/3814539/pexels-photo-3814539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Rev. Robert Bagoole" 
                      className="w-32 h-32 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Rev. Robert Bagoole</h3>
                      <p className="text-primary-600 mb-4">Christian Counselor and Biblical Teacher</p>
                      <p className="text-gray-700 mb-4">
                        Rev. Robert Bagoole is a seasoned Christian counselor with over 15 years of experience helping individuals and families navigate life's challenges through biblical principles and practical guidance.
                      </p>
                      <p className="text-gray-700 mb-4">
                        He holds a Master of Divinity from Uganda Christian University and has extensive training in biblical counseling, family therapy, and pastoral care. His teaching style combines deep scriptural insights with practical application, making complex biblical concepts accessible and relevant for everyday life.
                      </p>
                      <Link to="/about" className="text-primary-600 font-medium hover:underline">
                        Learn more about Rev. Bagoole
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-lg font-serif font-bold mb-3">Instructor's Approach</h3>
                    <p className="text-gray-700 mb-4">
                      "My goal in every course is to help you apply God's timeless truths to your specific situation. We'll dig deep into Scripture while remaining practical and focused on real-life application. I believe that God's Word provides the wisdom we need for every challenge, and I'm committed to helping you discover how to live out biblical principles in your daily life."
                    </p>
                    <p className="italic text-gray-600">— Rev. Robert Bagoole</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md sticky top-24">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">{course.price}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    course.enrollmentStatus === 'Open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.enrollmentStatus}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions:</span>
                    <span className="font-medium">{course.sessions} sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-medium">{course.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{course.students} enrolled</span>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full mb-4"
                >
                  Enroll Now
                </Button>
                
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Courses */}
      <Section 
        title="You May Also Like" 
        backgroundColor="bg-gray-50"
        centerText
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(coursesData)
            .filter(relatedCourse => relatedCourse.id !== course.id)
            .map(relatedCourse => (
              <Card key={relatedCourse.id} className="overflow-hidden">
                <img 
                  src={relatedCourse.image} 
                  alt={relatedCourse.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-secondary-600 font-medium">{relatedCourse.category}</span>
                    <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                      {relatedCourse.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{relatedCourse.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {relatedCourse.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {relatedCourse.duration}
                    </div>
                    <span className="text-primary-600 font-bold">{relatedCourse.price}</span>
                  </div>
                  <Link to={`/courses/${relatedCourse.id}`}>
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      View Course
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Deepen Your Understanding?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Enroll today and begin your journey of growth and transformation through biblical teaching.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700"
              >
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CourseDetail;