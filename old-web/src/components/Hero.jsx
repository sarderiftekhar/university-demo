import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Star, Users } from 'lucide-react';
import studentImg from '../assets/student-cutout.png';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#f8f9fa] overflow-hidden pt-20 pb-0">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] font-black uppercase tracking-tighter text-[#4b2c85] leading-none whitespace-nowrap"
        >
          SONARGAON
        </motion.h1>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 bg-[#4b2c85]/10 text-[#4b2c85] px-4 py-2 rounded-full mb-6">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-black uppercase tracking-widest">Top Rated University</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-[#1B164D] leading-[0.9] mb-8 tracking-tighter">
            The best place to <span className="text-[#4b2c85]">invest</span> in your <span className="relative inline-block">
              knowledge
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-2 left-0 h-3 bg-[#1e7e34]/20 -z-10"
              />
            </span>
          </h1>
          
          <p className="text-lg text-[#6c757d] mb-10 max-w-lg font-medium leading-relaxed">
            Welcome to Sonargaon University. Use the search bar below to explore our diverse range of engineering, business, and arts programs.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#800000] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-2xl flex items-center gap-3"
            >
              Online Admission <ArrowRight size={20} />
            </motion.button>
            
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#4b2c85] group-hover:bg-[#4b2c85] group-hover:text-white transition-all">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="font-black uppercase tracking-widest text-[#1B164D]">Take a Tour</span>
            </button>
          </div>

          {/* Quick Stats Grid Overlay */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#3355a1]/10 flex items-center justify-center text-[#3355a1]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xl">World Class</h4>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Education Quality</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1e7e34]/10 flex items-center justify-center text-[#1e7e34]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xl">Certified</h4>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Faculty Members</p>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Right Visuals */}
        <div className="relative h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-10">
          {/* Main Subject Image Container */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-20 w-fit"
          >
            {/* Using a placeholder for now due to image generation tool limit, will update with real Indian Female student image */}
            <div className="relative">
               <img 
                src={studentImg} 
                alt="Sonargaon University Student" 
                className="max-h-[85vh] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] rounded-b-none"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />
              
              {/* Floating Community Card */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-[20%] right-[-10%] lg:right-[-20%] bg-white p-6 rounded-3xl shadow-[-20px_20px_60px_rgba(0,0,0,0.1)] max-w-[280px] border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-2xl bg-[#4b2c85] flex items-center justify-center text-white">
                      <Users size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-[#4b2c85]">Community</p>
                     <p className="text-sm font-black text-[#1B164D]">15k+ Students Joined</p>
                   </div>
                </div>
                <p className="text-xs font-medium text-gray-500 mb-4 leading-relaxed">
                  Join our vibrant community of scholars and researchers at the heart of Sonargaon...
                </p>
                <a href="#" className="text-xs font-black text-[#800000] flex items-center gap-2 hover:gap-3 transition-all">
                  View Community <ArrowRight size={14} />
                </a>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-[10%] left-[-10%] w-24 h-24 bg-[#3355a1]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[10%] right-[-10%] w-32 h-32 bg-[#1e7e34]/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
