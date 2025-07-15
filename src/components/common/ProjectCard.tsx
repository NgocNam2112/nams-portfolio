import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <div
      className="h-[536px] bg-no-repeat bg-center bg-contain flex flex-col items-center px-14"
      style={{ backgroundImage: "url('/images/project-view.png')" }}
    >
      <div className="mt-16 border-4">
        <Image src={image} alt="endeverus" width={433} height={313} />
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
  );
};

export default ProjectCard;
