const cases = [
  {
    category: "Tax Strategy",
    title: "Corporate Tax Optimization",
    result: "18% Reduction in Liability",
    desc: "Restructured international supply chain accounting for a manufacturing firm."
  },
  {
    category: "Real Estate",
    title: "Portfolio Turnaround",
    result: "25% Liquidity Increase",
    desc: "Implemented real-time cloud dashboards for a private equity group."
  },
  {
    category: "Tech Startups",
    title: "Series B Funding Prep",
    result: "$10M Capital Raised",
    desc: "Fractional CFO services including cap table cleanup and due diligence."
  }
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-brand-navy">Proven Results</h2>
          <p className="text-brand-gray mt-2">Real-world impact across diverse industries.</p>
        </div>
        <button className="mt-4 md:mt-0 text-brand-gold font-bold hover:underline">View All Case Studies →</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
          >
            <span className="text-xs font-bold text-brand-gold uppercase tracking-tighter">{item.category}</span>
            <h3 className="text-xl font-bold text-brand-navy mt-2 mb-4">{item.title}</h3>
            <p className="text-brand-gray text-sm mb-6">{item.desc}</p>
            <div className="bg-brand-navy/5 p-4 rounded-lg">
              <span className="text-brand-navy font-bold text-lg">{item.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;