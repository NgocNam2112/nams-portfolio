'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/stores/themeStore';
import Image from 'next/image';
import Link from 'next/link';
import { ContactFormData, contactSchema } from '@/types/schema/contact-form';
import { SOCIAL_LINKS, THEME_FORCUS_RING_COLOR } from '@/constants';
import BaseInput from './helper/BaseInput';
import BaseTextArea from './helper/BaseTextArea';
import BaseButton from './helper/BaseButton';
import { useMemo } from 'react';

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { currentTheme } = useTheme();

  const focusRingColor = useMemo(
    () =>
      THEME_FORCUS_RING_COLOR[
        currentTheme.id as keyof typeof THEME_FORCUS_RING_COLOR
      ] || THEME_FORCUS_RING_COLOR.purple,
    [currentTheme.id]
  );

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);

      reset();

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
  };

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
                <BaseInput
                  label="Your Name"
                  name="name"
                  register={register}
                  error={errors.name}
                  focusRingColor={focusRingColor}
                />
              </div>

              <div
                className={`transition-all duration-500 ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-2'
                    : 'opacity-0'
                }`}
              >
                <BaseInput
                  label="Email Address"
                  name="email"
                  register={register}
                  error={errors.email}
                  focusRingColor={focusRingColor}
                />
              </div>

              <div
                className={`transition-all duration-500 ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-3'
                    : 'opacity-0'
                }`}
              >
                <BaseTextArea
                  label="Message"
                  name="message"
                  register={register}
                  error={errors.message}
                  focusRingColor={focusRingColor}
                />
              </div>

              <BaseButton
                type="submit"
                disabled={isSubmitting}
                fullWidth
                className={`scale-hover-md ${
                  formVisible
                    ? 'animate-fade-in-up animate-stagger-4'
                    : 'opacity-0'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </BaseButton>
            </form>
          </div>

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
                {SOCIAL_LINKS.map((link, index) => (
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
                          sizes="24px"
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
