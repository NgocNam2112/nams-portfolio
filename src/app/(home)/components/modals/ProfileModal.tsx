import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useState } from 'react';
import { EXPERTISE_AREAS } from '../../constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/stores/themeStore';

const ProfileModal = () => {
  const { currentTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 h-auto w-auto rounded-full hover:bg-transparent group hover:shadow-lg text-white font-semibold button-hover theme-transition-colors"
        >
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl theme-transition-border group-hover:border-white/40 group-hover:shadow-3xl transition-all duration-200 ease-out group-hover:scale-105 ${currentTheme.colors.primary} p-1`}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/avatar.jpg"
                alt="Nam Nguyen - Click to learn more"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[600px] max-h-[80vh] p-0 flex flex-col theme-transition-colors theme-transition-border ${currentTheme.colors.projects} ${
          currentTheme.id === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <div
          className={`sticky top-0 z-10 px-6 py-4 border-b theme-transition-colors theme-transition-border ${
            currentTheme.id === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <DialogHeader>
            <DialogTitle
              className={`text-2xl font-bold theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              About Nam Nguyen
            </DialogTitle>
            <DialogDescription
              className={`text-base theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Passionate Full-Stack Developer crafting digital experiences
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-4 pb-8 flex-1 overflow-y-auto">
          <div className="space-y-6 pb-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-shrink-0">
                <Button
                  variant="ghost"
                  className="p-0 h-auto w-auto rounded-full hover:bg-transparent"
                >
                  <div
                    className={`w-20 h-20 rounded-full overflow-hidden border-2 scale-hover-sm theme-transition-border ${currentTheme.id === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Nam Nguyen"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </Button>
              </div>
              <div className="text-center sm:text-left">
                <h3
                  className={`text-lg font-semibold theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                  Nam Nguyen
                </h3>
                <p
                  className={`bg-gradient-to-r ${currentTheme.colors.secondary} bg-clip-text text-transparent font-medium theme-transition-colors`}
                >
                  Web Developer
                </p>
                <p
                  className={`text-sm mt-1 theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  Building responsive, high-performance web applications with
                  cutting-edge technologies.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p
                className={`text-sm leading-relaxed theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                I&apos;m a passionate web developer with expertise in modern
                frontend and backend technologies. I love creating intuitive
                user experiences and building scalable applications that solve
                real-world problems.
              </p>
              <p
                className={`text-sm leading-relaxed theme-transition-text ${currentTheme.id === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <h4
                className={`font-semibold text-base theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Areas of Expertise
              </h4>
              {EXPERTISE_AREAS.map((area, index) => (
                <Card
                  key={index}
                  className={`p-4 scale-hover-sm theme-transition-colors theme-transition-border ${currentTheme.id === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200 shadow-sm'}`}
                >
                  <CardHeader className="p-0 pb-3">
                    <CardTitle
                      className={`text-sm font-medium theme-transition-text ${currentTheme.id === 'dark' ? 'text-white' : 'text-gray-900'}`}
                    >
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map(skill => (
                        <Badge
                          key={skill}
                          className={`text-xs scale-hover-sm theme-transition-colors bg-gradient-to-r ${currentTheme.colors.primary} text-white border-0 hover:shadow-md`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="primary" fullWidth>
                View My Projects
              </Button>
              <Button variant="outline" fullWidth>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
