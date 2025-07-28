'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectDetailModal = ({
  title,
  description,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-4/5 flex flex-col">
        <DialogHeader className="flex-shrink-0 border-b pb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600">{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto flex-grow flex-1">
          <div className="relative border-2">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={500}
              className="w-full h-auto object-cover opacity-100"
            />
            <div
              className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <Link href={link} target="_blank">
                <motion.div whileHover={{ scale: 1.1 }} className="p-2 bg-white">
                  <Image
                    src="/images/link.png"
                    alt="link"
                    width={38}
                    height={38}
                    className="object-cover"
                  />
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Purpose</h4>
                <p className="text-gray-700">
                  This project was developed to showcase modern web development practices and create
                  an engaging user experience with interactive elements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Team Members</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• John Doe - Frontend Developer</li>
                  <li>• Jane Smith - Backend Developer</li>
                  <li>• Mike Johnson - UI/UX Designer</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map(tech => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Responsive design</li>
                  <li>• Smooth animations</li>
                  <li>• Modern UI/UX</li>
                  <li>• Performance optimized</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-end space-x-3 border-t pt-4"></div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
