'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-black bg-white mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-[#F0F0F0] transition-colors"
      >
        <span className="text-xl font-bold">{question}</span>
        <span className="text-3xl font-bold">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t-4 border-black">
          <p className="text-lg pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

interface FAQProps {
  items: FAQItemProps[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
