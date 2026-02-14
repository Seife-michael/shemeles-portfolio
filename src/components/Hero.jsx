import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-navy leading-tight">
            Strategic Financial <br /> 
            <span className="text-brand-gold">Clarity for Your Growth.</span>
          </h1>
          <p className="mt-6 text-xl text-brand-gray">
            Expert accounting and financial consultancy tailored for modern businesses and visionary investors.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-brand-navy text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition shadow-lg">
              Our Services
            </button>
            <button className="border-2 border-brand-navy text-brand-navy px-8 py-3 rounded-md hover:bg-brand-navy hover:text-white transition">
              Book a Consultation
            </button>
          </div>
        </motion.div>
        <div className="hidden md:block">
          {/* Professional abstract financial graphic or portrait placeholder */}
          <div className="w-full h-[500px] bg-brand-navy rounded-2xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};