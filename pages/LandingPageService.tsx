import React from 'react';
import { Container, Section, Button } from '../components/UI';
import { TrendingUp, Clock, MousePointer, DollarSign } from 'lucide-react';

const LandingPageService: React.FC = () => {
  return (
    <>
      <div className="bg-navy-900 text-white pt-24 pb-20 relative overflow-hidden">
         {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-300 border border-accent-500/30 text-xs font-bold tracking-wider uppercase mb-6">
              Grow Marq Specialization
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Stop Losing Money on <br/>
              <span className="text-accent-400">Pages That Don't Sell</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              We design specific pages for your ads that turn strangers into real leads. Fast, persuasive, and built to get results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" to="/contact" className="text-lg px-8 py-4 w-full sm:w-auto">
                Start Getting More Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">One-time fee. No monthly costs.</p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">The "Home Page" Trap</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h3 className="font-bold text-red-700 text-xl mb-3">❌ The Problem</h3>
                <p className="text-navy-900 opacity-80 leading-relaxed">
                  You send people from ads to your Home Page. They get distracted by the menu, your "About Us" story, and blog posts. They look around and leave without buying. You pay for the click, but get nothing.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <h3 className="font-bold text-green-700 text-xl mb-3">✅ The Grow Marq Way</h3>
                <p className="text-navy-900 opacity-80 leading-relaxed">
                  We build a dedicated "Landing Page" with ONE goal: getting their contact info. No menu, no distractions. Just persuasive words and a clear button that makes them want to click.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">How We Get You Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, title: "Persuasive Words", text: "We write headlines that hook people and text that answers their doubts." },
                { icon: Clock, title: "Loads Instantly", text: "Pages load fast so people don't get bored and leave." },
                { icon: MousePointer, title: "Smart Layout", text: "We design the page to guide their eyes straight to the button." },
                { icon: DollarSign, title: "High Value", text: "Designed to pay for itself in the first month of your ads." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white shadow-lg shadow-gray-100 rounded-xl border border-gray-50">
                  <div className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-navy-50 text-accent-600 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
           <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row border border-gray-100">
             <div className="p-10 md:w-1/2 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to double your leads?</h3>
               <p className="text-gray-600 mb-6">
                 Don't let another potential client click away. Book a call to discuss your campaign.
               </p>
               <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                 <li className="flex gap-2"><span className="text-accent-500">✓</span> Delivered in 3-5 days</li>
                 <li className="flex gap-2"><span className="text-accent-500">✓</span> Works on Phones</li>
                 <li className="flex gap-2"><span className="text-accent-500">✓</span> Sales writing included</li>
               </ul>
               <Button variant="primary" to="/contact">Start Project Now</Button>
             </div>
             <div className="md:w-1/2 bg-gray-100">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Landing page analytics" className="h-full w-full object-cover" />
             </div>
           </div>
        </Container>
      </Section>
    </>
  );
};

export default LandingPageService;