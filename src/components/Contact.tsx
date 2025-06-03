'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/stores/themeStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';
import { ContactFormData, contactSchema } from '@/types/ContactFormType';

// Form validation schema

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { currentTheme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);

      // Reset form after successful submission
      reset();

      // You can add success notification here
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const getFocusRingColor = () => {
    const themeColors = {
      purple: 'focus-visible:ring-purple-500',
      blue: 'focus-visible:ring-blue-500',
      emerald: 'focus-visible:ring-emerald-500',
      orange: 'focus-visible:ring-orange-500',
      rose: 'focus-visible:ring-rose-500',
      dark: 'focus-visible:ring-gray-500',
    };
    return (
      themeColors[currentTheme.id as keyof typeof themeColors] ||
      themeColors.purple
    );
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/github.png',
      url: process.env.NEXT_PUBLIC_GITHUB_URL,
    },
    {
      name: 'LinkedIn',
      icon: '/linkedin.png',
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    },
    {
      name: 'YouTube',
      icon: '/youtube.png',
      url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    },
    {
      name: 'Email',
      icon: '/email.png',
      url: process.env.NEXT_PUBLIC_EMAIL_URL,
    },
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register('name')}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${getFocusRingColor()} focus-visible:border-transparent input-focus theme-transition-colors theme-transition-border ${
                    errors.name
                      ? 'border-red-500 focus-visible:ring-red-500'
                      : ''
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
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
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email')}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${getFocusRingColor()} focus-visible:border-transparent input-focus theme-transition-colors theme-transition-border ${
                    errors.email
                      ? 'border-red-500 focus-visible:ring-red-500'
                      : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
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
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  {...register('message')}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 ${getFocusRingColor()} focus-visible:border-transparent resize-none textarea-focus theme-transition-colors theme-transition-border ${
                    errors.message
                      ? 'border-red-500 focus-visible:ring-red-500'
                      : ''
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${currentTheme.colors.primary} hover:shadow-xl text-white py-3 px-6 rounded-lg font-semibold button-hover shadow-lg theme-transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-4'
                    : 'opacity-0'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
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
                    href={link.url || ''}
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
