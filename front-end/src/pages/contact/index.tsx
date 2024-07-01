import { ClientLayout, SectionBlock } from '@components/index';
import { Button } from '@components/ui/button';
import Head from 'next/head';
import Image from 'next/image';

import contactImg from '@public/img/contactImg.png';

import { Mail, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Contact: React.FC = () => {
  const t = useTranslations('contactPage');
  return (
    <>
      <Head>
        <title>Contact | Diverso</title>
        <meta name="description" content="Vela description" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ClientLayout>
        <SectionBlock>
          <div className="w-full h-full flex justify-center items-center">
            <section className="flex flex-row items-center justify-between max-w-[1905px]">
              <div className=" w-full md:mt-0 mt-24 flex justify-center flex-col items-start">
                <h1 className="md:text-7xl text-3xl mb-8 mt-4 font-medium text-center text-white leading-tight">
                  {t('headline')}
              
                </h1>
                <p className="md:text-lg text-zinc-500 md:max-w-[80%]  text-center">
                  {t('description')}
                </p>
             
                <div className="w-full mt-14 flex md:flex-row flex-col gap-6 md:mb-0 mb-10">
                  <a href="mailto:jhonathanjhs10@gmail.com?Subject=bla bla bla test">
                    <Button size="lg" variant="secondary" className="w-full">
                      <Mail className="mr-2 h-6 w-6" />{' '}
                      {t('callToAction.sendEmail')}{' '}
                    </Button>
                  </a>
                  <a href="https://wa.me/">
                    {' '}
                    <Button size="lg" className="w-full">
                      <MessageCircle className="mr-2 h-6 w-6" />{' '}
                      {t('callToAction.ctaButton')}
                    </Button>
                  </a>
                 
                </div>

              </div>
      
            </section>
          </div>
        </SectionBlock>
      </ClientLayout>
    </>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      messages: (await import(`/src/lang/${context.locale}.json`)).default,
    },
  };
}

export default Contact;
