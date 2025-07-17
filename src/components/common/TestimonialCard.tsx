import React from 'react';
import AvatarWrapper from './AvatarWrapper';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar?: string;
    fallback?: string;
  };
  className?: string;
  rotationDegree?: number; // New prop for rotation
  zIndex?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  className = '',
  rotationDegree,
  zIndex,
}) => {
  return (
    <div className="relative w-full" style={{ zIndex }}>
      <div
        className={`${className} w-full px-10 py-12 bg-white border-4 shadow-[11.47px_11.47px_0px_0px_#BFBFB4]`}
        style={{
          rotate: `${rotationDegree}deg`,
        }}
      >
        <p className="text-2xl">&ldquo;{quote}&rdquo;</p>

        <div className="mt-4 flex items-center gap-4">
          <AvatarWrapper
            src={author.avatar || 'https://github.com/shadcn.png'}
            alt={`${author.name} avatar`}
            fallback={author.fallback || author.name.substring(0, 2).toUpperCase()}
            className="w-20 h-20 rounded-full border-4 flex-shrink-0"
          />
          <div className="flex flex-col">
            <h3 className="text-3xl font-medium">{author.name}</h3>
            <p className="text-2xl">
              {author.position}, {author.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
