import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">The Expert</h2>
            <h3 className="text-4xl font-bold text-brand-navy mb-6">Shemeles Ayalew</h3>
            <p className="text-brand-gray text-lg leading-relaxed mb-6">
              With over 15 years of experience in the financial sector, Shemeles has built a reputation 
              for transforming complex financial data into actionable growth strategies. 
            </p>
            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              He believes that accounting is not just about looking backward at what was spent, 
              but looking forward to what can be built. His approach combines traditional auditing 
              meticulousness with modern financial technology.
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t pt-8 border-slate-100">
              <div>
                <h4 className="font-bold text-brand-navy">15+ Years</h4>
                <p className="text-sm text-brand-gray">Industry Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">500M+</h4>
                <p className="text-sm text-brand-gray">Assets Managed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-inner">
               <p className="text-center text-brand-navy font-semibold mb-4">Financial Maturity Model</p>
               
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;