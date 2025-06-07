'use client';

import './globals.scss';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import ClientOnly from '@/components/ClientOnly';
import Navigation from '@/components/Navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider>
          <main className="min-h-screen">
            <ClientOnly
              fallback={
                <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 h-16" />
              }
            >
              <Navigation />
            </ClientOnly>

            {children}

            {/* Theme Switcher */}
            <ClientOnly>
              <ThemeSwitcher />
            </ClientOnly>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
