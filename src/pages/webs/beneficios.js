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
      className={`flex min-h-screen flex-col items-center justify-between fondo  ${inter.className}`}
    >
      <Head>
        <title>Beneficios</title>
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


      <div className="flex flex-col justify-center items-center w-11/12 h-full rounded-2xl mt-20 mb-10 lg:px-16 md:px-16 px-10 py-10 bg-gradient-to-r from-black via-gray-900 to-black">

        <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20">
          <p className="font-bold text-center lg:text-6xl md:text-8xl text-5xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Beneficios</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>¿En qué <span className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">mejoramos</span> el mundo?</p>
        </div>

        <p className=' lg:text-3xl text-xl text-gray-100 font-bold lg:text-justify text-center self-center mt-12'>CRIC aporta principalmente <span className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">3 beneficios</span>, estos están interconectados entre sí</p>

        <p className='text-xl text-gray-100 font-medium text-justify mt-16'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- CONOCIMIENTO DE LAS TIC:</span> Afecta directamente a la educación que han recibido las personas respecto a las TIC. Esto facilita el uso de herramientas digitales, véase las redes sociales, hojas de cálculo, correo electrónico… Y también permite desmitificar algunas tecnologías recientes como la inteligencia artificial y realidad virtual a través de un uso práctico.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- CALIDAD DE VIDA:</span> Creemos que una persona dotada de estas herramientas podrá enfrentar su día a día en el siglo XXI con solvencia y eficacia. Esto le permitirá hacer de la tecnología su mayor aliado y le ayudará en tareas que abarcan desde la monitorización de la salud personal hasta la gestión de su cuenta bancaria, temas vitales para nuestra cotidianidad.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- BRECHA DIGITAL:</span> Al formar a las personas en estos temas se les está ayudando a escapar de la desinformación digital y a evitar caer en la ignorancia respecto a las nuevas tecnologías. No hay nada que dé más miedo que lo desconocido; CRIC evita caer en la indiferencia tecnológica adoptando una postura crítica y autosuficiente.</p>





        <p className=' lg:text-3xl text-xl text-gray-100 font-bold lg:text-justify text-center self-center mt-32'>Nuestros servicios se diferencian en <span className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">3 aspectos</span> respecto a los del resto</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-16'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- CALIDAD DEL CONTENIDO:</span> Creemos que la calidad reside en la variedad de los temas y en una puesta en escena consistente de los mismos. Tanto nuestros talleres como MetaLife ofrecen soluciones verdaderas a problemas reales que realmente sean plausibles de acometer en el día a día.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- ADECUACIÓN DEL CONTENIDO:</span> El tiempo corre sino vuela, vivimos en un mundo de constante cambio y muchas veces es difícil seguirle el ritmo. Ofrecemos un repertorio de servicios que están constantemente siendo supervisados para no quedar atrás en el tiempo y adaptarse a las necesidades del presente y el futuro, teniendo siempre en cuenta el pasado.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">- CONEXIÓN INTERGENERACIONAL:</span> Estamos acostumbrados a relacionarnos con personas de nuestra misma edad en círculos cerrados, ¡Rompamos con este estigma social! Conectar con personas de diferentes edades, siempre bajo espacios seguros y consentidos para tal fin, puede ser una experiencia muy enriquecedora en la que podamos compartir y aprender mucho del resto. Al fin y al cabo, todos somos personas y tenemos algo que mostrar al mundo.</p>

        <div className="flex lg:flex-row flex-col lg:space-x-32 md:mt-16 mb-10 justify-center">

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/index2.jpg" alt="1"></img>
            <Link href="/webs/solucion/#taller2" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER II - Peligros de internet, correos maliciosos y spam.</Link>
          </div>

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/planeta3.png" alt="1"></img>
            <Link href="/webs/solucion/#tallerniños1" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER I - Introducción a la programación.</Link>
          </div>

        </div>

      </div>


      <div className="grid row-span-1 col-span-1 items-center justify-items-center mt-44">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-5xl leading-snug text-white row-start-1 col-span-1     mt-10 mb-0"><mark className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg">Valoraciones</mark></p>
      </div>


      <div className="flex justify-center items-center w-screen h-auto mt-32">

        <blockquote className="text-2xl italic font-semibold  text-white lg:mx-20 md:mx-20 mx-10">
          <svg className="w-8 h-8  text-indigo-700 mb-4 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className='flex lg:text-5xl md:text-3xl text-center italic'>Confíamos en que no se puede llegar a la gente y producir un cambio en ella sin ofrecer un servicio de calidad.</p>
        </blockquote>

      </div>








      <div className="grid grid-cols-6 lg:grid-rows-1 md:grid-rows-2 grid-rows-2 mt-32 lg:px-12 justify-items-center items-center w-screen bg-black">


        <article className='bg-black p-10 lg:col-start-1 lg:row-start-1 lg:col-span-3 md:col-start-1 md:row-start-1 md:col-span-6 col-start-1 row-start-1 col-span-6'>
          <div className="flex items-center mb-4 ">
            <img className="w-10 h-10 me-4 rounded-full object-cover" src="/auramarina.png" alt=""></img>
            <div className="font-medium dark:text-white">
              <p>Auramarina<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Estudiante veterana de CRIC</time></p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Han tenido una gran evolución y una gran acogida en la comunidad.</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Granada, España <time dateTime="2017-03-03 19:00">el 25 de Octubre, 2023</time></p></footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">Me parece muy buenos estos talleres ya que es precisamente la juventud la que nos debe trasladar los conocimientos de su época, nosotros estamos receptivos a estas nuevas herramientas ya que somos conscientes del gran impacto positivo que pueden llegar a tener en nuestro día a día. Me recomendaron sus talleres unas amigas y desde entonces no me pierdo ninguno.</p>
          <aside>

            <div className="flex items-center space-x-3 mt-3">

              <Link href="/webs/solucion/#taller3" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 text-center focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Taller III</Link>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">Redes sociales, Gestión de perfiles y Contraseñas</p>
            </div>
          </aside>
        </article>


        <article className='bg-black p-10 lg:col-start-4 lg:row-start-1 lg:col-span-3 md:col-start-1 md:row-start-2 md:col-span-6 col-start-1 row-start-2 col-span-6'>
          <div className="flex items-center mb-4 ">
            <img className="w-10 h-10 me-4 rounded-full object-cover" src="/carmen.png" alt=""></img>
            <div className="font-medium dark:text-white">
              <p>Cármen<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Nueva estudiante de CRIC</time></p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Volvería a repetir, se adaptan a mis necesidades.</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Granada, España <time dateTime="2017-03-03 19:00">el 1 de Diciembre, 2023</time></p></footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">Esta ha sido la primera vez que asisto a un taller de CRIC, y sé que no será la última. Tratan unos temas de actualidad muy interesantes. Lo que más me ha gustado es el tacto tan cercano pero a la vez flexible que tienen los monitores. Si tuviera que decir algo para mejorar, explicar un poquito más temas como la inteligencia artificial, hay algunos que somos principiantes.</p>
          <aside>
            <div className="flex items-center space-x-3 mt-3">
              <Link href="/webs/solucion/#taller5" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 text-center focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Taller V</Link>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">Inteligencia Artifical, Gestor de contraseñas inteligente e Internet</p>
            </div>
          </aside>
        </article>
      </div>


      <div className="flex flex-col bg-black w-screen lg:p-32 md:px-10 md:pt-0 md:pb-10 p-10">

        <div className="flex col-start-1 col-span-3 row-start-1 items-center mb-5">
          <p className="bg-indigo-600 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-pink-600 dark:text-white">9.8</p>
          <p className="ms-2 font-medium text-gray-900 dark:text-white">Magnífico</p>
          <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">72 Estudiantes han tomado nuestra encuesta de calidad.</p>
        </div>

        <div className="gap-8 sm:grid sm:grid-cols-2">
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Personal</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">10</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Comodidad</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-11/12"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.1</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Recursos & conectividad</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-11/12"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.2</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Instalaciones</dt>
              <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-10/12"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Inclusión</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.7</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Asistencia de los monitores</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">10</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Temas tratados</dt>
              <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div className="bg-blue-600 h-2.5 rounded dark:bg-indigo-600 w-11/12"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.6</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>


      


    
    <div className="grid grid-cols-6 lg:grid-rows-1 md:grid-rows-2 grid-rows-2 lg:px-12 md:-mt-0 -mt-0 justify-items-center items-center w-screen bg-black">

      <article className='bg-black p-10 lg:col-start-1 lg:row-start-1 lg:col-span-3 md:col-start-1 md:row-start-1 md:col-span-6 col-start-1 row-start-1 col-span-6'>
          <div className="flex items-center mb-4 ">
            <img className="w-10 h-10 me-4 rounded-full object-cover" src="/miembros/Luis.png" alt=""></img>
            <div className="font-medium dark:text-white">
              <p>Antonio Luis Rodríguez García<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Concejal de Servicios Sociales, Familias, Igualdad, Participación Ciudadana y Seguridad Ciudadana</time></p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Nos orgullece tener chicos como estos en la localidad.</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Granada, España <time dateTime="2017-03-03 19:00">el 20 de Enero, 2024</time></p></footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">Quiero felicitar al Club de Robótica e Informática de Churriana por la gran labor social que está realizando a través de los diferentes talleres dirigidos a mayores, en los que acerca las nuevas tecnologías a los participantes con un lenguaje sencillo y un enfoque muy práctico. 
          El CRIC está presente en todos los eventos relacionados con la educación, juventud y la ciencia, y quiere seguir creciendo y aportando valor. Es un orgullo contar con una organización que apuesta de manera tan decidida por Churriana de la Vega y su gente. Enhorabuena. </p>
          <aside>
            <div className="flex items-center space-x-3 mt-3">
              <Link href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Reunión</Link>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">Sobre desarrollo de iniciativas y Promoción de las mismas</p>
            </div>
          </aside>
        </article>

        <article className='bg-black p-10 lg:col-start-4 lg:row-start-1 lg:col-span-3 md:col-start-1 md:row-start-2 md:col-span-6 col-start-1 row-start-2 col-span-6'>
          <div className="flex items-center mb-4 ">
            <img className="w-10 h-10 me-4 rounded-full object-cover" src="/miembros/narvaez.jpg" alt=""></img>
            <div className="font-medium dark:text-white">
              <p>Antonio Narváez Morente<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Alcalde de Churriana de la Vega</time></p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Son el músculo del desarrollo tecnológico en nuestro pueblo.</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Granada, España <time dateTime="2017-03-03 19:00">el 20 de Enero, 2024</time></p></footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">Los miembros del Club de Robótica e Informática de Churriana son la mejor muestra de la fuerza y el talento de la juventud de nuestro pueblo. Este proyecto apuesta por el conocimiento y la divulgación, siempre abierto a la colaboración con el Ayuntamiento, asociaciones, centros educativos y colectivos del municipio. Desde que comenzó sus actividades, esta iniciativa emprendedora se ha abierto camino con la ilusión y el compromiso de este grupo de estudiantes del IES Federico García Lorca. Les animo a seguir trabajando, el Ayuntamiento estará a su lado para desarrollar las numerosas ideas y proyectos que ya están desarrollando. </p>
          <aside>
            <div className="flex items-center space-x-3 mt-3">
              <Link href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Reunión</Link>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">Sobre desarrollo de iniciativas y Promoción de las mismas</p>
            </div>
          </aside>
        </article>
      
      </div>



      <div className="grid grid-cols-5 grid-rows-5 justify-items-center items-center w-screen h-screen lg:mt-32">

        <h1 className="col-start-1 row-start-1 col-span-5 row-span-2 font-bold lg:text-6xl md:text-5xl text-3xl text-white mb-44"><mark className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-700 rounded-lg">Ellos</mark> te lo cuentan...</h1>

        <iframe
          className="col-start-1 row-start-2 col-span-5 row-span-4 lg:w-8/12 lg:h-5/6 md:w-11/12 md:h-5/6 w-11/12 h-5/6"
          src="https://www.youtube.com/embed/hH7T8qzyHYw?si=AtZY-mch8JBzMK7K"
          title="CRIC_VideoPlayer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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



