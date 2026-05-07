import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const blogsData = [
  {
    id: 'missing-signals',
    titleNode: (
      <span style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontWeight: 700, letterSpacing: 'normal', textTransform: 'none' }}>
        Your ECG Is <em style={{ color: '#C0392B', fontStyle: 'italic' }}>120 Years Old.</em><br/>And It May Be Missing What Matters Most.
      </span>
    ),
    summary: 'The world\'s most trusted cardiac test has a blind spot at the very centre of the heart. Here\'s what it cannot see — and what now can.',
    readTime: '8 min read',
    category: 'Cardiac Diagnostics',
    author: 'ECPW India & PhysioSign USA'
  },
  {
    id: 'cardiac-crisis',
    titleNode: (
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#F0F4F8', fontWeight: 400, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
        India's <span style={{ color: '#E03E2D' }}>Silent</span> Cardiac <span style={{ color: '#D4A843' }}>Crisis</span>
      </span>
    ),
    summary: 'We are the world\'s heart attack capital — and most of us never get a warning. Why India\'s cardiac care gap is costing millions of lives, and what can change.',
    readTime: '10 min read',
    category: 'Public Health',
    author: 'ECPW India'
  },
  {
    id: '12sec-vs-5lakh',
    titleNode: (
      <span style={{ fontFamily: "'DM Serif Display', serif", color: 'white', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none' }}>
        The <span style={{ color: '#FF8A80', fontStyle: 'italic' }}>12-Second Test</span> That Could Replace a ₹5 Lakh Procedure
      </span>
    ),
    summary: 'For decades, detailed cardiac electrophysiology meant an invasive catheterisation. A long wait. A hospital admission. A bill most Indians cannot pay. That equation has changed.',
    readTime: '9 min read',
    category: 'Technology & Access',
    author: 'ECPW India & PhysioSign USA'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const BlogsCatalog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Perspectives</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Deep dives into cardiac diagnostics, healthcare economics, and the technology reshaping cardiovascular care in India and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogsData.map((blog) => (
            <motion.a
              href={`/blogs/${blog.id}`}
              key={blog.id}
              variants={itemVariants}
              className="group block"
            >
              <div className="h-full rounded-2xl glass p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] flex flex-col relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent">
                {/* Glow Effect on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-2xl leading-tight mb-4 group-hover:opacity-80 transition-opacity duration-300 relative z-10">
                  {blog.titleNode}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                  {blog.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {blog.author}
                    </span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white text-slate-400 transition-all duration-300 transform group-hover:scale-110">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsCatalog;
