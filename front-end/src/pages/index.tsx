import { ClientLayout, SectionBlock } from '@components/index';
import { Button, buttonVariants } from '@components/ui/button';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useRef } from 'react';
//media
import Logo from '@public/img/Logo.png';
import Catalogue1 from '@public/img/catalogue1.png';
import Catalogue2 from '@public/img/catalogue2.png';
import Catalogue3 from '@public/img/catalogue3.png';

import Service1 from '@public/img/service1.png';
import Service2 from '@public/img/service2.png';
import Service3 from '@public/img/service3.png';

import customerLogo1 from '@public/img/customer1.png';
import customerLogo2 from '@public/img/customer2.png';
import customerLogo3 from '@public/img/customer3.png';
import customerLogo4 from '@public/img/customer4.png';
import customerLogo5 from '@public/img/customer5.png';
import customerLogo6 from '@public/img/customer6.png';
import customerLogo7 from '@public/img/customer7.png';
import customerLogo8 from '@public/img/customer8.png';
import customerLogo9 from '@public/img/customer9.png';
import customerLogo11 from '@public/img/customer11.png';
import customerLogo12 from '@public/img/customer12.png';
import customerLogo13 from '@public/img/customer13.png';
import customerLogo14 from '@public/img/customer14.png';
import customerLogo15 from '@public/img/customer15.png';
import customerLogo16 from '@public/img/customer16.png';
import customerLogo17 from '@public/img/customer17.png';
import customerLogo18 from '@public/img/customer18.png';
//icons
import { MoveRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const t = useTranslations('homePage');
  const images = [customerLogo1, customerLogo2, customerLogo3,  customerLogo5, customerLogo6, customerLogo7, customerLogo8, customerLogo9, customerLogo4, customerLogo11, customerLogo12, customerLogo13, customerLogo14, customerLogo15, customerLogo16, customerLogo17, customerLogo18 ];

  return (
    <>
      <Head>
        <title>Inicio | Diverso Group</title>
        <meta name="description" content="Una marca creada para impulsar la tuya" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ClientLayout>
        <SectionBlock>
          <div id='home' className="w-full md:px-44  h-full flex justify-center items-center  bg-DesktopBg-img bg-cover bg-center bg-no-repeat md:rounded-b-full">
            <section className="flex h-full flex-row items-center justify-between max-w-[1905px]">
              <div className="w-full h-full mx:mt-0 flex justify-center flex-col items-center">
                <h1 className="md:w-3/5 md:text-9xl text-7xl mb-8 mt-4 font-bold text-center text-white ">
                  {t('headline')}
                </h1>
                <Button variant="outline" size="default">
                  {t('callToAction')}
                </Button>
              </div>
            </section>
          </div>
        </SectionBlock>

        {/* informative cards*/}
        <section id='services' className="w-full flex justify-center items-center bg-black py-10">
          <div className="h-auto w-full md:px-44 px-5 bg-background py-12 max-w-[1905px]">
            <div className="flex justify-between xl:flex-row flex-col gap-16 text-white">
              {/* Card 1 */}
              <article className="flex flex-col items-center text-center space-y-4">
                <div className="flex  h-20 items-center flex-row">
                  <span className="text-9xl font-bold text-white/50">01</span>
                  <h3 className="text-5xl font-bold">
                    {' '}
                    {t('services.cards.card1.title')}
                  </h3>
                </div>

                <p className="font-light font-secondaryFont text-lg">
                  {t('services.cards.card1.description')}
                </p>
                <a
                  href="#service1">
                  
                <button className="mt-4 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-2xl">
                  {t('services.cards.card1.callToAction')}
                  </button>
                </a>
              </article>
              {/* Card 2 */}
              <article className="flex flex-col items-center text-center space-y-4  p-4 rounded-lg ">
                <p className="font-light font-secondaryFont text-lg">
                  {t('services.cards.card2.description')}
                </p>
                <div className="relative h-20 flex items-center justify-center py-5">
                  <span className="text-9xl font-bold text-white/50 absolute ">
                    02
                  </span>
                  <h3 className="text-5xl font-bold z-5">
                    {t('services.cards.card2.title')}
                  </h3>
                </div>
                <a
                  href="#service2">
                <button className="mt-8 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-2xl">
                  {t('services.cards.card2.callToAction')}
                  </button>
                </a>
              </article>
              {/* Card 3 */}
              <article className="flex flex-col items-center text-center space-y-4">
                <div className="relative h-20 flex items-center justify-center py-5">
                  <span className="text-9xl font-bold text-white/50 absolute right-0">
                    03
                  </span>
                  <h3 className="text-5xl font-bold z-5">
                    {t('services.cards.card3.title')}
                  </h3>
                </div>

                <p className="font-light font-secondaryFont text-lg">
                  {t('services.cards.card3.description')}
                </p>
                <a
                  href="#service3">
                <button className="mt-6 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-2xl">
                  {t('services.cards.card3.callToAction')}
                  </button>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/*Catalogue auto slider*/}
        <section className="w-full md:h-[700px] flex justify-center  bg-background">
          <div className="flex justify-between xl:flex-row flex-col w-full h-11/12 overflow-hidden ">
            <div className="px-3 flex items-center">
              <Image src={Catalogue1} alt="company icon" objectFit="cover" />
            </div>
            <div className="px-3 flex items-center md:block hidden">
              <Image src={Catalogue2} alt="company icon" objectFit="cover" />
            </div>
            <div className="px-3 flex items-center md:block hidden">
              <Image src={Catalogue3} alt="company icon" objectFit="cover" />
            </div>
          </div>
        </section>

        {/* Service 1*/}
        <section id='service1' className="w-full  md:h-screen h-full flex justify-center items-center bg-white pb-8">
          <div className="h-auto w-full flex md:flex-row flex-col md:px-44 px-5  py-12  max-w-[1905px]">
            <div className="xl:w-2/4 w-full md:mt-0 mt-24 flex justify-center flex-col items-center">
              <div className=" relative">
              <div className="flex md:h-[600px] md:w-[450px] w-full items-center overflow-hidden">
                <span className="text-9xl font-bold text-black/40 absolute top-[-50px] md:left-[-50px]">
                  01
                </span>
                <Image src={Service1} alt="company icon" objectFit="cover" />
              </div>
              </div>
            </div>
            <article className="xl:w-2/4 w-full md:mt-0 mt-10 flex justify-center flex-col md:items-start px-3">
              <div className='h-32 mb-8 '>
              <h2 className="lg:text-8xl text-7xl md:text-start text-justify mb-2  font-medium text-black">
                {t('serviceSections.section1.title')}
              </h2>
                <span className="lg:text-5xl text-4xl md:text-start text-center font-medium text-black">{t('serviceSections.section1.subTitle')}</span>
              </div>
              <ul className='md:mt-5 text-xl font-secondaryFont font-medium flex flex-col gap-2'>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section1.list.item1')}</li>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section1.list.item2')}</li>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section1.list.item3')}</li>
              </ul>
              <a
                href="mailto:hi@diversocreativeagency.com?Subject=Hola, Estoy interesado en una cotizacion para el servicio de Branding!!"
              >
              <button className="mt-6 px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-2xl">
                {t('serviceSections.section1.callToAction')}
                </button>
              </a>
            </article>
          </div>
        </section>

        {/* Service 2*/}
        <section id='service2' className="w-full  md:h-screen h-full  flex justify-center items-center bg-black pb-8">
          <div className="h-auto w-full flex md:flex-row flex-col md:px-44 px-5  py-12  max-w-[1905px]">
            <article className="xl:w-2/4 w-full md:mt-0 mt-10 flex justify-center flex-col md:items-start text-white px-3">
              <div className=' mb-8 '>
                <h2 className="lg:text-8xl text-7xl md:text-start text-justify  mb-2  font-medium">
                  {t('serviceSections.section2.title')}
                </h2>
                <span className="lg:text-2xl font-secondaryFont font-medium  text-2xl md:text-start text-center font-medium">{t('serviceSections.section2.subTitle')}</span>
              </div>
              <ul className=' text-xl  font-secondaryFont font-medium flex flex-col gap-2'>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section2.list.item1')}</li>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section2.list.item2')}</li>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section2.list.item3')}</li>
                <li className='flex flex-row gap-3'><MoveRight /> {t('serviceSections.section2.list.item4')}</li>
              </ul>
              <a
                href="mailto:hi@diversocreativeagency.com?Subject=Hola, Estoy interesado en una cotizacion para el servicio de Diseño gráfico!!"
              >
              <button className="mt-6 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-2xl">
                {t('serviceSections.section2.callToAction')}
                </button>
              </a>
            </article>

            <div className="xl:w-2/4 w-full md:mt-0 mt-24 flex justify-center flex-col items-center">
              <div className=" relative">
              <div className="flex md:h-[600px] md:w-[450px] w-full items-center  overflow-hidden">
                <span className="text-9xl font-bold text-white/90 absolute top-[-50px] md:right-[-50px]">
                  02
                </span>
                <Image src={Service2} alt="company icon" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3*/}
        <section id='service3' className="w-full md:h-screen h-full flex justify-center items-center bg-white pb-8">
          <div className="h-auto w-full flex md:flex-row flex-col md:px-44 px-5  py-12  max-w-[1905px]">
            <div className="xl:w-2/4 w-full md:mt-0 mt-24 flex justify-center flex-col items-center">
              <div className=" relative">
              <div className="flex md:h-[600px] md:w-[450px] w-full items-center overflow-hidden">
                <span className="text-9xl font-bold text-black/50 absolute top-[-70px] md:left-[-50px]">
                  03
                </span>
                <Image src={Service3} alt="company icon" objectFit="cover" />
              </div>
              </div>
            </div>
            <article className="xl:w-2/4 w-full md:mt-0 mt-10 flex justify-center flex-col md:items-start px-3">
              <div className=' mb-8 '>
                <h2 className="lg:text-8xl text-7xl md:text-start text-justify mb-2  font-medium text-black">
                  {t('serviceSections.section3.title')}
                </h2>
                <span className="lg:text-5xl text-4xl md:text-start text-center font-medium text-black">{t('serviceSections.section3.subTitle')}</span>
              </div>
              <ul className=' text-xl font-secondaryFont font-medium flex flex-col gap-2'>
                <li className='flex flex-row gap-3'> <MoveRight /> {t('serviceSections.section3.list.item1')}</li>
                <li className='flex flex-row gap-3'> <MoveRight /> {t('serviceSections.section3.list.item2')}</li>
                <li className='flex flex-row gap-3'> <MoveRight /> {t('serviceSections.section3.list.item3')}</li>
                <li className='flex flex-row gap-3'> <MoveRight /> {t('serviceSections.section3.list.item4')}</li>
              </ul>
              <a
                href="mailto:hi@diversocreativeagency.com?Subject=Hola, Estoy interesado en una cotizacion para el servicio de Gestión de redes!!"
              >
              <button className="mt-6 px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-2xl">
                {t('serviceSections.section3.callToAction')}
                </button>
              </a>
            </article>
          </div>
        </section>

        {/* Customers Slider */}
        <section className="w-full flex justify-center items-center bg-black pb-8">
          <div className="h-auto w-full md:px-44 px-5 bg-background py-12 max-w-[1905px]">
            <h2 className=" text-4xl text-center mb-10 mt-4 font-medium text-muted">
              {t('customers')}
            </h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-20 animate-marquee">
                {images.concat(images).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-38 h-16"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact*/}
        <section id='contact' className="w-full flex justify-center items-center bg-black">
          <div className="h-auto w-full md:px-44 px-5 bg-background py-5  max-w-[1905px] flex md:flex-row flex-col">
            <div className="md:w-6/12">
              <h3 className="lg:text-7xl text-5xl text-start mb-3 mt-4 font-medium text-muted">
                {t('contact.titleP1')}
              </h3>
              <h3 className="lg:text-7xl text-5xl text-start mb-8 font-medium text-muted">
                {t('contact.titleP2')}
              </h3>
            </div>
            <div className="flex md:w-5/12 flex-col gap-5  text-white">
              <a
                href="mailto:hi@diversocreativeagency.com?Subject=Hola, Estoy interesado en trabajar con Ustedes!!"
                className="w-full"
              >
                <Button
                  variant={'outline'}
                  className="mt-6 px-6 py-2 w-full border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-2xl"
                >
                  {t('contact.callToAction1')}
                </Button>
              </a>
              <a href="https://wa.me/13476467471" className="w-full">
                <Button
                  variant={'default'}
                  className="mt-6 px-6 py-2 w-full border-2 border-white rounded-full  transition-colors text-2xl"
                >
                  {t('contact.callToAction2')}
                </Button>
              </a>
            </div>
          </div>
        </section>
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
