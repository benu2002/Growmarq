import React from 'react';
import { Container, Section, SectionHeader, Button } from '../components/UI';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Chat & Plan",
      desc: "We start with a quick call to understand your business and sales goals. We want to know exactly who your customers are before we start.",
      icon: MessageSquare
    },
    {
      num: "02",
      title: "Design & Build",
      desc: "Our team designs a website just for your brand. We write the words, find the photos, and build it for you. You get to see it and say yes before it goes live.",
      icon: PenTool
    },
    {
      num: "03",
      title: "Launch & Grow",
      desc: "We turn everything on for you. We connect your domain and make sure it works. Once it's live, you can start getting leads immediately.",
      icon: Rocket
    }
  ];

  return (
    <>
      <Section className="bg-white">
        <Container>
          <SectionHeader 
            title="Our Simple 3-Step Process" 
            subtitle="We handle the hard work so you can run your business."
          />
          
          <div className="mt-16 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-navy-900 text-accent-400 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg shadow-navy-900/20">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <span className="text-6xl font-black text-gray-100 absolute top-4 right-4 -z-10 select-none">{step.num}</span>
                    <h3 className="text-xl font-bold text-navy-900 mb-4 relative z-10">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button variant="primary" to="/contact" className="px-10 py-4 text-lg">
              Start Step 1: Book Call
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Process;