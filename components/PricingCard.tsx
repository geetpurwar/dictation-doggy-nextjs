import React from 'react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}

export default function PricingCard({ name, price, period, features, highlighted, ctaText, ctaHref }: PricingCardProps) {
  return (
    <div className={`border-4 border-black p-8 relative h-full flex flex-col ${highlighted ? 'bg-black text-white shadow-[8px_8px_0px_0px_#E8A22E]' : 'bg-white shadow-brutal hover:shadow-brutal-hover'}`}>
      
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8A22E] border-4 border-black px-6 py-2 text-black">
          <span className="font-bold uppercase tracking-widest text-sm">Most Popular</span>
        </div>
      )}

      <div className="mb-8 text-center">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-[#E8A22E]' : 'text-black'}`}>{name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold tracking-tighter">{price}</span>
          {period && <span className="text-xl opacity-70 ml-1">{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className={`mr-2 text-xl font-bold ${highlighted ? 'text-[#E8A22E]' : 'text-black'}`}>✓</span>
            <span className="font-medium opacity-90">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={highlighted ? 'secondary' : 'outline'} 
        href={ctaHref}
        className="w-full justify-center"
      >
        {ctaText}
      </Button>

    </div>
  );
}
