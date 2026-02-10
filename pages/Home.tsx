import React from 'react';
import { Container, Section, Button, SectionHeader } from '../components/UI';
import { ArrowRight, CheckCircle, BarChart3, Smartphone, Zap, MousePointer } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Updated to Dark Theme to match Grow Marq logo */}
      <div className="relative bg-navy-900 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <Container className="relative z-10">
          <div className="pt-20 pb-24 md:pt-32 md:pb-32 lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800 border border-navy-700 text-accent-400 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Taking New Clients Now
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
                Turn Website Visitors Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-300">
                  Paying Customers
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Grow Marq builds websites and landing pages that actually work. We focus on getting you more phone calls and sales, not just making things look pretty.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" to="/contact" className="w-full sm:w-auto flex items-center gap-2">
                  Book a Free Call <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="secondary" to="/services" className="w-full sm:w-auto border border-navy-700 text-gray-300 hover:text-white">
                  See Services
                </Button>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent-500" /> Get Results</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent-500" /> Fast Delivery</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent-500" /> Google Friendly</span>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
               <div className="relative rounded-2xl bg-gradient-to-tr from-accent-500 to-brand-500 p-1 shadow-2xl shadow-brand-500/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    className="rounded-xl w-full object-cover shadow-inner"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                    alt="Growth analytics dashboard"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden md:block">
                     <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                           <BarChart3 className="h-6 w-6" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 font-semibold uppercase">More Sales</p>
                           <p className="text-xl font-bold text-navy-900">+127%</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Benefits Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader 
            title="We Build Websites That Sell." 
            subtitle="Most web designers just make digital brochures. We build tools that make you money."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Smartphone,
                title: "Works on Phones",
                desc: "Most people will visit your site from their phone. We make sure it's easy for them to read and call you with one tap."
              },
              {
                icon: Zap,
                title: "Loads Super Fast",
                desc: "Slow websites lose customers. We make yours load instantly so people stay and buy."
              },
              {
                icon: MousePointer,
                title: "Designed for Calls",
                desc: "We place phone numbers and buttons in the right spots to get you more appointments and leads."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-14 w-14 bg-navy-50 text-accent-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who is this for? */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="w-full">
              <h2 className="text-3xl font-extrabold text-navy-900 mb-6">Who Do We Help?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in helping local businesses and professionals scale their operations online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1: Business Owners */}
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                    <span className="text-accent-500">●</span> Business Owners
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Salon & Spa",
                      "Gyms & Fitness Centers",
                      "Restaurants & Cafes",
                      "Coaches & Trainers",
                      "Clinics",
                      "Other Businesses"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <p className="text-navy-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Professionals */}
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                    <span className="text-brand-500">●</span> Professionals
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Doctors",
                      "Lawyers",
                      "Advocates",
                      "Real Estate Agents",
                      "Plumbers",
                      "Other Professionals"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-navy-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="dark" to="/services">See Our Packages</Button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 sticky top-24">
              <div className="absolute inset-0 bg-navy-900 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Business professional using tablet" 
                className="relative rounded-2xl shadow-xl w-full border border-gray-200"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Strip */}
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <Container>
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get more customers?</h2>
            <p className="text-gray-300 mb-10 text-xl max-w-2xl mx-auto">
              Your competition is already online. Let's build the system that puts you ahead of them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" to="/contact">Book Your Free Call</Button>
              <Button variant="secondary" to="/landing-page-services" className="border border-navy-700">View Landing Pages</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;