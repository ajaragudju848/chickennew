"use client"
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How to choose Chicken Road 2 InOut Game?",
      answer: "The choice of Chicken Road 2 InOut Game depends on your personal preferences. However, it is important to choose a version of the game that meets the requirements of your device. It is also recommended to read reviews from other users before purchasing."
    },
    {
      question: "Where can I find a demo version of Chicken Road 2?",
      answer: "A demo version of Chicken Road 2 can be found online. Many websites offer free demo versions of games for download. It is important to ensure that the website is reliable and secure before downloading any files."
    },
    {
      question: "What comparisons can be made between the different versions of Chicken Road games?",
      answer: "Versions of Chicken Road may differ in coefficient, bonuses, number of levels, and other key features. The choice of a particular version depends mainly on your personal preferences and skill level."
    },
    {
      question: "Can I play Chicken Road 2 in Pakistan?",
      answer: "Chicken Road 2 is available to play in Pakistan. You can download and play it on your smartphone, tablet, or computer."
    },
    {
      question: "Where can I read reviews of the game Chicken Road?",
      answer: "Reviews of Chicken Road can be found on many gaming websites and forums. You can also search for reviews on app and game review sites."
    },
    {
      question: "How to download the Chicken Road game on Phone in Pakistan?",
      answer: "To download Chicken Road on your Phone in Pakistan, you can visit the App Store or Play Market and use the search engine. Once you have found the game, click on the Download or Install button."
    }
  ];

  return (
    <section id="faq" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">FAQ About Chicken Road</h2>
            <p className="text-gray-600 mt-1">Frequently asked questions about the game</p>
          </div>

          {/* FAQ Items */}
          <div className="p-6">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg"
                >
                  <button
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openIndex === index && (
                    <div className="p-4 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <p className="text-gray-700 text-center">
              Still have questions? Contact our support team at{" "}
              <a href="mailto:support@chickenroad.pk" className="text-orange-600 font-medium">
                support@chickenroad.pk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;