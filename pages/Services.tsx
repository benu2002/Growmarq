import React from 'react';
import { Container, Section, Button } from '../components/UI';
import { Layout, Monitor, RefreshCw, ShoppingCart, Briefcase, Check, ArrowUpRight, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Business Website",
      icon: Monitor,
      target: "Small Business Owners",
      problem: "You need a professional website so customers trust you and find you on Google.",
      includes: [
        "5-10 Custom Pages",
        "Mobile Friendly Design",
        "Google Map Integration",
        "Contact Forms",
        "WhatsApp Chat Button"
      ],
      price: "Most Popular"
    },
    {
      title: "Ecommerce Website",
      icon: ShoppingCart,
      target: "Shop Owners & Sellers",
      problem: "You want to sell your products online to customers everywhere, 24/7.",
      includes: [
        "Online Store Setup",
        "Payment Gateway (UPI/Cards)",
        "Product Management",
        "Shopping Cart & Checkout",
        "Admin Panel for You"
      ],
      price: "Start Selling"
    },
    {
      title: "Landing Pages",
      icon: Layout,
      target: "Ad Runners",
      problem: "You are running ads and need a special page that turns clicks into customers.",
      includes: [
        "One Page Focus",
        "Sales Writing Included",
        "Fast Loading Speed",
        "Lead Capture Form",
        "Ad Tracking Setup"
      ],
      price: "High ROI"
    },
    {
      title: "Portfolio Website",
      icon: Briefcase,
      target: "Freelancers & Artists",
      problem: "You need a professional place to show your work and resume to get hired.",
      includes: [
        "Photo/Work Gallery",
        "About Me Section",
        "Download CV Button",
        "Contact Info",
        "Clean & Modern Look"
      ],
      price: "Personal Brand"
    },
    {
      title: "Website Redesign",
      icon: RefreshCw,
      target: "Existing Website Owners",
      problem: "Your current website looks old, is slow, or doesn't work well on mobile phones.",
      includes: [
        "Modern New Look",
        "Make it Fast",
        "Fix Mobile Issues",
        "Keep Your Old Content",
        "Better Security"
      ],
      price: "Fresh Look"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹9,999",
      desc: "Great for portfolios and simple business sites.",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive",
        "Contact Form",
        "WhatsApp Button",
        "1 Month Free Support"
      ],
      maintenance: "Maintenance: ₹3,000 / year"
    },
    {
      name: "Business Growth",
      price: "₹19,999",
      desc: "Perfect for businesses that want to grow online.",
      features: [
        "Up to 10 Pages",
        "SEO Setup (Google Ranking)",
        "Fast Loading Speed",
        "Social Media Integration",
        "3 Months Free Support"
      ],
      maintenance: "Maintenance: ₹5,000 / year"
    },
    {
      name: "Ecommerce / Custom",
      price: "₹34,999",
      desc: "For selling products or complex requirements.",
      features: [
        "Full Online Store",
        "Payment Gateway Setup",
        "Product Uploads",
        "Admin Panel Access",
        "6 Months Free Support"
      ],
      maintenance: "Maintenance: ₹10,000 / year"
    }
  ];

  return (
    <>
      <div className="bg-navy-900 py-24 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Simple, effective websites that help you grow your business in Balangir and beyond.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="space-y-20">
            {servicesList.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-xl text-navy-900 mb-6 border border-brand-100">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                  <div className="inline-block bg-navy-50 border border-navy-100 rounded-lg px-4 py-2 mb-6">
                    <p className="text-navy-800 font-medium text-sm">Best For: <span className="font-bold">{service.target}</span></p>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.problem}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                    <h3 className="font-bold text-navy-900 mb-4 text-sm uppercase tracking-wide">What you get:</h3>
                    <ul className="space-y-3">
                      {service.includes.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-accent-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button variant="primary" to="/contact" className="flex items-center gap-2">
                      Get A Quote <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full relative group">
                  <div className="absolute inset-0 bg-accent-400 rounded-2xl rotate-2 opacity-20 group-hover:rotate-1 transition-transform"></div>
                  <img 
                    src={`https://picsum.photos/600/400?random=${index + 15}`} 
                    alt={service.title} 
                    className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] border border-gray-100 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-navy-900 text-white">
        <Container>
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing Packages</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your business needs. No hidden fees.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-navy-800 rounded-2xl p-8 border ${i === 1 ? 'border-accent-500 shadow-lg shadow-accent-500/20' : 'border-navy-700'}`}>
                {i === 1 && <div className="text-xs font-bold text-accent-400 uppercase tracking-wider mb-2">Recommended</div>}
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm"> / one-time</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 h-10">{pkg.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Check className="h-5 w-5 text-accent-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-accent-400 text-sm font-medium pt-4 border-t border-navy-700">
                    <Wrench className="h-5 w-5 flex-shrink-0" />
                    <span>{pkg.maintenance}</span>
                  </li>
                </ul>
                
                <Button variant={i === 1 ? 'primary' : 'secondary'} to="/contact" fullWidth className={i !== 1 ? 'border border-navy-600' : ''}>
                  Choose {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white text-center">
        <Container>
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Need something different?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We also do custom projects. Tell us what you need and we will make it happen.</p>
          <Button variant="primary" to="/contact" className="text-lg px-8 py-4">
            Talk to an Expert
          </Button>
        </Container>
      </Section>
    </>
  );
};

export default Services;