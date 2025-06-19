import '../globals.scss';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nam Nguyen | Full Stack Developer</title>
        <meta
          name="description"
          content="Nam Nguyen is a Full Stack Developer specializing in building exceptional digital experiences with modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nam Nguyen | Full Stack Developer" />
        <meta
          property="og:description"
          content="Nam Nguyen is a Full Stack Developer specializing in building exceptional digital experiences with modern web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
