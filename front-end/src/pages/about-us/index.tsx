import { ClientLayout } from '@components/index';

import TextSectionBlock from '@components/TextSectionBlock';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function resaltarTexto(texto: string): React.ReactNode[] {
  const partes: string[] = texto.split(/\*\*(.*?)\*\*/g);
  const elementos: React.ReactNode[] = [];

  partes.forEach((parte: string, index: number) => {
    if (index % 2 === 0) {
      elementos.push(parte);
    } else {
      elementos.push(
        <span className="font-medium" key={index}>
          {parte}
        </span>,
      );
    }
  });

  return elementos;
}

const About: React.FC = () => {
  const t = useTranslations('aboutUs');

  return (
    <>
      <Head>
        <title>About us | Diverso</title>
        <meta name="description" content="Vela description" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ClientLayout>
        <TextSectionBlock direction="right">
          <section className="flex xl:flex-row flex-col-reverse h-full items-center justify-between mx:mt-0 mt-20">
            <div className="w-full xl:w-5/12 my-20 xl:my-0 ">
              <figure className="relative  aspect-square max-w-[400px] lg:max-w-[500px] mx-auto">
                <Image
                  src={'/img/vivint-solar-9CalgkSRZb8-unsplash.jpg'}
                  alt="Solar energy"
                  // height={420}
                  // width={420}
                  fill
                  className="rounded-xl object-cover"
                />
              </figure>
            </div>

            <div className="xl:w-2/4 w-full">
              <h1 className="font-medium md:text-xl">{t('title')}</h1>
              <h3 className="md:text-5xl text-4xl mb-8 mt-4 font-medium text-start ">
                {t('sections.firstDescription.title')}
              </h3>
              <p className="md:text-lg text-zinc-500 py-2">
                {resaltarTexto(t('sections.firstDescription.paragraph1'))}
              </p>
              <p className="md:text-lg text-zinc-500 py-2">
                {resaltarTexto(t('sections.firstDescription.paragraph2'))}
              </p>
            </div>
          </section>
        </TextSectionBlock>

        {/* Informative Cards */}

        <TextSectionBlock direction="left">
          <section className="flex h-full xl:flex-row flex-col items-center justify-between mt-6 xl:mt-0">
            <div className="xl:w-2/4 w-full ">
              <h3 className="md:text-5xl text-4xl mb-8 mt-4 font-medium text-start">
                {t('sections.secondDescription.title')}
              </h3>
              <p className="md:text-lg text-zinc-500 py-2">
                {resaltarTexto(t('sections.secondDescription.paragraph1'))}
              </p>
              <p className="md:text-lg text-zinc-500 py-2">
                {resaltarTexto(t('sections.secondDescription.paragraph2'))}
              </p>
            </div>

            <div className="w-full xl:w-3/12 my-20 xl:my-0 rounded-lg">
              <figure className="relative aspect-square max-w-[400px] lg:max-w-[500px] mx-auto">
                <Image
                  src={'/img/justin-lim-Fpcy-AdFhUg-unsplash.jpg'}
                  alt="Solar energy"
                  // height={550}
                  // width={550}
                  fill
                  className="rounded-full object-cover"
                />
              </figure>
            </div>
          </section>
        </TextSectionBlock>
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

export default About;
