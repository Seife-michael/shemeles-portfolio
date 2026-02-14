import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data); // Integrate with EmailJS or a backend API

  return (
    <section id="contact" className="py-24 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Discuss Your Future</h2>
          <p className="text-slate-400">Schedule a confidential consultation with Shemeles today.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              {...register("name", { required: true })} 
              placeholder="Full Name" 
              className="bg-slate-800 border-none rounded-md p-4 w-full focus:ring-2 focus:ring-brand-gold outline-none"
            />
            <input 
              {...register("email", { required: true })} 
              placeholder="Email Address" 
              className="bg-slate-800 border-none rounded-md p-4 w-full focus:ring-2 focus:ring-brand-gold outline-none"
            />
          </div>
          <textarea 
            {...register("message", { required: true })} 
            placeholder="How can we help?" 
            rows="5"
            className="bg-slate-800 border-none rounded-md p-4 w-full focus:ring-2 focus:ring-brand-gold outline-none"
          />
          <button type="submit" className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded-md hover:bg-white transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
