import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BookOpen, Monitor, Globe, Award, 
  ArrowRight, Landmark, Library, FlaskConical 
} from 'lucide-react';

const ProgramSearch = () => {
  const quickLinks = [
    { name: 'Graduate Program', icon: <BookOpen />, color: '#4b2c85' },
    { name: 'Undergraduate', icon: <Award />, color: '#3355a1' },
    { name: 'Online Education', icon: <Monitor />, color: '#1e7e34' },
    { name: 'Research Lab', icon: <FlaskConical />, color: '#800000' }
  ];

  const tags = ['CSE', 'Civil', 'EEE', 'Textile', 'BBA', 'LLB', 'MBA'];

  return (
    <div className="relative -mt-16 z-30 container mx-auto">
      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickLinks.map((link, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col justify-between group cursor-pointer border border-gray-50"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-inner transition-transform group-hover:scale-110"
              style={{ backgroundColor: link.color }}
            >
              {link.icon}
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 text-[#1B164D] leading-tight">{link.name}</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                Explore More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </p>
            </div>
            <div className="h-1.5 w-1/4 rounded-full transition-all group-hover:w-full" style={{ backgroundColor: link.color }} />
          </motion.div>
        ))}
      </div>

      {/* Program Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1B164D] p-10 lg:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-10 text-white pointer-events-none">
           <Search size={200} strokeWidth={8} />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tighter leading-tight">
            Find Your <span className="text-[#3355a1]">Dream Program</span> at Sonargaon
          </h2>
          
          <div className="relative flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input 
                type="text" 
                placeholder="What do you want to study? (e.g. CSE, Civil, MBA)"
                className="w-full bg-white border-none py-6 pl-16 pr-8 rounded-2xl text-lg font-bold text-[#1B164D] placeholder:text-gray-400 focus:ring-4 focus:ring-[#3355a1]/50 transition-all outline-none"
              />
            </div>
            <button className="bg-[#1e7e34] text-white px-10 py-6 rounded-2xl font-black text-lg uppercase tracking-wider hover:bg-opacity-90 transition-all whitespace-nowrap shadow-xl">
              Search Now
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
             <span className="text-white/60 font-black text-xs uppercase tracking-widest mr-2">Top Programs:</span>
             {tags.map((tag, i) => (
               <button 
                key={i} 
                className="bg-white/10 text-white px-5 py-2.5 rounded-full text-xs font-black hover:bg-white hover:text-[#1B164D] transition-all tracking-wider"
               >
                 {tag}
               </button>
             ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramSearch;
