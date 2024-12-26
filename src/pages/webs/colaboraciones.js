"use client"

import { useState } from 'react';
import Head from 'next/head';
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




        <section className="w-full min-h-screen flex items-center justify-center text-center">
          <div className='flex flex-col justify-center items-center'>
            <h1 className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-neutral-700 via-violet-400 to-purple-400 text-transparent bg-clip-text tracking-tight text-5xl sm:text-6xl col-start-1 col-span-3 row-start-2">
              Colaboradores
            </h1>
            <h2 className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-neutral-500 via-violet-300 to-purple-300 text-transparent bg-clip-text tracking-tight sm:text-2xl text-xl p-4 italic mb-3'>
              &quot;Nadie puede hacerlo todo, pero todos podemos hacer algo.&quot;
            </h2>
            <div className="flex gap-5 justify-center mt-5 lg:w-full">
              <div className='flex justify-center px-6 pt-0'>
                <a href="#colaboradores" className='bg-purple-700/20 backdrop-blur-xl text-white font-bold px-6 py-4 rounded-full flex gap-3'>
                  ¿Cuáles son, qué hacen y que han aportado?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </a>
              </div>
              
            </div>

            <div className="flex gap-5 justify-center mt-7 lg:w-full">
              <div className='flex justify-center px-6 pt-0'>
                <a href="https://contacto-definitivo.vercel.app/" className='bg-purple-700/20 backdrop-blur-xl text-white font-bold px-6 py-4 rounded-full flex gap-3'>
                  ¿Quieres colaborar con nosotros?
                </a>
              </div>
              
            </div>

          </div>
        </section>
        <section className='w-full min-h-screen flex items-center justify-center' id='colaboradores'>
          <div className='w-4/6 sm:flex gap-5 items-center block'>
            <img src="/iesfgl.png" alt="iesfgl" className='sm:w-1/6 w-full sm:mb-0 mb-8' />
            <p className='text-white text-lg text-justify'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold text-2xl'>IES Federico García Lorca: </span>Nuestro centro es un centro de Enseñanza Secundaria Obligatoria, bachillerato y Formación profesional y ha sido el principal apoyo para nuestro proyecto, y nos ha ayudado en la parte de la difusión, subiendo nuestro movimiento a sus respectivas redes sociales a través del departamento de TIC.</p>
          </div>
        </section>
        <section className='w-full min-h-screen flex items-center justify-center' id='colaboradores'>
          <div className='w-4/6 sm:flex gap-5 items-center block'>
            <img src="/logoayto.png" alt="logoayto" className='sm:w-1/6 w-full sm:mb-0 mb-8' />

            <p className='text-white text-lg text-justify'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold text-2xl'>Ayuntamiento de Churriana de la Vega: </span>Nuestro ayuntamiento nos ha proporcionado el <span className='italic'>merchandising </span>proporcionandonos así las camisetas con nuestros logos, el de CRIC y el de el ayuntamiento.</p>
          </div>
        </section>
        
        <section className='w-full min-h-screen flex items-center justify-center' id='colaboradores'>
          <div className='w-4/6 sm:flex block gap-5 items-center'>
            <img src="/planetaciencia.png" alt="planetaciencia" className='sm:w-1/6 w-full sm:mb-0 mb-8' />
            <p className='text-white text-lg text-justify'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold text-2xl'>Planeta Ciencia: </span>Planeta Ciencia es una academia la cual da clases extraescolares a estudiantes de todas las edades, así como talleres para los mismos. Esta entidad nos a ayudado a la difusión de nuestro proyecto así como habernos permitido ver sus instalaciones y dar charlas sobre programación de videojuegos a sus alumnos.</p>
          </div>
        </section>
        <section className='w-full min-h-screen flex items-center justify-center' id='colaboradores'>
          <div className='w-4/6 sm:flex block gap-5 items-center'>
            <img src="/junta.png" alt="junta" className='sm:w-1/6 w-full sm:mb-0 mb-8' />
            <p className='text-white text-lg text-justify'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold text-2xl'>Junta de Andalucía: </span>Nos proporciona las instalaciones para impartir talleres a nuestros mayores, ya que sin la Junta no tendríamos lugar, y recientemente, nos proporcionaron algunos ordenadores para nuestras clases de ofimática, las cuales introduciremos lo antes posible a nuestros talleres.</p>
          </div>
        </section>
        <section className='w-full min-h-screen flex items-center justify-center'>
          <div className='w-4/6 sm:flex block sm:gap-5 items-center'>
            <img src="/agredace.png" alt="agredace" className='sm:w-2/6 w-full sm:mb-0 mb-8' />

            <p className='text-white text-lg text-justify'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700 font-bold text-2xl'>Agredace: </span>Agredace es una asociación la cual trabaja arduamente para rehabilitar a personas de todas las edades, las cuales tienen un daño cerebral, consiguiendo así la máxima autonomía posible de sus pacientes para que puedan llevar una vida normal. Esta asociación nos ha permitido hablar con los neuropsicólogos sobre la función del cerebro humano y como reacciona a estímulos, bastante útil para los talleres de estimulación cognitiva con realidad virtual que haremos en este año 2024.</p>
          </div>
        </section>







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

{/*
<img src="logoayto.png" alt="logoayto" className='col-start-2 row-start-3 row-span-2 col-span-2 w-1/2' />
        <p className='text-white text-lg col-start-3 row-start-3 col-span-3 row-span-3 p-24 text-justify'>El ayuntamiento de nuestra localidad Churriana de la Vega nos ha ayudado en nuestro trascurso, y sin duda, lo seguirá haciendo, especialmente agradecerles las camisetas para nuestro proyecto.</p>
        
<div className='flex justify-center'>
              <a href="#personitas (cambiar)" className='bg-purple-700/20 backdrop-blur-xl text-white font-bold px-6 py-4 rounded-full flex gap-3'>
                Ver personitas
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
*/}

