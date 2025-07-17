import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ imageUrl, title, description, link }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col items-center h-[536px]"
      style={{
        backgroundImage: "url('/icons/project-view.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col w-4/5 h-full">
        <div className="mt-16 border-4 w-full h-[220px] relative">
          <Image src={imageUrl} alt="endeverus" fill objectFit="contain" />
        </div>
        <div className="mt-8 flex justify-between gap-2">
          <div>
            <h2 className="text-4xl font-medium">{title}</h2>
            <p className="text-2xl">{description}</p>
          </div>
          <div className="w-[38px] h-[38px] flex items-center justify-center cursor-pointer flex-shrink-0">
            <Link href={link} target="_blank">
              <Image
                src="/images/link.png"
                alt="link"
                width={38}
                height={38}
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
