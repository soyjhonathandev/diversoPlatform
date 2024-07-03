import Logo from '@public/img/Logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="flex w-full md:justify-between flex-col items-center bg-black md:px-44 p-5 md:p-12">
      <div className="flex w-full flex-col lg:flex-row pt-10 lg:pt-0 h-full md:justify-between md:items-center xl:pr-52 ">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              src={Logo}
              alt="company icon"
              height={200}
              width={200}
            />
            
          </Link>
          <span className="font-medium font-secondaryFont text-lg text-white mt-3 text-start" >Una marca creada <br /> para impulsar la tuya</span>
        </div>
        <div className="max-w-lg flex flex-col gap-3 pt-6 lg:pt-0 md:px-6">
          <div>
          <h3 className='font-bold font-baseFont text-2xl text-white'>FLORIDA, US</h3>
          <p className='font-light font-secondaryFont text-lg text-white'>
            4415 NW 50TH DR 102
            GAINESVILLE, FL 32606
            </p>
          </div>
          <div>
          <h3 className='font-bold font-baseFont text-2xl text-white'>CONTACTO</h3>
        
          
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
            <p className="text-slate-50">+1 (347) 646 7471</p>
            </div>

        </div>
        </div>

        <div className="flex justify-center flex-col md:items-center items-start gap-4 md:mt-0  mt-5 ">
          <h3 className="font-bold font-baseFont text-2xl text-white">SIGUENOS</h3>
          <ul className="h-10 flex justify-center gap-6 text-white items-center pt-6 pb-5 ">
            {/* <li>
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
            </li> */}
            <li>
              <a
                href='Instagram.com/diversogroup_'
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
      <p className="font-light font-secondaryFont text-lg  text-slate-50  mt-16 text-center">
        Todos los derechos reservado DiversogroupⒸ 2024
      </p>
    </footer>
  );
};

export default Footer;
