import { motion } from 'framer-motion';
const services = [
  { title: 'Tax Strategy', desc: 'Comprehensive planning to optimize your tax liabilities and ensure compliance.' },
  { title: 'Audit & Assurance', desc: 'Independent evaluation of your financial statements to build investor trust.' },
  { title: 'Corporate Finance', desc: 'Strategic advisory for mergers, acquisitions, and capital raising.' },
];

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-brand-navy mb-16">Core Expertise</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
               <span className="text-brand-gold font-bold text-xl">{i + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">{s.title}</h3>
            <p className="text-brand-gray leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;
