// app/layout.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from './Components/Footer';


export const metadata = {
  title: 'Landing Page - NCompass',
  description: 'Professional landing page created with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
