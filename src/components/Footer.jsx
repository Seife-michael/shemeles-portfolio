const Footer = () => (
  <footer className="bg-white py-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="text-xl font-bold text-brand-navy mb-4">SHEMELES AYALEW</div>
        <p className="text-brand-gray max-w-sm">
          Professional financial consultancy and accounting services designed for 
          businesses seeking sustainable growth and total compliance.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-brand-navy mb-4">Quick Links</h4>
        <ul className="space-y-2 text-brand-gray text-sm">
          <li><a href="#about" className="hover:text-brand-gold">About Us</a></li>
          <li><a href="#services" className="hover:text-brand-gold">Services</a></li>
          <li><a href="#portfolio" className="hover:text-brand-gold">Case Studies</a></li>
          <li><a href="#contact" className="hover:text-brand-gold">Consultation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-brand-navy mb-4">Connect</h4>
        <div className="flex space-x-4 text-brand-gray">
          {/* Icons would go here */}
          <a href="#" className="hover:text-brand-navy">LinkedIn</a>
          <a href="#" className="hover:text-brand-navy">Twitter</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-50 text-center text-xs text-brand-gray">
      © {new Date().getFullYear()} Shemeles Ayalew Financial Consulting. All rights reserved.
    </div>
  </footer>
);

export default Footer;