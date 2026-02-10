import React from 'react';
import { Container, Section, SectionHeader, Button } from '../components/UI';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield } from 'lucide-react';

const data = [
  { name: 'Month 1', leads: 10 },
  { name: 'Month 2', leads: 25 },
  { name: 'Month 3', leads: 45 },
  { name: 'Month 4', leads: 80 },
  { name: 'Month 5', leads: 120 },
];

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="bg-white py-20">
        <Container>
          <SectionHeader 
            title="Why Businesses Trust Grow Marq" 
            subtitle="We don't just care about pretty pictures. We care about your profit."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">The Grow Marq Standard</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Most web designers are artists. We are marketers who design. Every decision we make—from colors to button placement—is based on getting you more phone calls.
              </p>
              
              <div className="space-y-8 mt-8">
                {[
                  { title: "Results First", desc: "Beauty is nice, but sales are better. If it doesn't help you sell, we don't build it." },
                  { title: "Great on Mobile", desc: "We design for phones first, because that's where most of your customers are." },
                  { title: "Clean & Simple", desc: "We build sites that are easy for Google to read and rank." },
                  { title: "Fast Delivery", desc: "We finish in days, not months. You can start selling sooner." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 font-bold border border-navy-100 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 p-8 rounded-3xl shadow-2xl shadow-navy-900/20 text-white">
              <h3 className="text-xl font-bold text-white mb-2">Our Goal: More Leads</h3>
              <p className="text-sm text-gray-400 mb-6">Typical growth after working with us</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke="#94a3b8" />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', color: '#fff' }}
                      itemStyle={{ color: '#22d3ee' }}
                    />
                    <Bar dataKey="leads" fill="#22d3ee" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-8 p-4 bg-navy-800 rounded-xl border border-navy-700 flex items-center gap-4">
                 <div className="p-2 bg-accent-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-accent-400" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white text-sm">Satisfaction Guarantee</h4>
                    <p className="text-xs text-gray-400 mt-1">We work until you are 100% happy with the design.</p>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <Section className="bg-navy-900">
        <Container className="text-center">
           <h2 className="text-3xl font-bold text-white mb-8">Stop guessing. Start growing.</h2>
           <Button variant="primary" to="/contact">Start Your Project</Button>
        </Container>
      </Section>
    </>
  );
};

export default WhyChooseUs;