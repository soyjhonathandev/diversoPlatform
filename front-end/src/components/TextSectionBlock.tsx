import { ReactNode } from 'react';

interface ClientLayoutProps {
  direction: string;
  children: ReactNode;
}

const TextSectionBlock: React.FC<ClientLayoutProps> = ({
  direction,
  children,
}) => {
  return (
    <section
      className={`lg:min-h-screen flex flex-col justify-center  h-full lg:px-44 px-5 
      ${direction === 'right' && 'lg:bg-DesktopBg-img'} ${
        direction === 'left' && 'lg:bg-DesktopBg-img-left'
      }      ${direction === 'right' && 'bg-MobileBg-img'} ${
        direction === 'left' && 'bg-MobileBg-img-left'
      }
        bg-cover bg-center bg-no-repeat`}
    >
      {children}
    </section>
  );
};
export default TextSectionBlock;
