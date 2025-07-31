import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import QueryProvider from '@/components/providers/QueryProvider';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Nam's Portfolio",
  description: 'Personal portfolio showcasing my work and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{
          backgroundImage:
            'linear-gradient(#e5e7eb 1px, #0000 0), linear-gradient(90deg, #e5e7eb 1px, #0000 0)',
          backgroundSize: '100px 100px',
        }}
        suppressHydrationWarning={true}
      >
        <QueryProvider>
          <MainLayout>{children}</MainLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
