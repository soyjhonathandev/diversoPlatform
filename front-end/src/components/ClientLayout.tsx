import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-full font-baseFont">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
