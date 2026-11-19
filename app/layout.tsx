import type { Metadata } from 'next';
import { Cormorant_Garamond, Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import ReservationProvider from '@/components/providers/ReservationProvider';
import ChunkErrorRecovery from '@/components/providers/ChunkErrorRecovery';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import PageTransition from '@/components/ui/PageTransition';
import ReservationModal from '@/components/booking/ReservationModal';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AQUA VIVA — The Art of Living Water | Ultra-Luxury Resort & Private Sanctuary',
  description: 'An extraordinary waterfront retreat shaped by nature, architecture and the quiet beauty of living water. Mineral Modernism on a private ocean atoll.',
  keywords: ['Aqua Viva', 'Luxury Resort', 'Mineral Modernism', 'Waterfront Villas', 'Private Atoll', 'Architectural Sanctuary'],
  openGraph: {
    title: 'AQUA VIVA — The Art of Living Water',
    description: 'An extraordinary waterfront retreat shaped by nature, architecture and the quiet beauty of living water.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85',
        width: 1920,
        height: 1080,
        alt: 'Aqua Viva Living Water Resort',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="bg-salt font-sans text-darkness antialiased selection:bg-kingtide selection:text-salt relative">
        {/* Subtle Luxury Film Grain Texture */}
        <div className="film-grain" />

        <ChunkErrorRecovery />

        <SmoothScrollProvider>
          <ReservationProvider>
            <CustomCursor />
            <PageTransition />
            <Navbar />
            <main className="relative min-h-screen">
              {children}
            </main>
            <ReservationModal />
            <Footer />
          </ReservationProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
