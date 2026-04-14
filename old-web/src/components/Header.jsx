import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Search, Menu, X, ChevronDown, GraduationCap,
  Users, Calendar, Users2 
} from 'lucide-react';

const FacebookIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const YoutubeIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.03 103.03 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.03 103.03 0 0 1-15 0 2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', dropdown: ['Main Home', 'Modern Home', 'About University'] },
    { name: 'Programs', dropdown: ['B.Sc in CSE', 'B.Sc in Civil', 'B.Sc in EEE', 'MBA', 'LLM'] },
    { name: 'Admission', dropdown: ['Requirement', 'International', 'Scholarships'] },
    { name: 'Campus Life', dropdown: ['Events', 'Research', 'Hostel', 'Library'] },
    { name: 'About SU', dropdown: ['Vision & Mission', 'Our History', 'Contact Us'] }
  ];

  const topBarSocials = [
    { icon: <FacebookIcon />, link: '#' },
    { icon: <TwitterIcon />, link: '#' },
    { icon: <InstagramIcon />, link: '#' },
    { icon: <LinkedinIcon />, link: '#' },
    { icon: <YoutubeIcon />, link: '#' }
  ];

  return (
    <header className="relative w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#4b2c85] text-white py-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="mailto:info@su.edu.bd" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} /> info@su.edu.bd
            </a>
            <a href="tel:+880123456789" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} /> +880 1234 567 89
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 border-r border-white/20 pr-4">
              {topBarSocials.map((social, i) => (
                <a key={i} href={social.link} className="hover:scale-110 transition-transform">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Portal</a>
              <a href="#" className="hover:underline">Alumni</a>
              <a href="#" className="hover:underline">Events</a>
              <a href="#" className="bg-[#800000] px-3 py-1 rounded hover:bg-opacity-90">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full py-4 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-xl py-3' : 'relative bg-[#3355a1] text-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-inner">
               <GraduationCap size={32} color={isSticky ? "#4b2c85" : "#3355a1"} />
            </div>
            <div>
              <h1 className={`text-xl font-black tracking-tighter uppercase ${isSticky ? 'text-[#4b2c85]' : 'text-white'}`}>
                Sonargaon <span className="opacity-70">University</span>
              </h1>
              <p className={`text-[10px] uppercase font-bold tracking-[0.2em] ${isSticky ? 'text-gray-500' : 'text-white/60'}`}>
                Education. Research. Social.
              </p>
            </div>
          </div>

          {/* Nav Links Desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={i} className="group relative py-2">
                <a 
                  href="#" 
                  className={`flex items-center gap-1 font-bold text-sm tracking-wide ${isSticky ? 'text-[#1B164D] hover:text-[#4b2c85]' : 'text-white hover:text-white/70'}`}
                >
                  {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </a>
                
                {/* Dropdown Meta */}
                <div className="absolute top-[100%] left-[-20px] bg-white text-[#1B164D] shadow-2xl rounded-xl p-4 min-w-[200px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 border-t-4 border-[#4b2c85]">
                  <ul className="flex flex-col gap-2">
                     {link.dropdown.map((item, idx) => (
                       <li key={idx}>
                         <a href="#" className="block py-2 px-3 text-xs font-bold rounded-lg hover:bg-gray-50 hover:text-[#4b2c85]">
                           {item}
                         </a>
                       </li>
                     ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isSticky ? 'text-[#1B164D]' : 'text-white'}`}>
              <Search size={22} />
            </button>
            <div className="hidden lg:block h-6 w-[1px] bg-white/20 mx-2"></div>
            <button className={`${isSticky ? 'bg-[#4b2c85]' : 'bg-[#1e7e34]'} text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all`}>
              Admission Open
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] bg-white z-[100] shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <GraduationCap size={40} className="text-[#4b2c85]" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <button className="flex justify-between items-center w-full text-lg font-black text-[#1B164D]">
                      {link.name} <ChevronDown size={20} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10 border-t border-gray-100">
                <button className="w-full bg-[#4b2c85] text-white py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-xl">
                  Admission Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
