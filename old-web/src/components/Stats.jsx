import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, GraduationCap, School, BookOpenCheck } from 'lucide-react';

const CountUp = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState("0" + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest) + suffix);
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{displayValue}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Students Enrolled', value: 15000, suffix: '+', icon: <Users size={40} />, color: '#4b2c85' },
    { label: 'Expert Faculty', value: 200, suffix: '+', icon: <School size={40} />, color: '#3355a1' },
    { label: 'Graduation Rate', value: 92, suffix: '%', icon: <GraduationCap size={40} />, color: '#1e7e34' },
    { label: 'Success Stories', value: 50, suffix: '+', icon: <BookOpenCheck size={40} />, color: '#800000' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl group hover:shadow-2xl transition-all duration-500 border border-gray-50"
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl transform group-hover:rotate-6 transition-transform"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>
              <h2 className="text-5xl font-black text-[#1B164D] mb-4 tracking-tighter">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="text-sm font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
              
              <div className="mt-8 flex gap-1">
                 {[1,2,3].map(j => (
                   <div key={j} className="h-1 w-4 rounded-full bg-gray-100 group-hover:bg-[#4b2c85] transition-colors duration-500" style={{ transitionDelay: `${j*100}ms` }} />
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
