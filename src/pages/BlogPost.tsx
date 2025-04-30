import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Sample blog post data (this would typically come from an API)
const blogPostsData = {
  '1': {
    id: 1,
    title: 'Finding Peace in Troubling Times',
    content: [
      'In today\'s fast-paced and often chaotic world, finding peace can seem like an impossible task. We are constantly bombarded with news of global crises, personal challenges, and uncertainty about the future. Yet, as Christians, we have access to a peace that transcends all understanding—a divine peace that comes from God Himself.',
      'The Bible tells us in Philippians 4:6-7, "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."',
      'This promise is not just a comforting thought but a practical reality we can experience daily. Here are some biblical principles to help you find and maintain peace, especially during difficult times:',
      '1. Fix Your Focus on God, Not Circumstances',
      'When Peter walked on water toward Jesus, he was fine until he shifted his focus to the raging storm around him (Matthew 14:22-33). Similarly, our peace is directly connected to where we place our attention. By fixing our eyes on Jesus rather than our problems, we maintain a proper perspective that fosters peace.',
      '2. Practice Gratitude Daily',
      'Thankfulness is a powerful antidote to anxiety. When we count our blessings, even in the midst of trials, we acknowledge God\'s faithfulness in our lives. This shifts our mindset from what\'s wrong to what\'s right, from what we lack to what we have.',
      '3. Immerse Yourself in Scripture',
      'God\'s Word is living and active (Hebrews 4:12). When we meditate on Scripture, we renew our minds and align our thinking with God\'s truth. Choose a few peace-related verses to memorize and recall when anxiety strikes.',
      '4. Surrender Through Prayer',
      'Peace comes through surrender—acknowledging that God is in control even when life feels chaotic. Through prayer, we release our burdens to God and receive His peace in exchange. As you pray, visualize yourself physically handing your concerns over to God.',
      '5. Create Quiet Spaces',
      'In our noisy world, silence has become a rare commodity. Yet it\'s often in quietness that we hear God\'s voice most clearly. Establish a daily quiet time—even just 15 minutes—to be still before God without distractions.',
      'Remember that finding peace is not about the absence of troubles but about the presence of God in the midst of them. Jesus Himself told us, "In this world you will have trouble. But take heart! I have overcome the world" (John 16:33).',
      'As you implement these practices, be patient with yourself. Building a peaceful heart is a process, not an instant achievement. In time, you\'ll find yourself better equipped to face life\'s challenges with the unshakable peace that only Christ can provide.',
    ],
    author: 'Rev. Robert Bagoole',
    date: 'June 15, 2025',
    category: 'Faith & Hope',
    image: 'https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    relatedPosts: [2, 3, 5],
  },
  '2': {
    id: 2,
    title: 'Strengthening Your Marriage Through Prayer',
    content: [
      'Prayer is one of the most powerful tools available to strengthen and transform your marriage. When couples pray together, they invite God into the center of their relationship, creating a spiritual bond that transcends human understanding.',
      'The Bible says in Ecclesiastes 4:12, "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken." When you and your spouse invite God to be the third strand in your marriage through prayer, you create a bond that is significantly stronger than what you could achieve on your own.',
      'Here are practical ways to strengthen your marriage through prayer:',
      '1. Start Each Day with Shared Prayer',
      'Even just five minutes of prayer together in the morning can set a positive tone for your entire day. Thank God for each other, ask for His guidance, and commit your day to Him. This simple practice creates spiritual intimacy and helps you face the day\'s challenges as a united team.',
      '2. Pray for Your Spouse Daily',
      'Develop the habit of praying for your spouse\'s specific needs, challenges, and growth—even when you\'re not physically together. This cultivates a spirit of selflessness and genuine care for your partner\'s wellbeing.',
      '3. Pray Through Conflicts',
      'When disagreements arise (and they will), try taking a timeout to pray individually before continuing the discussion. Then, come together and pray aloud about the issue before resuming your conversation. This invites God\'s wisdom and often softens hearts on both sides.',
      '4. Create a Prayer Journal for Your Marriage',
      'Keep a shared journal where you write down prayer requests, answered prayers, and spiritual insights. Regularly reviewing this journal will help you see God\'s faithfulness in your marriage over time.',
      '5. Attend Church and Worship Together',
      'Corporate worship strengthens your individual faith walks as well as your bond as a couple. Make church attendance a non-negotiable priority in your weekly schedule.',
      'Remember that prayer is not just about asking God for things; it\'s about aligning your hearts with His will for your marriage. As you pray together, you\'ll likely find your priorities shifting, your understanding of each other deepening, and your commitment to your marriage covenant strengthening.',
      'If praying together feels awkward at first, start small. Perhaps begin by holding hands and each saying a short, one-sentence prayer before meals. As you grow more comfortable, gradually increase the depth and duration of your prayer times.',
      'The transformation won\'t happen overnight, but as you consistently invite God into your marriage through prayer, you\'ll build a relationship that not only survives life\'s challenges but thrives amid them.',
    ],
    author: 'Rev. Robert Bagoole',
    date: 'June 8, 2025',
    category: 'Relationships',
    image: 'https://images.pexels.com/photos/8941077/pexels-photo-8941077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    relatedPosts: [1, 4, 6],
  },
  '3': {
    id: 3,
    title: 'Overcoming Anxiety with Scripture',
    content: [
      'Anxiety has become an epidemic in our modern world. The constant pressures of work, relationships, health concerns, and global events can leave us feeling overwhelmed and fearful about the future. While medical and therapeutic approaches to anxiety are important and valuable, as Christians, we also have access to powerful spiritual resources—particularly the truths found in Scripture.',
      'The Bible addresses anxiety directly and provides both comfort and practical guidance for those struggling with it. God\'s Word reminds us that anxiety is not part of His design for our lives, and He has provided ways for us to experience His peace even in difficult circumstances.',
      'Here are some key Scripture passages and principles to help combat anxiety:',
      '1. Recognize God\'s Care for You (1 Peter 5:7)',
      '"Cast all your anxiety on him because he cares for you."',
      'This verse reminds us that we don\'t have to carry our worries alone. God invites us to transfer the weight of our concerns to Him. The word "cast" here is active—it requires a deliberate decision to release our anxieties to God rather than continuing to bear them ourselves.',
      '2. Exchange Worry for Prayer (Philippians 4:6-7)',
      '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."',
      'This passage offers a clear alternative to anxiety: prayer with thanksgiving. Notice that peace is promised as a result—not necessarily the resolution of our problems, but internal calm regardless of external circumstances.',
      '3. Focus on Today\'s Concerns (Matthew 6:34)',
      '"Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',
      'Jesus teaches us to live one day at a time. Much of our anxiety comes from projecting fears into a future that hasn\'t arrived yet. By focusing on today\'s concerns rather than tomorrow\'s possibilities, we can reduce our anxiety significantly.',
      '4. Renew Your Mind (Romans 12:2)',
      '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind."',
      'Anxiety often stems from thought patterns that are contrary to God\'s truth. By intentionally filling our minds with Scripture and aligning our thinking with God\'s perspective, we can transform our response to anxiety-producing situations.',
      '5. Remember God\'s Faithfulness (Lamentations 3:22-23)',
      '"Because of the LORD\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."',
      'Recalling God\'s past faithfulness gives us confidence in His ongoing care. Keep a journal of how God has worked in your life, and review it when anxiety strikes.',
      'Practical Application:',
      '• Choose 3-5 verses that speak to your specific fears and memorize them',
      '• When anxious thoughts arise, speak these verses aloud',
      '• Practice "thought stopping"—intentionally replacing anxious thoughts with biblical truths',
      '• Start a gratitude journal to shift your focus from worries to blessings',
      '• Find a prayer partner who can support you and remind you of God\'s promises',
      'Remember that overcoming anxiety is typically not an instant process but a journey. There may be times when additional help from pastors, counselors, or medical professionals is needed, and seeking such help is both wise and biblical.',
      'As you consistently apply these scriptural principles, you\'ll develop new thought patterns that lead to greater peace and a deeper trust in God\'s loving care for you.',
    ],
    author: 'Rev. Robert Bagoole',
    date: 'May 29, 2025',
    category: 'Mental Health',
    image: 'https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    relatedPosts: [1, 5, 6],
  },
};

