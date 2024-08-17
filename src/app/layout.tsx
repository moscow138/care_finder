import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Provider from '@/components/Provider';
import { UserLocationProvider } from './context/UserLocationContext';
import { SelectedBusinessProvider } from './context/SelectedBusinessContext';
import { BusinessListProvider } from './context/BusinessListContext';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareFinder',
  description: 'Developed by John ogheneochuko Altschool Africa Engineering student!',
};


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='en'>
      <body className={raleway.className}>

      <UserLocationProvider>
        <SelectedBusinessProvider>
          <BusinessListProvider>
         <Provider>
           <Navbar />
           {children}
           <Toaster />
         </Provider>
         </BusinessListProvider>
        </SelectedBusinessProvider>
      </UserLocationProvider>
      <Footer />
      </body>
    </html>
  );
}
