/* eslint-disable react-hooks/exhaustive-deps */
import useWindowSize from '@components/lib/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
//media
import Logo from '@public/img/Logo.png';

//icons
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import capitalizeFirstLetter from 'src/lib/CapitalizeFirstLetter';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Header: React.FC = () => {
  const router = useRouter();
  const winSize = useWindowSize();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFading, setFading] = useState(false);
  // const { getUserById }: any = useGetUserById();
  const t = useTranslations('navigation');



  const toggleModal = () => {
    if (isModalOpen) {
      setFading(true);
      setTimeout(() => {
        setModalOpen(false);
        setFading(false);
      }, 300);
    } else {
      setModalOpen(true);
    }
  };
  // console.log(router);
  if (winSize.width < 1024) {
    return (
      <>
        <nav
          className={`fixed z-40 flex fhd:h-16 hd:h-10 h-18 w-screen justify-between  bg-black/20 backdrop-blur-xl  px-6 py-3 ${
            isModalOpen && 'bg-background'
          } transition-all duration-500  ease-in `}
        >
          <Link href="/">
            <Image src={Logo} alt="diverso group logo" height={200} width={200} />
          </Link>
          <div className=" flex flex-row  items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="overflow-visible">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative flex justify-center items-center border-transparent text-white"
                >
                  <span className="mr-1 text-sm xl:text-base">
                    {capitalizeFirstLetter(router.locale || '')}
                  </span>
                  <ChevronDown className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="min-w-28 bg-white p-2"
                align="end"
              >
                <DropdownMenuItem>
                  <Link href={router.asPath} locale="es">
                    {t('languages.es')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={router.asPath} locale="en">
                    {t('languages.en')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
      
            <button type="button" onClick={toggleModal}>
              {isModalOpen ? (
                <X className="text-white h-10 w-10 transition-all duration-500  ease-in" />
              ) : (
                <Menu className="text-white h-10 w-10 tRotateCwransition-all duration-500  ease-in" />
              )}
            </button>
          </div>
        </nav>
        {isModalOpen && (
          <div
            className={`fixed left-0 top-12 z-20 flex flex-col h-screen w-screen items-center justify-center bg-black transition-all duration-500  ease-in px-5 font-baseFont ${
              isFading
                ? 'opacity-0 transition-opacity duration-400'
                : 'opacity-100'
            }`}
          >
            <ul className="mb-20 flex flex-col items-left gap-8 fhd:text-6xl text-5xl font-medium text-center text-textGray">
              <li>
                <button onClick={toggleModal}>
                <a
                  href="#home"
                  className={
                    router.pathname === '/'
                      ? 'text-white'
                      : 'text-[#666666] hover:text-gray-400'
                  }
                >
                  {t('home')}
                  </a>
                </button>
              </li>
              <li>
                <button onClick={toggleModal}>
                <a
                  href="#services"
                  className={
                    router.pathname === '/'
                      ? 'text-white'
                      : 'text-[#666666] hover:text-gray-400'
                  }
                >
                  {t('services')}
                  </a>
                </button>
              </li>
              <li>
                <button onClick={toggleModal}>
                <a
                  href="#contact"
                  className={
                    router.pathname === '/'
                      ? 'text-white'
                      : 'text-[#666666] hover:text-gray-400'
                  }
                >
                  {t('contact')}
                  </a>
                </button>
              </li>
           
             
            </ul>
           
          </div>
        )}
      </>
    );
  }

  return (
    <nav className="z-20 flex justify-between h-[100px] w-screen fixed items-center m-auto md:px-10 xl:px-52 bg-black/20 backdrop-blur-xl font-baseFont">
      <Link href="/">
        <Image src={Logo} alt="company icon" height={180} width={180} />
      </Link>

      <ul className="flex w-2/4 xl:w-6/12 flex-row xl:text-3xl  items-center justify-evenly justify-items-center font-medium">
        <li>
          <a
            href="#home"
            className={
              router.pathname === '/'
                ? 'text-white'
                : 'text-[#666666] hover:text-gray-400'
            }
          >
            {t('home')}
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={
              router.pathname === '/'
                ? 'text-white'
                : 'text-[#666666] hover:text-gray-400'
            }
          >
            {t('services')}
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={
              router.pathname === '/'
                ? 'text-white'
                : 'text-[#666666] hover:text-gray-400'
            }
          >
            {t('contact')}
          </a>
        </li>
       
      </ul>

      <div className="flex items-center gap-5 w-[40%] xl:w-[20%]">
       

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="overflow-visible">
            <Button
              variant="ghost"
              size="sm"
              className="relative flex justify-center items-center border-transparent text-white"
            >
              <span className="mr-1 text-sm xl:text-base">
                {capitalizeFirstLetter(router.locale || '')}
              </span>
              <ChevronDown className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-28 bg-zinc-600 p-2 text-white" align="end">
            <DropdownMenuItem>
              <Link href={router.asPath} locale="es">
                {t('languages.es')}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={router.asPath} locale="en">
                {t('languages.en')}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
