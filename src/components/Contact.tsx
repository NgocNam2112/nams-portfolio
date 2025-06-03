'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { currentTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const getFocusRingColor = () => {
    const themeColors = {
      purple: 'focus:ring-purple-500',
      blue: 'focus:ring-blue-500',
      emerald: 'focus:ring-emerald-500',
      orange: 'focus:ring-orange-500',
      rose: 'focus:ring-rose-500',
      dark: 'focus:ring-gray-500',
    };
    return (
      themeColors[currentTheme.id as keyof typeof themeColors] ||
      themeColors.purple
    );
  };

  const socialLinks = [
    { name: 'GitHub', icon: '/github.png', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '/linkedin.png', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: '/youtube.png', url: 'https://youtube.com' },
    { name: 'Email', icon: '/email.png', url: 'mailto:hello@example.com' },
  ];

  return (
    <section
      id="contact"
      className={`py-20 theme-transition-bg ${currentTheme.colors.contact}`}
    >
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 theme-transition-text">
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${currentTheme.colors.secondary} mx-auto mb-6 theme-transition-colors`}
          ></div>
          <p className="text-gray-300 max-w-2xl mx-auto theme-transition-text">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-700 theme-transition-colors theme-transition-border ${
              formVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 theme-transition-text">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className={`transition-all duration-500 ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-1'
                    : 'opacity-0'
                }`}
              >
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${getFocusRingColor()} focus:border-transparent input-focus theme-transition-colors theme-transition-border`}
                  placeholder="John Doe"
                />
              </div>

              <div
                className={`transition-all duration-500 ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-2'
                    : 'opacity-0'
                }`}
              >
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${getFocusRingColor()} focus:border-transparent input-focus theme-transition-colors theme-transition-border`}
                  placeholder="john@example.com"
                />
              </div>

              <div
                className={`transition-all duration-500 ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-3'
                    : 'opacity-0'
                }`}
              >
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2 theme-transition-text"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${getFocusRingColor()} focus:border-transparent resize-none textarea-focus theme-transition-colors theme-transition-border`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl text-white py-3 px-6 rounded-lg font-semibold button-hover shadow-lg theme-transition-colors ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-4'
                    : 'opacity-0'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-700 ${
              infoVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4'
            }`}
          >
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 theme-transition-colors theme-transition-border ${
                infoVisible
                  ? 'animate-scale-in animate-stagger-1'
                  : 'opacity-0 scale-95'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 theme-transition-text">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4 text-gray-300">
                {[
                  { icon: '📍', text: 'Based in Vietnam' },
                  { icon: '💼', text: 'Open to remote opportunities' },
                  { icon: '⚡', text: 'Usually responds within 24 hours' },
                ].map((item, index) => (
                  <p
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 theme-transition-text ${
                      infoVisible ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </p>
                ))}
              </div>
            </div>

            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 theme-transition-colors theme-transition-border ${
                infoVisible
                  ? 'animate-scale-in animate-stagger-2'
                  : 'opacity-0 scale-95'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 theme-transition-text">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 hover:bg-white/20 rounded-lg scale-hover-md hover:shadow-lg group theme-transition-colors ${
                      infoVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                    }`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 w-full h-full">
                      <div className="relative w-6 h-6">
                        <Image
                          src={link.icon}
                          alt={link.name}
                          fill
                          className="icon-scale icon-hover theme-transition object-cover"
                        />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white theme-transition-text">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
