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
        <title>Solución</title>
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


      <section id="enfoque"></section>
      <div className="flex flex-col justify-center items-center w-11/12 h-full rounded-2xl mt-20 mb-20 lg:px-16 md:px-16 px-10 py-10 bg-gradient-to-r from-black via-gray-900 to-black shadow-black shadow-xl">

        <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20">
          <p className="font-bold text-center lg:text-6xl md:text-8xl text-5xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Solución</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>Lo que <a href='https://educaixa.org/es/landing-thechallenge' className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">aportamos</a> a la sociedad</p>
        </div>

        <p className=' text-xl text-gray-100 font-medium text-center justify-center items-center self-center mt-10'>Nuestra iniciativa cuenta actualmente con 2 vertientes para atacar el <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">problema de la integración digital intergeneracional.</span></p>

        <p className='text-xl text-gray-100 font-medium text-justify lg:mt-10 md:mt-12 mt-10'>La primera son <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">talleres y charlas</span> semanales en los que se abordan temas de actualidad desde las aplicaciones de la inteligencia artificial en nuestro día a día pasando por la gestión de perfiles en redes sociales hasta llegar a los peligros que estas entrañan. Estos talleres no solamente se caracterizan por ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">didácticos desde la teoría</span>, sino <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">también desde la práctica</span>.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'>La segunda es <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">MetaLife</span>, una aplicación multipropósito en la que los usuarios, especialmente orientada para la tercera edad, podrán desarrollar todo tipo de actividades facilitándole esta su <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">vida cotidiana</span>. Se podrá desde pedir citas médicas hasta realizar transacciones bancarias, todo ello desde una <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">interfaz de usuario muy amigable</span> para que realmente sea la herramienta que usen en su día a día.</p>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'>Consideramos CRIC <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">un proyecto muy flexible y resiliente a los cambios</span>, estos nos permiten adecuarnos a los tiempos que corren y <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">ofrecer el mejor servicio posible</span>. Además, nuestra iniciativa puede enfocarse también desde un plan de negocios en el que, a cambio de nuestros servicios, obtengamos un rédito económico para seguir creciendo, llegar a más gente y mejorar nuestras líneas de acción actuales y futuras.</p>


        <div className="flex lg:flex-row flex-col lg:space-x-32 md:mt-16 mb-10 justify-center">

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/img40.jpg" alt="1"></img>
            <Link href="/webs/solucion/#taller2" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER III - Redes Sociales, gestión de perfiles y contraseñas.</Link>
          </div>

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/img41.JPG" alt="1"></img>
            <Link href="/webs/solucion/#taller3" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER V - Inteligencia Artificial, gestor de contraseñas inteligente e internet.</Link>
          </div>

        </div>

      </div>



      <figure class="max-w-screen-md mx-auto text-center bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 p-10 rounded-2xl w-11/12 shadow-black shadow-2xl">
        <svg class="w-10 h-10 mx-auto mb-3 text-black dark:text-indigo-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-black dark:text-black">Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img class="w-6 h-6 rounded-full" src="/franklin.jpg" alt="profile picture"></img>
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-black dark:text-black">Benjamin Franklin</cite>
            <cite class="ps-3 text-sm text-black dark:text-black">Político, Científico e Inventor Estadounidense.</cite>
          </div>
        </figcaption>
      </figure>


















      <section id="talleres"></section>
      <div className="grid row-span-1 col-span-1 items-center justify-items-center mt-20">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-6xl leading-snug text-white row-start-1 col-span-1     mt-10 mb-0">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Talleres</span></p>
      </div>



      <div className="grid lg:grid-rows-1 md:grid-rows-3 grid-cols-6 grid-rows-3 items-center justify-items-center h-full w-full">



        <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-3    col-start-1 row-start-1 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller11"></section>
          <img className="rounded-t-lg" src="/taller03.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">XI Charla Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">En esta sesión hemos tratado temas de almacenamiento en la nube, IA y mensajería engañosa además de la realidad virtual. Ha sido mañana variada donde hemos podidio experimentar con varias tecnologías.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>7/08/24</p>
                <p className='font-bold'>10:00 - 11:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>



        <div className="lg:col-start-3 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-3    col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="talle10"></section>
          <img className="rounded-t-lg" src="/taller02_2.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">X Charla Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">En esta sesión hemos asisitido a la residencia de mayores de nuestra localidad para dar talleres de realidad virtual en los que transportabamos a nuestros mayores a aquellos lugares que quisieran.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>31/07/24</p>
                <p className='font-bold'>10:00 - 12:00</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>




        <div className="lg:col-start-5 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-3    col-start-1 row-start-3 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller9"></section>
          <img className="rounded-t-lg" src="/taller01.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">IX Charla Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Tras el viaje formativo de los integrantes de CRIC a Nueva York & Boston hemos empezado a dar talleres de realidad virtual.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>30/07/24</p>
                <p className='font-bold'>10:00 - 12:00</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>



      <div className="grid lg:grid-rows-3 md:grid-rows-3 grid-cols-6 grid-rows-9 items-center justify-items-center h-full w-full">



        <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-3    col-start-1 row-start-1 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller8"></section>
          <img className="rounded-t-lg" src="/Img01.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">VIII Charla Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">En esta sesión trataremos el controversial tema de las fake news a través de redes sociales, internet y periódicos digitales. Además, advertiremos del peligro potencial que entraña la IA en esto.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>8/02/24</p>
                <p className='font-bold'>18:00 - 19:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-3 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-4 md:row-start-1 md:col-span-3    col-start-1 row-start-2 col-span-6   h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20     border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller7"></section>
          <img className="rounded-t-lg object-center" src="/Imagen10.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">VII Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">En esta sesión trabajaremos con los asistentes virtuales de Microsoft, Apple y Google aprendiendo a aplicarlos en nuestro día a día de forma útil. Además introduciremos el concepto de domotización a los estudiantes.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg dark:hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>1/02/24</p>
                <p className='font-bold'>16:30 - 17:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-5 lg:row-start-1 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-3   col-start-1 row-start-3 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20     border  rounded-lg bg-gray-800 border-gray-700">

          <section id="tallerniños1"></section>
          <img className="rounded-t-lg" src="/planeta.JPG" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">I Taller de Scratch a niños</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">En esta sesión nos moveremos a Planeta Ciencia para hacer un taller orientados a niños y padres en los que fomentaremos la colaboración entre ellos mientras aprenden a programar en su primer lenguaje de programación, Scratch.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>12/01/24</p>
                <p className='font-bold'>17:00 - 19:00</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-1 lg:row-start-2 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-4 md:row-start-2 md:col-span-3   col-start-1 row-start-4 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller6"></section>
          <img className="rounded-t-lg" src="/img82.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">VI Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Es esta sesión trabajaremos lo aprendido en el Taller V de forma más directa. Usaremos Chat GPT 3 y Microsoft AI. Además introduciremos funcionalidades como la búsqueda por voz, foto y vídeo que integran los buscadores actuales.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg dark:hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>1/12/23</p>
                <p className='font-bold'>18:00 - 19:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-3 lg:row-start-2 lg:col-span-2   shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-3 md:col-span-3   col-start-1 row-start-5 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20     border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller5"></section>
          <img className="rounded-t-lg" src="/Img45.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">V Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Durante esta sesión introduciremos la inteligencia artifical, sus aplicaciones prácticas, peligros y tipos. Además desmitificaremos todas las falsedades que hay a su alrededor y la convertiremos en una herramienta más.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg dark:hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>15/11/23</p>
                <p className='font-bold'>18:00 - 19:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-5 lg:row-start-2 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-4 md:row-start-3 md:col-span-3   col-start-1 row-start-6 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-auto lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller4"></section>
          <img className="rounded-t-lg" src="/Img11.JPG" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">IV Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Durante esta sesión aprenderemos a editar fotografías de forma completa con SnapSeed de Google y cómo enviar, eliminar y descargar diferentes tipos de archivos en nuestro teléfono como por ejemplo PDF, jpg ,docx, pptx...</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>1/11/23</p>
                <p className='font-bold'>18:00 - 19:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-1 lg:row-start-3 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-4 md:col-span-3   col-start-1 row-start-7 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-auto lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller3"></section>
          <img className="rounded-t-lg" src="/Img80.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">III Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Durante esta sesión aprenderemos a crear, suspender y eleminar perfiles en redes sociales además de gestionar las contraseñas de nuestro dispositivo. También abordaremos el tema de la privacidad de datos.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>25/10/23</p>
                <p className='font-bold'>18:00 - 19:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-3 lg:row-start-3 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-4 md:row-start-4 md:col-span-3   col-start-1 row-start-8 col-span-6    h-min w-9/12 md:h-min md:w-9/12 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20     border rounded-lg bg-gray-800 border-gray-700">

          <section id="taller2"></section>
          <img className="rounded-t-lg" src="/Img37.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">II Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal text-gray-400 text-justify mt-5">Durante esta sesión haremos una reflexión concienciativa sobre los peligros de los mensajes maliciosos, generalmente relacionados con los datos bancarios personales, y el posible <span className='iatlic'>spam</span> que nos puede llegar por correo.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none  bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>15/09/23</p>
                <p className='font-bold'>11:00 - 12:30</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-start-5 lg:row-start-3 lg:col-span-2  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-5 md:col-span-6   col-start-1 row-start-9 col-span-6    h-min w-9/12 md:h-min md:w-2/5 lg:h-min lg:w-8/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <section id="taller1"></section>
          <img className="rounded-t-lg" src="/Img31.jpg" alt="Img1" />

          <div className="p-5">

            <p className="mb-2 text-2xl font-bold tracking-tight text-white">I Taller Nuevas Tecnologías a Mayores</p>

            <p className="mb-3 font-normal 3 text-gray-400 text-justify mt-5">Durante esta sesión introduciremos la gestión de notificaciones, los diferentes modos del teléfono o dispositivo y aprenderemos a usar la cámara del teléfono como unos profesionales y poder obtener mejores fotos.</p>

            <div className="flex justify-center items-center space-x-4 mt-5">
              <a className="flex lg:justify-between lg:items-center flex-col lg:flex-col lg:w-3/5 py-4 w-56 font-medium text-center text-white text-md  rounded-lg hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>1/08/23</p>
                <p className='font-bold'>11:00 - 1:00</p>
              </a>
              <div className="flex flex-row justify-center items-center">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-16 w-16" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-10 w-10" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>





















      <section id="charlas"></section>
      <div className="grid row-span-1 col-span-1 items-center justify-items-center mt-44">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-6xl leading-snug text-white row-start-1 col-span-1     mt-10 mb-0">Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Charlas</span></p>
      </div>

      <section id="agredace"></section>
      <div className="grid lg:grid-rows-3 md:grid-rows-3 grid-cols-6 grid-rows-3 items-center justify-items-center h-full w-full">

        <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-1 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-6   col-start-1 row-start-1 col-span-6    h-min w-9/12 md:h-min md:w-10/12 lg:h-min lg:w-10/12 lg:mt-32 md:mt-32 mt-20     border  rounded-lg bg-gray-800 border-gray-700">

          <img className="object-cover rounded-t-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/Img85.jpg" alt=""></img>
          <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
            <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">Visita a las Instalaciones de Rehabilitación Neurológica de Agredace en Granada</h5>
            <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">En esta visita pudimos asistir a las intalaciones de Agredace, una asociación de Granada que se encarga de rehabilitar neurológicamente a las personas que han sufrido algún tipo de lesión cerebral. Nos reunimos con sus profesionales los cuales nos comentaron qué hacían para tratar a las personales y potenciar sus habilidades al máximo. Destacamos sus talleres de estimulación cognitiva con realidad virtual.</p>

            <div className="flex flex-row space-x-5">
              <a className="flex lg:space-x-5 lg:justify-center lg:items-center flex-col lg:flex-row lg:w-10/12 py-4 w-56 mt-8 font-medium text-center text-white text-m rounded-2xl dark:hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>5/01/24</p>
                <p className='font-bold'>11:00 - 1:30</p>
              </a>
              <div className="flex flex-row justify-center items-center mt-8">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-24 w-24" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/p/C1xGvX2okrU/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==" target='_blank'>
                  <img className="object-scale-down h-14 w-14" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-10/12 lg:h-min lg:w-10/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <img className="object-cover rounded-t-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/Img15.jpg" alt=""></img>
          <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
            <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">Conferencia sobre los Peligros y Adicciones de las Nuevas Tecnologías con Pedro Aguado</h5>
            <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">En esta conferencia pudimos difundir nuestro mensaje, hablar sobre CRIC y los servicios que ofrecemos. Además hablamos sobre los peligros que entrañan las nuevas tecnologías y las aciciones a las mismas, entre las que destacamos los tipos. Pudimos hacer ponencia junto a Pedro Aguado.</p>

            <div className="flex flex-row space-x-5">
              <a className="flex lg:space-x-5 lg:justify-center lg:items-center flex-col lg:flex-row lg:w-10/12 py-4 w-56 mt-8 font-medium text-center text-white text-m rounded-2xl dark:hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>27/11/23</p>
                <p className='font-bold'>18:00 - 20:00</p>
              </a>
              <div className="flex flex-row justify-center items-center mt-8">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-24 w-24" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/p/C0KORD0NvGr/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==" target='_blank'>
                  <img className="object-scale-down h-14 w-14" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-3 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-3 md:col-span-6   col-start-1 row-start-3 col-span-6    h-min w-9/12 md:h-min md:w-10/12 lg:h-min lg:w-10/12 lg:mt-32 md:mt-32 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

          <img className="object-cover rounded-t-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/niños02.JPG" alt=""></img>
          <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
            <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">Confererencias sobre iniciación a la programación en el IES Federico García Lorca</h5>
            <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">En estas conferencias hablaremos a los estudiantes de la ESO de nuestro centro la inictiva que hemos tomado y nuestra participación en The Challenge, un proyecto de EduCaixa. Además aprenderemos juntos para qué sirve la programación, sus aplicaciones en la vida real, los lenguajes que existen y cómo inicarse en ello. </p>

            <div className="flex flex-row space-x-5">
              <a className="flex lg:space-x-5 lg:justify-center lg:items-center flex-col lg:flex-row lg:w-10/12 py-4 w-56 mt-8 font-medium text-center text-white text-m rounded-2xl hover:bg-gradient-to-r from-indigo-600to-pink-700 focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-600 to-indigo-700  focus:ring-blue-800">
                <p className='font-bold'>24 y 25 de octubre de 2023</p>
                <p className='font-bold'>8:30 - 10:30</p>
              </a>
              <div className="flex flex-row justify-center items-center mt-8">
                <a href="https://twitter.com/CRI_Churriana" target='_blank'>

                  <img className="object-scale-down h-24 w-24" src="/rrss/x.png" alt="X"></img>

                </a>

                <a href="https://www.instagram.com/clubroboticachurriana/" target='_blank'>
                  <img className="object-scale-down h-14 w-14" src="/rrss/ig.png" alt="IG"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>










      <section id="metalife"></section>
      <div className="grid row-span-1 col-span-1 mt-40">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-6xl leading-snug text-white row-start-1 col-span-1     mt-10 mb-0">¿Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">MetaLife</span> ?</p>
      </div>





      <div className="grid grid-cols-7 grid-rows-8  items-center justify-items-center mt-20     lg:h-screen md:h-full h-full w-screen bg-gray-100">

        <h1 className='lg:row-start-1 lg:col-start-4 lg:row-span-5 lg:col-span-4   lg:font-bold lg:text-7xl lg:pr-32 lg:mt-5 lg:text-center       md:row-start-1 md:col-start-1 md:col-span-6 md:row-span-2 md:font-bold md:text-6xl md:text-center       row-start-1 col-start-1 col-span-6 row-span-2 font-bold text-5xl text-center'><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">Sencilla, Útil y Multipropósito</span></h1>
        <p className='lg:row-start-5 lg:col-start-4 lg:row-span-3 lg:col-span-4 lg:mt-32  lg:text-left  lg:font-medium lg:text-2xl lg:pr-32 lg:mb-50 text-black      md:row-start-5 md:col-start-1 md:col-span-6 md:row-span-2 md:font-medium md:text-2xl md:px-28 md:mt-10 md:mb-50 md:pb-20      row-start-4 col-start-1 col-span-6 row-span-3 font-medium text-lg px-10'>MetaLife es la <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">navaja suiza digital</span> que toda persona desea tener instalada en su dispositivo móvil. Esta ayuda en tareas tanto mundanas como complejas de su día a día. Se caracteriza por tener una <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">UI accesible para todos</span>, estar bien optimizada y contar con funcionalidades de <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">Eye Tracking</span> para aquellas personas que lo requieran.</p>
        <img className="lg:row-start-1 lg:col-start-1 lg:row-span-7 lg:col-span-3    lg:w-4/6 shadow-gray shadow-xl lg:h-auto items-center justify-items-center rounded-xl       md:row-start-2 md:col-start-1 md:col-span-6 md:row-span-3 md:w-3/6 shadow-gray md:h-auto     row-start-2 col-start-1 col-span-6 row-span-2 w-3/6 mt-28" src="/metalife.png" alt="ODS"></img>

      </div>




      <div class="w-11/12 py-20 text-center  border  rounded-lg shadow sm:p-8 bg-black border-black mt-20 mb-20 p-5">
        <h5 class="mb-2 text-3xl font-bold text-white">Fase Beta de MetaLife</h5>
        <p class="mb-5 text-base  sm:text-lg text-gray-400 mt-10">Actualmente estamos desarrollando las principales funcionalidades de la aplicación multipropósito MetaLife. Para más información, póngase en contacto con los desarrolladores.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-10">
          <Link href="/webs/desarrollo" class="w-full sm:w-auto  focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700">
            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left rtl:text-right">
              <div class="mb-1 text-xs">Descárgala ya en</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
          </Link>
          <Link href="/metalife" target="_blank" class="w-full sm:w-auto  focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700">
            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left rtl:text-right">
              <div class="mb-1 text-xs">Descárgala ya en</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </Link>
        </div>
      </div>







      <div className="bg-gradient-to-r from-black via-gray-800 to-black lg:mb-32 md:mb-10 w-11/12 justify-center rounded-2xl">

        <div className="grid row-span-1 col-span-1 mt-20 mb-10 ">
          <p className="font-bold text-center lg:text-6xl md:text-6xl text-6xl leading-snug text-white row-start-1 col-span-1     mt-10 mb-0">Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">App</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>Desde <span className="px-2 text-yellow-500 rounded-2xl bg-emerald-600">dentro</span></p>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col p-20 lg:space-x-52 md:space-x-20 justify-center w-full">

          <img className="object-cover rounded-xl lg:w-1/5 lg:h-auto md:w-2/5 md:h-full" src="/1.png" alt=""></img>
          <img className="object-cover rounded-xl lg:w-1/5 lg:h-auto md:w-2/5 md:h-full w-full lg:mt-0 md:mt-0 mt-12" src="/2.png" alt=""></img>
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