import { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const SectionBlock: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <section className="md:min-h-screen  h-screen md:px-44  bg-black bg-DesktopBg-img bg-cover bg-center bg-no-repeat overflow-hidden lg:pb-10">
      {children}
    </section>
  );
};
export default SectionBlock;
