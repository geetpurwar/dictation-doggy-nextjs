import React from 'react';

interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function UseCaseCard({ icon, title, description, bgColor }: UseCaseCardProps) {
  return (
    <div className={`${bgColor} border-4 border-black p-8 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}>
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}
