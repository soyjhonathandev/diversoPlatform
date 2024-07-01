import { ClientLayout, SectionBlock } from '@components/index';
import { Button, buttonVariants } from '@components/ui/button';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
//media

//icons
import InformativeCards from '@components/InformativeCards';
import { cn } from '@components/lib/utils';
import { Earth, HandCoins, Leaf } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const router = useRouter();
  const t = useTranslations('homePage');


  return (
    <>
      <Head>
        <title>Inicio | Diverso Group</title>
        <meta name="description" content="diverso description" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ClientLayout>
        <SectionBlock>
          <div className="w-full h-full flex justify-center items-center">
            <section className="flex h-full flex-row items-center justify-between max-w-[1905px]">
              <div className="w-full h-full mx:mt-0 flex justify-center flex-col items-center">
             
                <h1 className="md:w-2/5 md:text-8xl text-6xl mb-8 mt-4 font-bold text-center text-white ">
                  {t('headline')}
              
                </h1>      
                <Button variant='outline' size='default'>{t('callToAction.moreInfo')}</Button>
              </div>
             
            </section>
          </div>
        </SectionBlock>

        {/* informative cards*/}
        <div className="w-full flex justify-center items-center bg-black pb-8">
          <section className="h-auto w-full md:px-44 px-5 bg-background py-12  max-w-[1905px]">
          
            <div className="flex justify-between xl:flex-row flex-col gap-8  text-white">
              <InformativeCards
                title={t('informativeSection.cards.ecological.title')}
                description={t('informativeSection.cards.ecological.description')}
                icon={<Leaf className="text-card h-8 w-8" />}
                number="01" // Número de serie para la tarjeta
              />
              <InformativeCards
                title={t('informativeSection.cards.economic.title')}
                description={t('informativeSection.cards.economic.description')}
                icon={<HandCoins className="text-card h-8 w-8" />}
                number="02" // Número de serie para la tarjeta
              />
              <InformativeCards
                title={t('informativeSection.cards.social.title')}
                description={t('informativeSection.cards.social.description')}
                icon={<Earth className="text-card h-8 w-8" />}
                number="03" // Número de serie para la tarjeta
              />
            </div>
          </section>
        </div>

        {/* informative cards*/}
        <div className="w-full flex justify-center items-center bg-background pb-8">
          <section className="h-auto w-full md:px-44 px-5 bg-background py-12  max-w-[1905px]">
            <h2 className="lg:text-5xl text-3xl text-start mb-8 mt-4 font-medium text-muted">
              {t('informativeSection.title')}
            </h2>
            <div className="flex justify-between xl:flex-row flex-col gap-8  text-white">
    
            </div>
          </section>
        </div>

        {/* informative cards*/}
        <div className="w-full flex justify-center items-center bg-black pb-8">
          <section className="h-auto w-full md:px-44 px-5 bg-background py-12  max-w-[1905px]">
            <h2 className="lg:text-5xl text-3xl text-start mb-8 mt-4 font-medium text-muted">
              {t('informativeSection.title')}
            </h2>
            <div className="flex justify-between xl:flex-row flex-col gap-8  text-white">
      
            </div>
          </section>
        </div>


      </ClientLayout>
    </>
  );
};

export async function getStaticProps(context: any) {
  const locale = context.locale === 'default' ? 'es' : context.locale;
  const messages = (await import(`/src/lang/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
}

export default HomePage;
