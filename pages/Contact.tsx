import React, { useState } from 'react';
import { Container, Section, SectionHeader, Button } from '../components/UI';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Business Website',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, service, message } = formData;
    
    // Construct the WhatsApp message
    // %0A is a line break in URL encoding
    const text = `Hello Grow Marq,%0A%0AI would like to discuss a project.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/917008010914?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section>
      <Container>
        <SectionHeader title="Let's Grow Your Business" subtitle="Book a free consultation or visit our office." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Info */}
          <div className="bg-navy-900 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              Ready to turn your website into a lead generation machine? Reach out to us directly or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-navy-700">
                <div className="bg-navy-800 p-3 rounded-full text-accent-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Our Location</p>
                  <p className="font-bold text-white">Balangir, Odisha, India</p>
                </div>
              </div>

              <a href="https://wa.me/917008010914" className="flex items-center gap-4 bg-navy-800 p-4 rounded-xl border border-navy-700 hover:border-accent-500 transition-colors group">
                <div className="bg-green-500/10 p-3 rounded-full text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp Us</p>
                  <p className="font-bold text-white">+91 7008010914</p>
                </div>
              </a>

              <a href="mailto:growmarq@gmail.com" className="flex items-center gap-4 bg-navy-800 p-4 rounded-xl border border-navy-700 hover:border-accent-500 transition-colors group">
                <div className="bg-orange-500/10 p-3 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-bold text-white">growmarq@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-start gap-4 p-4 border-t border-navy-800">
               <ShieldIcon className="h-6 w-6 text-accent-500 flex-shrink-0" />
               <p className="text-sm text-gray-400">
                 <strong>No Pressure:</strong> This is a free chat. We will discuss your goals and give you a plan. No hard selling.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 sm:text-sm p-3 border bg-gray-50" 
                  placeholder="Your Name" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 sm:text-sm p-3 border bg-gray-50" 
                  placeholder="you@example.com" 
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 sm:text-sm p-3 border bg-gray-50"
                >
                  <option>Business Website</option>
                  <option>Ecommerce Website</option>
                  <option>Landing Page</option>
                  <option>Portfolio Website</option>
                  <option>Website Redesign</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your project</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 sm:text-sm p-3 border bg-gray-50" 
                  placeholder="I need a website for..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" fullWidth className="py-4 text-lg">
                Get Your Free Quote
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const ShieldIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
)

export default Contact;