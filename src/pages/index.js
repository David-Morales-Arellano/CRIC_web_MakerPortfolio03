import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Gancho() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [subMenuOpen, setSubMenuOpen] = useState({
    necesidad: false,
    solucion: false,
    beneficios: false,
    colaboraciones: false,
    gancho: false,
  });

  const handleSubMenuToggle = (submenuName) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [submenuName]: !prev[submenuName],
    }));
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between   ${inter.className}`}
    >
      <Head>
        <title>CRIC</title>
      </Head>

      <nav className="backdrop-blur-2xl bg-gray-700/25 fixed w-full z-20 top-0 start-0 border-b border-1 border-white/15">
        <div className="max-w-screen-xl flex flex-wrap items-center lg:justify-between mx-auto p-4 md:justify-center justify-between">
          <a href="../" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/favicon.ico" className="h-12 w-12 pr-2" alt="Flowbite Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowraptext-white text-white">CRIC</span>
          </a>
          <div className="flex pl-8 md:px-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-black text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle Mobile Menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col text-center p-4 md:pl-16 px-8 md:p-0 mt-4 font-medium lg:bg-none md:bg-none bg-gradient-to-r from-indigo-600 to-pink-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">

              <li>
                <a href="\webs\necesidad" className="block py-2 px-8 rounded md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 text-white hover:bg-gray-200 hover:text-black  border-gray-700">NECESIDAD</a>
              </li>
              <li className="relative group">
                <Link
                  href="#"
                  className={`block py-2 px-8 text-center md:p-0 rounded  font-semibold lg:hover:text-fuchsia-700 text-white md:hover:text-fuchsia-700 md:hover:bg-transparent lg:hover:bg-transparent hover:bg-gray-100 hover:text-black  ${subMenuOpen.necesidad ? 'lg:bg-transparent md:bg-transparent  bg-gray-200' : ''}`}
                  onClick={() => handleSubMenuToggle('solucion')}
                >
                  SOLUCION
                </Link >
                <ul className={`absolute ${subMenuOpen.solucion ? 'block' : 'hidden'}  bg-gradient-to-r from-gray-700 via-gray-900 to-black mt-4 lg:w-56 md:w-44 w-full p-2 rounded-lg`}>
                  <li>
                    <Link href="/webs/solucion/#enfoque" className="block pt-3 font-semibold text-gray-100 hover:text-gray-500">
                      ENFOQUE
                    </Link>
                  </li>
                  <li>
                    <Link href="/webs/solucion/#talleres" className="block py-3 font-semibold text-gray-100 hover:text-gray-500">
                      TALLERES
                    </Link>
                  </li>
                  <li>
                    <Link href="/webs/solucion/#charlas" className="block pb-3 font-semibold text-gray-100 hover:text-gray-500">
                      CHARLAS
                    </Link>
                  </li>
                  <li>
                    <Link href="/webs/solucion/#metalife" className="block pb-2 font-semibold text-gray-100 hover:text-gray-500">
                      METALIFE
                    </Link>
                  </li>

                </ul>
              </li>
              <li>
                <a href="\webs\beneficios" className="block py-2 px-8 rounded md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 text-white hover:bg-gray-200 hover:text-black  border-gray-700">BENEFICIOS</a>
              </li>
              <li>
                <a href="\webs\colaboraciones" className="block py-2 px-8 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 text-white hover:bg-gray-200 hover:text-black  border-gray-700">ALIANZAS</a>
              </li>
              <li>
                <a href="\webs\gancho" className="block py-2 px-8 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 text-white hover:bg-gray-200 hover:text-black  border-gray-700">GANCHO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <div className="h-screen w-screen bg-transparent relative">
        <img className="object-fit h-auto w-screen lg:visible md:invisible invisible" src="img20.JPG" alt="" />
        <img className="object-scale-down md:h-screen md:w-screen h-screen w-screen lg:invisible md:visible visible lg:mb-0 md:mb-0 bg-black absolute top-0 left-0" src="Logo2.png" alt="" />
      </div>

  
      <div className="grid grid-cols-5 grid-rows-5 justify-items-center items-center w-screen h-screen lg:mt-96 mt-20 lg:mb-10">

        
        <h1 className="col-start-1 row-start-1 col-span-5 row-span-2 font-bold lg:text-6xl md:text-5xl text-5xl text-center dark:text-white mb-44 leading-snug">Un poco de <mark className="px-2 dark:text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg">nosotros</mark></h1>
        

        <iframe
          className="col-start-1 row-start-2 col-span-5 row-span-4 lg:w-8/12 lg:h-5/6 md:w-11/12 md:h-5/6 w-11/12 h-5/6 rounded-xl"
          src="https://www.youtube.com/embed/48sQ-gPvz9s"
          title="CRIC_VideoPlayer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>




      <div className="grid grid-cols-6 grid-rows-6 items-center justify-items-center     lg:h-screen md:h-screen h-full w-screen bg-black">

        <h1 className='font-bold lg:text-6xl md:text-5xl text-3xl text-pink-600     md:ml-20 mx-10      lg:col-start-1 lg:row-start-3 lg:col-span-3 lg:ml-16 lg:mb-32    md:col-start-1 md:row-start-1 md:col-span-6    col-start-1 row-start-1 col-span-6 row-span-2'>Club Robótica e Informática Churriana</h1>
        <p className='font-semibold text-2xl text-white text-justify         mx-10     lg:col-start-1 lg:row-start-4 lg:col-span-3 lg:row-span-1 lg:ml-16 lg:mt-44       md:col-start-1 md:row-start-5 md:col-span-6 md:row-span-2  md:mb-16 md:px-5 leading-normal    col-start-1 row-start-4 col-span-6 row-span-3 mt-20 mb-20'>Somos una iniciativa creada por<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold"> 4 jóvenes estudiantes</span>  comprometidos con la idea de mejorar el mundo. Vivimos en la<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold"> Era Digital, </span> nos valemos de la tecnología.</p>
        <img className="object-scale-down w-5/6 md:mt-72        lg:col-start-4 lg:row-start-2 lg:col-span-3 lg:row-span-4  lg:mb-60    md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-2   col-start-1 row-start-2 col-span-6 row-span-3" src="/img21.JPG" alt="CRIC"></img>

      </div>


      <div className="grid grid-cols-6 grid-rows-6 items-center justify-items-center     lg:h-screen md:h-screen h-full w-screen bg-white">

        <h1 className='font-bold lg:text-6xl md:text-5xl text-3xl text-pink-600     md:ml-20 mx-10      lg:col-start-4 lg:row-start-3 lg:col-span-3 lg:mb-32    md:col-start-1 md:row-start-1 md:col-span-6    col-start-1 row-start-1 col-span-6 row-span-2'>Nuestra misión</h1>
        <p className='font-semibold text-2xl text-black text-justify         mx-10     lg:col-start-4 lg:row-start-4 lg:col-span-3 lg:row-span-1 lg:ml-16 lg:mt-44       md:col-start-1 md:row-start-5 md:col-span-6 md:row-span-2  md:mb-16 md:px-5 leading-normal     col-start-1 row-start-4 col-span-6 row-span-3 mt-20 mb-20'>Nuestra misión es hacer llegar esas nuevas herramientas a todo el mundo, <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">sin discriminación alguna</span>. Desde CRIC confiamos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold"> la educación de calidad</span> como canal para lograrlo.</p>
        <img className="object-scale-down w-5/6 md:mt-72        lg:col-start-1 lg:row-start-2 lg:col-span-3 lg:row-span-4  lg:mb-60    md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-2   col-start-1 row-start-2 col-span-6 row-span-3" src="/Index2.JPG" alt="ODS"></img>

      </div>



      <div className="grid grid-cols-6 grid-rows-6 items-center justify-items-center     lg:h-screen md:h-screen h-full w-screen bg-black">

        <h1 className='font-bold lg:text-6xl md:text-5xl text-3xl text-pink-600     md:ml-20 mx-10      lg:col-start-1 lg:row-start-3 lg:col-span-3 lg:ml-16 lg:mb-32    md:col-start-1 md:row-start-1 md:col-span-6    col-start-1 row-start-1 col-span-6 row-span-2'>Valores, Tecnología y Sociedad</h1>
        <p className='font-semibold text-2xl text-white text-justify         mx-10     lg:col-start-1 lg:row-start-4 lg:col-span-3 lg:row-span-1 lg:ml-16 lg:mt-44       md:col-start-1 md:row-start-5 md:col-span-6 md:row-span-2  md:mb-16 md:px-5 leading-normal     col-start-1 row-start-4 col-span-6 row-span-3 mt-20 mb-20'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold">Queremos cambiar el mundo.</span> Estamos dando nuestros primeros pasos, siempre teniendo en cuenta nuestra ética para poder hacer el bien con nuestros actos. <mark className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg font-medium">¿Te atreves a hacerlo con nosotros?</mark></p>
        <img className="object-scale-down w-5/6 md:mt-72        lg:col-start-4 lg:row-start-2 lg:col-span-3 lg:row-span-4  lg:mb-60    md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-2   col-start-1 row-start-2 col-span-6 row-span-3" src="/img22.JPG" alt="ODS"></img>

      </div>



      <div className="grid grid-cols-6 grid-rows-3 items-center justify-items-center h-full w-full md:mb-20 mb-16">



        <h1 className="font-bold md:text-left lg:text-6xl md:text-8xl text-6xl leading-snug dak:text-white     col-start-2 row-start-1 col-span-4 mt-10 mb-0">Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">alineamos</span> con...</h1>



        <div className="lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-2 shadow-black shadow-2xl  md:col-start-1 md:row-start-3 md:col-span-3 lg:mb-20    col-start-1 row-start-2 col-span-6 mt-10     h-min w-10/12 md:h-min md:w-72 lg:h-min lg:w-96   bg-gray-200 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">

          <img className="rounded-t-lg" src="/ods/ods3.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ODS 3</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nuestra labor repercute en el bienestar físico y mental de nuestros conciudadanos.</p>
            <a href="https://www.un.org/sustainabledevelopment/es/health/" target='_blank' className="flex items-center justify-center px-3 py-2 mt-8 mb-4 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-600 to-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
              Más Información
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>


        <div className=" lg:col-start-3 lg:row-start-2 lg:col-span-2 lg:row-span-2 shadow-black shadow-2xl  md:col-start-3 md:row-start-2 md:col-span-2 lg:mb-20    col-start-1 row-start-3 col-span-6 mt-10     h-min w-10/12 md:h-min md:w-72 lg:h-min lg:w-96   bg-gray-200 border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700">

          <img className="rounded-t-lg" src="/ods/ods4.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ODS 4 - Objetivo principal</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">La educación de calidad es el objetivo por antonomasia de nuestro proyecto.</p>
            <a href="https://www.un.org/sustainabledevelopment/es/education/" target='_blank' className="flex items-center justify-center px-3 py-2 mt-8 mb-4 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-800 dark:gray-800 dark:hover:gray-800 dark:focus:ring-gray-800">
              Más Información
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>



        <div className="lg:col-start-5 lg:row-start-2 lg:col-span-2 lg:row-span-2 shadow-black shadow-2xl  md:col-start-4 md:row-start-3 md:col-span-3 lg:mb-20 2     col-start-1 row-start-4 col-span-6 mt-10     h-min w-10/12 md:h-min md:w-72 lg:h-min lg:w-96   bg-gray-200 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">

          <img className="rounded-t-lg" src="/ods/ods10.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ODS 10</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Compartimos recursos, transmitimos conocimiento, reducimos las brechas.</p>
            <a href="https://www.un.org/sustainabledevelopment/es/inequality/" target='_blank' className="flex items-center justify-center px-3 py-2 mt-8 mb-4 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800 dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
              Más Información
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </div>


      <section id="equipo"></section>

      <div className="flex flex-col justify-center items-center w-screen bg-black py-20 -mb-20">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-4xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">The Challenge</span> Team</p>
        <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>Un desafío propuesto por <a href='https://educaixa.org/es/landing-thechallenge' className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">EduCaixa</a></p>
      </div>


      <div className="grid lg:grid-cols-6 lg:grid-rows-6  md:grid-cols-6 md:grid-rows-6  grid-cols-6 grid-rows-5 items-center justify-items-center h-auto w-screen lg:py-20 lg:mb-32 md:mt-16 md:py-16 pb-16 bg-black">

        <div className="flex flex-col lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:row-span-3           md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-2          col-start-1 row-start-2 col-span-6     justify-center items-center">
          <img className="object-cover rounded-full lg:w-60 lg:h-60      md:w-60 md:h-60      w-56 h-56  drop-shadow-2xl shadow-black" src="/miembros/David.jpg" alt="image description"></img>
          <h1 className="text-center text-pink-600 font-semibold lg:text-xl mt-5">1º de Bachillerato</h1>
          <p className='text-center text-white font-medium text-2xl'>David Morales Arellano</p>
        </div>

        <div className="flex flex-col lg:col-start-4 lg:row-start-1 lg:col-span-3 lg:row-span-3           md:col-start-4 md:row-start-3 md:col-span-3 md:row-span-2          col-start-1 row-start-3 col-span-6    justify-center items-center">
          <img className="object-cover rounded-full lg:w-60 lg:h-60      md:w-60 md:h-60      w-56 h-56  drop-shadow-2xl shadow-black" src="/miembros/javi.jpg" alt="image description"></img>
          <h1 className="text-center text-pink-600 font-semibold lg:text-xl mt-5">1º de Bachillerato</h1>
          <p className='text-center text-white font-medium text-2xl'>Javier Rodríguez López</p>
        </div>

        <div className="flex flex-col lg:col-start-1 lg:row-start-4 lg:col-span-3 lg:row-span-3           md:col-start-1 md:row-start-5 md:col-span-3 md:row-span-2          col-start-1 row-start-4 col-span-6 mt-16   justify-center items-center">
          <img className="object-cover rounded-full lg:w-60 lg:h-60      md:w-60 md:h-60      w-56 h-56  drop-shadow-2xl shadow-black" src="/miembros/caleb.jpg" alt="image description"></img>
          <h1 className="text-center text-pink-600 font-semibold lg:text-xl mt-5">1º de Bachillerato</h1>
          <p className='text-center text-white font-medium text-2xl'>Caleb Martín Cepero</p>
        </div>

        <div className="flex flex-col lg:col-start-4 lg:row-start-4 lg:col-span-3 lg:row-span-3           md:col-start-4 md:row-start-5 md:col-span-3 md:row-span-2          col-start-1 row-start-5 col-span-6 mt-16   justify-center items-center">
          <img className="object-cover rounded-full lg:w-60 lg:h-60      md:w-60 md:h-60      w-56 h-56  drop-shadow-2xl shadow-black" src="/miembros/Jose.jpg" alt="image description"></img>
          <h1 className="text-center text-pink-600 font-semibold lg:text-xl mt-5">1º de Bachillerato</h1>
          <p className='text-center text-white font-medium text-2xl'>Ruiou Wu</p>
        </div>

        <div className="flex flex-col lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-6           md:col-start-1 md:row-start-1 md:col-span-6 md:row-span-2          col-start-1 row-start-1 col-span-6 mt-16   justify-center items-center">
          <img className="object-cover rounded-full lg:w-72 lg:h-72      md:w-60 md:h-60      w-56 h-56  drop-shadow-2xl shadow-black" src="/miembros/irene.jpg" alt="image description"></img>
          <h1 className="text-center text-pink-600 font-semibold lg:text-xl mt-5">Mentora de CRIC</h1>
          <p className='text-center text-white font-medium text-2xl'>Irene Alcalde Pinteño</p>
        </div>
      </div>


      







        <footer className="shadow bg-black m-4 lg:mt-0 md:mt-20 mt-20 md:w-full">
          <div className="w-screen max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/favicon.ico" className="h-8" alt="CRIC Logo" />
                <span className="self-center pr-8 text-2xl font-semibold whitespace-nowrap text-white">CRIC</span>
              </a>
              <ul className="flex flex-wrap text-center justify-between items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                <li>
                  <a href="#equipo" className="hover:underline px-1 me-0 md:me-2">Nosotros</a>
                </li>
                <li>
                  <a href="\documentos\PoliticaPrivacidad_CRIC.pdf" target='_blank' className="hover:underline px-2 me-0 md:me-2">Política de privacidad</a>
                </li>
                <li>
                  <a href="#" className="hover:underline px-2 me-0 md:me-2">Licencia</a>
                </li>
                <li>
                  <a href="https://contacto-definitivo.vercel.app/" target='_blank' className="hover:underline pl-0 me-0 md:me-2">¿Nos ayudas a mejorar?</a>
                </li>
              </ul>
            </div>
            <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
            <div className="grid grid-rows-2 items-center justify-items-center">
              <div className="flex flex-col row-start-1">
                <span className="block text-sm text-center  sm:text-center text-gray-400">© 2024 <a href="#" className="hover:underline">Club Robótica e Informática Churriana™</a>. All Rights Reserved.</span>
                <span className="block text-sm text-center mt-3  sm:text-center text-gray-400"><span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Desarrollada con next js y react por el equipo de CRIC</span></span>
              </div>

              <div className="flex items-center justify-center row-start-2 mt-4 mb-8">
                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/ig.png" alt="IG" />
                </a>

                <a href="https://twitter.com/CRI_Churriana" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/x.png" alt="X" />
                </a>

                <a href="https://www.linkedin.com/in/club-rob%C3%B3tica-e-inform%C3%A1tica-churriana-b74344284/" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/linkedn.png" alt="linkdn" />
                </a>

                <a href="https://www.youtube.com/channel/UCB1uwS0CziFjOb7cIw6Q0Qg" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/youtube.png" alt="Youtube" />
                </a>

                <a href="https://twitter.com/CRI_Churriana" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/facebook.png" alt="Facebook" />
                </a>

                <a href="https://www.tiktok.com/@cri_churriana" target='_blank'>
                  <img className="w-8 h-8 mx-2" src="/rrss/tiktok.png" alt="TikTok" />
                </a>
              </div>
            </div>
          </div>
        </footer>


    </main>
  )
}