// Find related posts
const getRelatedPosts = (postId: string) => {
  const post = blogPostsData[postId];
  if (!post || !post.relatedPosts) return [];

  return post.relatedPosts.map((id) => blogPostsData[id]);
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;
  
  // If post doesn't exist, show a message
  if (!post) {
    return (
      <Section>
        <div className="text-center py-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">The article you\'re looking for might have been moved or deleted.</p>
          <Link to="/blog">
            <Button variant="primary">Return to Blog</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const relatedPosts = getRelatedPosts(id || '');

  return (
    <>
      {/* Hero Section with Article Image */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-white hover:text-secondary-300 transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <motion.span 
              className="inline-block bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {post.category}
            </motion.span>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>
            <motion.div 
              className="flex items-center text-gray-200 text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="flex items-center mr-4">
                <User size={16} className="mr-1" />
                {post.author}
              </span>
              <span className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Tag size={16} className="mr-1" />
                {post.category}
              </span>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-serif font-bold mb-4">Share This Article</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-serif font-bold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/3814539/pexels-photo-3814539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Rev. Robert Bagoole"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{post.author}</h4>
                  <p className="text-sm text-gray-500">Christian Counselor</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Rev. Robert Bagoole is a dedicated Christian counselor with over 15 years of experience helping individuals find peace through Christ\'s teachings.
              </p>
              <Link to="/about" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                Learn more about Rev. Bagoole
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.id} className="flex items-center">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-16 h-16 rounded object-cover mr-3"
                      />
                      <div>
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="text-sm font-medium hover:text-primary-600 transition-colors line-clamp-2"
                        >
                          {relatedPost.title}
                        </Link>
                        <span className="text-xs text-gray-500">{relatedPost.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPost;