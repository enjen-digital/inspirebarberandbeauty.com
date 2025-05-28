import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How often should I get my hair cut to maintain a fresh fade?",
    answer: "For the sharpest look, we recommend getting your fade touched up every 2-3 weeks. However, this can vary depending on your hair growth rate and the specific style you're maintaining. Some clients with slower hair growth can stretch it to 4 weeks."
  },
  {
    question: "What's the process for starting dreadlocks, and how long does it take?",
    answer: "Starting dreadlocks is a personalized process that begins with a consultation to discuss your hair texture and desired results. The initial installation takes 4-6 hours, depending on your hair length and desired thickness. We use professional techniques to ensure your locs form properly, and the full locking process typically takes 6-12 months, with regular maintenance every 4-6 weeks."
  },
  {
    question: "Do you work with all hair textures?",
    answer: "Yes, our skilled barbers and stylists are experienced with all hair textures, from straight to coily (Types 1-4). We specialize in African American hair care and have extensive experience with various techniques for cutting, styling, and maintaining textured hair."
  },
  {
    question: "What products do you recommend for maintaining healthy natural hair?",
    answer: "We recommend using sulfate-free shampoos, deep conditioning treatments, and natural oils like jojoba or argan oil. For specific recommendations, we can evaluate your hair type and current routine during your visit. We carry professional-grade products specifically formulated for textured hair."
  },
  {
    question: "How should I prepare for my first appointment?",
    answer: "Come with your hair in its natural state if possible - no heavy products or tight styles. This helps us better assess your hair texture and discuss your goals. If you're getting a cut or fade, clean hair is best. For chemical services, it's better not to wash your hair for a few days before."
  },
  {
    question: "Do you offer chemical services like relaxers and texturizers?",
    answer: "Yes, we offer professional chemical services including relaxers, texturizers, and permanent waves. Our stylists are certified and experienced in these treatments. We always perform a strand test and consultation first to ensure the best results for your hair type."
  },
  {
    question: "What's your policy on children's haircuts?",
    answer: "We welcome children and have special pricing for kids 12 and under. We recommend booking children's appointments earlier in the day when they're typically more patient. Our barbers are experienced in working with children and making their first haircut experiences positive."
  }
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-gray-900 text-left">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-theme-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-theme-primary flex-shrink-0" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}