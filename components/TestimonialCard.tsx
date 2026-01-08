import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white border-4 border-black p-8 shadow-brutal hover:shadow-brutal-hover h-full flex flex-col">
      <div className="mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-[#E8A22E] text-2xl">★</span>
        ))}
      </div>
      
      <p className="text-xl font-medium mb-8 flex-grow leading-relaxed">"{quote}"</p>
      
      <div className="flex items-center mt-auto border-t-4 border-black pt-4">
        <div className="w-12 h-12 bg-[#E8A22E] border-4 border-black rounded-full flex items-center justify-center text-2xl mr-4">
          {avatar}
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm opacity-70 font-bold">{role}</p>
        </div>
      </div>
    </div>
  );
}
