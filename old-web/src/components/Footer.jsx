import { 
  Mail, Phone, MapPin, ArrowRight, GraduationCap, 
  Send, ExternalLink 
} from 'lucide-react';

const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const YoutubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.03 103.03 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.03 103.03 0 0 1-15 0 2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>;

const Footer = () => {
  const quickLinks = ['About University', 'Vision & Mission', 'Our History', 'Research Center', 'Library', 'Contact Us'];
  const programs = ['B.Sc in CSE', 'B.Sc in Civil', 'EEE & Textile', 'Architecture', 'BBA & MBA', 'LLB & LLM'];

  return (
    <footer className="bg-[#1B164D] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3355a1]/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4b2c85]/10 blur-[150px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="bg-white p-3 rounded-2xl shadow-2xl">
                  <GraduationCap size={40} className="text-[#4b2c85]" />
               </div>
               <div>
                 <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">
                   Sonargaon <span className="text-[#3355a1]">University</span>
                 </h2>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-1 text-white/50">ESTD. 2012</p>
               </div>
            </div>
            <p className="text-white/60 font-medium leading-relaxed max-w-xs pt-4">
              Providing world-class education and research facilities to help students attain their full intellectual potential.
            </p>
            <div className="flex gap-4 pt-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4b2c85] hover:scale-110 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-10 pb-2 border-b-2 border-white/5 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 font-bold hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-10 pb-2 border-b-2 border-white/5 inline-block">Popular Programs</h4>
            <ul className="space-y-4">
              {programs.map((prog, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 font-bold hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-10">
            <div>
              <h4 className="text-lg font-black uppercase tracking-widest mb-10 pb-2 border-b-2 border-white/5 inline-block">Contact Info</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <MapPin className="text-[#3355a1] shrink-0" size={24} />
                    <p className="text-white/60 font-bold leading-relaxed">Tejgaon I/A, Dhaka-1208, Bangladesh</p>
                 </div>
                 <div className="flex gap-4">
                    <Phone className="text-[#3355a1] shrink-0" size={20} />
                    <p className="text-white/60 font-bold">+880 1234 567 89</p>
                 </div>
                 <div className="flex gap-4">
                    <Mail className="text-[#3355a1] shrink-0" size={20} />
                    <p className="text-white/60 font-bold">admission@su.edu.bd</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Newsletter */}
        <div className="bg-[#4b2c85] rounded-[3rem] p-10 lg:p-14 mb-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl group border border-white/5">
           <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tighter leading-tight">Stay updated with <span className="text-[#1e7e34]">SU News</span></h3>
              <p className="text-white/70 font-bold tracking-wide">Subscribe to our newsletter for latest admissions, scholarships and event updates.</p>
           </div>
           <div className="relative z-10 w-full lg:w-auto">
              <form className="relative flex items-center">
                 <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white/10 border-2 border-white/10 rounded-2xl py-6 pl-8 pr-48 w-full lg:w-[500px] text-lg font-bold placeholder:text-white/40 focus:bg-white focus:text-[#1B164D] transition-all outline-none"
                 />
                 <button className="absolute right-2 px-8 py-4 bg-[#1e7e34] rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-opacity-90 active:scale-95 transition-all shadow-xl">
                   Subscribe <Send size={18} />
                 </button>
              </form>
           </div>
           <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
             <Mail size={150} />
           </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 font-black text-xs uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Sonargaon University. All Rights Reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-all">Support</a>
             <a href="#" className="hover:text-white transition-all">Terms of Service</a>
             <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
          </div>
          <p className="flex items-center gap-2">
            Developed with <span className="text-[#800000]">❤</span> by Sonargaon University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
