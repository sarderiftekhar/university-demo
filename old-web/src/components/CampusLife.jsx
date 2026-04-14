import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, ArrowRight, Building2, Users2, Library, Trophy } from 'lucide-react';

const CampusLife = () => {
  const facilities = [
    { title: 'Modern Library', icon: <Library size={24} />, desc: 'Over 100k+ Books & Digital Resources' },
    { title: 'Advanced Labs', icon: <Building2 size={24} />, desc: 'High-Tech Engineering & Science Labs' },
    { title: 'Student Clubs', icon: <Users2 size={24} />, desc: '20+ Active Societies & Cultural Clubs' },
    { title: 'Sports Arena', icon: <Trophy size={24} />, desc: 'Indoor & Outdoor Sports Facilities' }
  ];

  return (
    <section className="bg-gray-50/50 py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Leftside Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
               <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop" 
                alt="Sonargaon University Campus" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B164D] via-[#1B164D]/20 to-transparent flex flex-col justify-end p-12">
                 <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-6"
                 >
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 hover:bg-[#800000] hover:scale-110 transition-all duration-500">
                     <Play size={24} fill="currentColor" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-black text-white leading-tight">Virtual Campus Tour</h3>
                     <p className="text-sm font-black text-white/60 uppercase tracking-widest mt-1">Watch Video & Experience SU</p>
                   </div>
                 </motion.div>
              </div>
            </div>

            {/* Floating Stats Label */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-10"
            >
               <div className="w-12 h-12 rounded-2xl bg-[#1e7e34] flex items-center justify-center text-white">
                 <CheckCircle2 size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-[#1e7e34]">Certified</p>
                 <p className="text-sm font-black text-[#1B164D]">UGC Approved University</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Rightside Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 text-[#4b2c85] font-black uppercase tracking-[0.3em] mb-6 text-xs">
              <span className="w-10 h-0.5 bg-[#4b2c85]"></span> EXPERIENCE SU
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1B164D] mb-10 tracking-tighter leading-tight">
              State of the <span className="text-[#3355a1]">Art</span> Facilities
            </h2>
            <p className="text-[#6c757d] mb-12 max-w-lg font-medium leading-relaxed">
              At Sonargaon University, we believe that education extends beyond the classroom. Our campus life is designed to foster innovation, social responsibility, and personal growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
               {facilities.map((fac, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xl text-[#3355a1] group-hover:bg-[#4b2c85] group-hover:text-white transition-all">
                      {fac.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-[#1B164D] leading-tight mb-1">{fac.title}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-loose">{fac.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#4b2c85] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-2xl flex items-center gap-3"
            >
              Explore Campus Life <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
