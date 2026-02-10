import React from 'react';
import { Container, Section, SectionHeader, Button } from '../components/UI';

const About: React.FC = () => {
  return (
    <>
      <div className="relative py-24 bg-navy-900">
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">We Help Small Businesses <span className="text-accent-400">Win Online</span></h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Grow Marq makes it simple for doctors, coaches, and local owners to get customers online.
          </p>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                We noticed a big problem: Small business owners were either paying $10k+ for big agencies or struggling with cheap, DIY builders that looked bad.
              </p>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                <strong>Grow Marq</strong> was born to fix that. We provide high-quality, professional websites at a price that makes sense for growing businesses.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
                We don't care about design awards. We care about your phone ringing.
              </p>
              <Button variant="outline" to="/process">See How We Work</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img className="rounded-2xl shadow-lg mt-8 border border-gray-100" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Team collaborating" />
              <img className="rounded-2xl shadow-lg border border-gray-100" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Planning strategy" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <SectionHeader title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Keep it Simple", desc: "We don't use confusing tech words. No hidden fees, no headaches for you." },
              { title: "Results First", desc: "Every part of the website has a job. If it doesn't help you sell, we don't include it." },
              { title: "Honesty", desc: "We are honest about how long things take and how much they cost from day one." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;