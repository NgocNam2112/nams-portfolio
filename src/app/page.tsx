import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ClientOnly from '@/components/ClientOnly';
import ThemeSwitcher from '@/components/ThemeSwitcher';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 Nam Nguyen. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientOnly
        fallback={
          <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 h-16" />
        }
      >
        <Navigation />
      </ClientOnly>

      {/* Theme Switcher */}
      <ClientOnly>
        <ThemeSwitcher />
      </ClientOnly>

      <div id="home">
        <ClientOnly
          fallback={
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Nam Nguyen
                </h1>
                <p className="text-xl">Web Developer</p>
              </div>
            </section>
          }
        >
          <Hero />
        </ClientOnly>
      </div>

      <ClientOnly
        fallback={
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                About Me
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Loading...</p>
            </div>
          </section>
        }
      >
        <About />
      </ClientOnly>

      <ClientOnly
        fallback={
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Featured Projects
              </h2>
              <p className="text-gray-600">Loading projects...</p>
            </div>
          </section>
        }
      >
        <Projects />
      </ClientOnly>

      <ClientOnly
        fallback={
          <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-300">Loading contact form...</p>
            </div>
          </section>
        }
      >
        <Contact />
      </ClientOnly>

      {/* Footer */}
      <Footer />
    </main>
  );
}
