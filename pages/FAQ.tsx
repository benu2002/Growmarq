import React, { useState } from 'react';
import { Container, Section, SectionHeader, Button } from '../components/UI';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "How long does it take to build a website?",
    answer: "For a normal 5-page business website, it usually takes 2 weeks. For a landing page, we can often finish in 3-5 days. Simple websites can be ready in 48 hours."
  },
  {
    question: "Do I need to know about technology?",
    answer: "Absolutely not. Grow Marq handles everything—the domain name, hosting, security, and coding. We explain everything in plain English."
  },
  {
    question: "Does the website work on phones?",
    answer: "Yes. All our websites are designed for phones first. They look and work perfectly on iPhones, Androids, tablets, and computers."
  },
  {
    question: "Can you fix my old website?",
    answer: "Yes. We can take your old content and put it into a new, modern design that helps you get more customers."
  },
  {
    question: "Will people find me on Google?",
    answer: "Yes. We build the site correctly so Google can read it easily. This helps you show up when people search for your services."
  },
  {
    question: "How much does it cost?",
    answer: "It depends on what you need. We have affordable packages for new businesses. Contact us for a free quote that fits your budget."
  },
  {
    question: "Who writes the words for the website?",
    answer: "We do! We include professional writing in our service. We'll ask you a few questions to get the facts, and then we write it to sound professional."
  },
  {
    question: "What happens after the website is live?",
    answer: "We show you how to make small changes yourself, or we can manage everything for you for a small monthly fee."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray-50 min-h-screen">
      <Container>
        <SectionHeader title="Common Questions" subtitle="Everything you need to know about getting your business online." />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-navy-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-accent-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <Button variant="primary" to="/contact">Contact Support</Button>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;