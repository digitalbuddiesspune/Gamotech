import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="p-6 sm:p-8 bg-neutral-900/40 border border-white/5 rounded-xl sm:rounded-2xl hover:bg-neutral-900/60 hover:border-amber-500/30 transition-all group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 sm:mb-6 text-amber-500 group-hover:scale-110 transition-transform">
        <Icon size={20} className="sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm">{description}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className="bg-black text-white selection:bg-amber-500 selection:text-black pt-20 md:pt-0">
      {/* 1. HERO SECTION: ABOUT GAMOTECH */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-amber-600/20 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-neutral-800/40 blur-[70px] sm:blur-[90px] lg:blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            About Gamotech
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed"
          >
            <p>
              Gamotech was started with one clear belief: <span className="text-amber-400 font-semibold">technology should simplify business — not complicate it.</span>
            </p>
            
            <p>
              We&apos;re a Pune-based IT solutions company working with startups, growing brands, and 
              businesses across India to build websites, e-commerce platforms, CRM systems, and custom 
              software that actually serve a purpose.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-white/10"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">We don&apos;t follow templates.</h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">We don&apos;t push unnecessary features.</h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">And we don&apos;t treat clients like &quot;projects.&quot;</h2>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Focus</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              Whether it&apos;s a simple website or a complex internal system, our architectural focus remains unwavering.
        </p>
      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard 
              icon={Zap}
              title="Clean Execution"
              description="Minimalist codebases that are easy to manage and lightning fast to run."
              delay={0.1}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Scalable Architecture"
              description="Systems designed to grow as your business scales from 10 to 10,000 users."
              delay={0.2}
            />
            <FeatureCard 
              icon={Target}
              title="Long-term Reliability"
              description="Software that doesn't break under pressure. We build for the long haul."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION / PARTNERSHIP */}
      <section className="py-20 sm:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-12 xl:px-20 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              More than a vendor. <br />
              <span className="text-amber-500">A Partner.</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed px-2 sm:px-0">
              Gamotech is not a one-time service. We aim to be the long-term technology engine 
              that powers your business growth across India.
            </p>
          </motion.div>
          
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-amber-500 hover:scale-105 transition-all group"
          >
            Work with Gamotech
            <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Background Text Decor */}
        <div className="absolute -bottom-5 sm:-bottom-10 left-1/2 -translate-x-1/2 text-[12vw] sm:text-[10vw] lg:text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none">
          PUNE INDIA PUNE INDIA
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="py-6 sm:py-8 lg:py-10 border-t border-white/5 text-center text-neutral-600 text-xs sm:text-sm tracking-widest uppercase px-4">
        © Gamotech IT Solutions — Building with Purpose
      </footer>
      </div>
  );
};

export default AboutUs;
