import { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const SectionBlock: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <section className="h-screen bg-black overflow-hidden ">
      {children}
    </section>
  );
};
export default SectionBlock;
