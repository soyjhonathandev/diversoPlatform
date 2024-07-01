import Logo from '@public/img/Logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="flex w-full md:justify-between flex-col items-center bg-black md:px-44 p-5 md:p-12">
      <div className="flex w-full flex-col lg:flex-row pt-10 lg:pt-0 h-full md:justify-between md:items-center xl:pr-52 bg-transparent">
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="company icon"
              height={200}
              width={200}
            />
            <span className="text-white font-medium mt-10" >Una marca creada <br/> para impulsar la tuya</span>
          </Link>
         
        </div>
        <div className="max-w-lg space-y-2 pt-6 lg:pt-0 px-6">
          <h3 className="text-white font-bold">FLORIDA, US</h3>
          <p className="text-white">
            4415 NW 50TH DR 102
            GAINESVILLE, FL 32606
          </p>
          <p className="text-white font-bold">CONTACTO</p>
          {router.locale === 'es' && (
          <div className="flex items-center gap-5">
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              width="30"
              height="40"
            >
              <defs>
                <g id="d" transform="translate(0 -36)">
                  <g id="c">
                    <g id="b">
                      <path
                        d="M0-5L-1.545-.245l2.853.927z"
                        fill="#fff"
                        id="a"
                      />
                      <use href="#a" transform="scale(-1 1)" />
                    </g>
                    <use href="#b" transform="rotate(72)" />
                  </g>
                  <use href="#b" transform="rotate(-72)" />
                  <use href="#c" transform="rotate(144)" />
                </g>
              </defs>
              <path d="M0 0h180v120H0z" fill="#cf142b" />
              <path d="M0 0h180v80H0z" fill="#00247d" />
              <path d="M0 0h180v40H0z" fill="#fc0" />
              <g transform="translate(90 84)">
                <g id="f">
                  <g id="e">
                    <use href="#d" transform="rotate(10)" />
                    <use href="#d" transform="rotate(30)" />
                  </g>
                  <use href="#e" transform="rotate(40)" />
                </g>
                <use href="#f" transform="rotate(-80)" />
              </g>
            </svg>
            <p className="text-slate-50">+58 ------</p>
          </div>
          )}
          {router.locale === 'en' && (
          <div className="flex items-center gap-5">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7410 3900"
              width="30"
              height="40"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                stroke="#fff"
                stroke-width="300"
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.53 217.08-184.66-134.16h228.26L176.47 307.08z"
                        />
                        <use y="420" href="#a" />
                        <use y="840" href="#a" />
                        <use y="1260" href="#a" />
                      </g>
                      <use y="1680" href="#a" />
                    </g>
                    <use y="210" x="247" href="#b" />
                  </g>
                  <use x="494" href="#c" />
                </g>
                <use x="988" href="#d" />
                <use x="1976" href="#c" />
                <use x="2470" href="#e" />
              </g>
            </svg>
            <p className="text-slate-50">+1 (---) =======</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-6 pt-6 lg:gap-4 lg:pt-0">
          <Link className="uppercase text-white font-bold" href="/">
            Home
          </Link>
          <Link className="uppercase text-white font-bold" href="/about-us">
            Services
          </Link>
          <Link className="uppercase text-white font-bold" href="/contact">
            contact
          </Link>
          <Link className="uppercase text-white font-bold" href="/about-us">
            About us
          </Link>
          
        </div>
        <div className="flex justify-center flex-col items-center gap-4 ">
          <h3 className="text-white font-bold">SIGUENOS</h3>
          <ul className="h-10 flex justify-center gap-6 text-white items-center pt-6 pb-5 ">
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href=''
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-20 lg:pt-0 text-slate-50">
        Todos los derechos reservado DiversogroupⒸ 2024
      </p>
    </footer>
  );
};

export default Footer;
