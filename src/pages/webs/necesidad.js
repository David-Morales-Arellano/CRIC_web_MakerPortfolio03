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
        <title>Necesidad</title>
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



      <section id="razones"></section>
      <div className="flex flex-col justify-center items-center w-11/12 h-full rounded-2xl mt-20 mb-20 lg:px-16 md:px-16 px-10 py-10 bg-gradient-to-r from-black via-gray-900 to-black">

        <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20">
          <p className="font-bold text-center lg:text-6xl md:text-8xl text-5xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Necesidad</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>La <a href='https://educaixa.org/es/landing-thechallenge' className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">razón</a> detrás de CRIC</p>
        </div>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'>CRIC aborda el problema que existe en la actualidad respecto al conocimiento de las TIC que tienen las personas de nuestra sociedad, especialmente las pertenecientes al grupo de la tercera edad. Confiamos en que proporcionando las <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">herramientas digitales</span> pertinentes podemos alcanzar <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">una mayor calidad de vida</span> y reducir drásticamente las <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">desigualdades</span> entre las personas.</p>

        <div className="flex lg:flex-row md:flex-col flex-col lg:space-x-20 justify-center items-center">
          <p className='text-xl text-gray-100 font-medium text-justify lg:mt-10 md:mt-12 mt-10'>Nuestro público objetivo, ya sea de forma directa o indirecta, es <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">la sociedad</span> persé. Aún habiéndonos centrado en los adultos mayores, sabemos que la asistencia de estos repercutirá de forma indirecta en el resto de personas. Si todos somos conocedores de las nuevas tecnologías en una sociedad digitalizada, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">potenciamos la cohesión</span> pero, también, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">la independencia personal</span> de los individuos que la componen.</p>
        </div>

        <p className=' text-xl text-gray-100 font-medium text-justify self-start mt-10'>Además, promover las TIC entre los mayores genera un portal de <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">cooperación intergeneracional</span> en el que todos se sienten parte de algo luchando por <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">un objetivo común</span>. De esta forma, también se solucionarían otros problemas como la soledad.</p>

        <div className="flex lg:flex-row flex-col lg:space-x-32 md:mt-16 mb-10 justify-center">

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/img04.jpg" alt="1"></img>
            <Link href="/webs/solucion/#taller2" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER II - Peligros de internet, correos maliciosos y spam.</Link>
          </div>

          <div className="flex flex-col">
            <img className="object-scale-down w-auto h-96 rounded-md lg:mt-20 md:mt-10 -mt-10" src="/img44.JPG" alt="1"></img>
            <Link href="/webs/solucion/#taller3" className="flex justify-center text-center lg:mt-4 md:mt-4 -mt-16 text-gray-400 hover:text-gray-500 font-light italic">TALLER III - Redes Sociales, gestión de perfiles y contraseñas.</Link>
          </div>

        </div>

      </div>


      <section id="investigacion"></section>
      <div className="flex flex-col rounded-xl justify-center items-center w-11/12 h-full lg:mt-20 md:mt-20 mt-0 mb-20 lg:px-16 md:px-16 px-10 py-10 bg-gradient-to-r from-black via-gray-900 to-black">


        <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20">
          <p className="font-bold text-center lg:text-6xl md:text-6xl text-5xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Investigación</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>Los <a href='https://educaixa.org/es/landing-thechallenge' className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">cimientos</a> de nuestra iniciativa</p>
        </div>


        <p className='text-xl text-gray-100 font-medium lg:text-center text-justify self-start my-10 lg:mx-20 md:mx-5'>En los siguiéntes gráficos se mostrarán datos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Instituto Nacional de Estadística</span>, el <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Ministerio de Derechos Sociales</span> y la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Unión Democrática de Pensionistas y Jubilados</span>. Cabe resaltar que estos datos no están actualizados a 2022 y 2023, no obstante nos sirven para conocer la tendencia y la evolución de las causas expuestas.</p>


        <div className="flex flex-col lg:mt-10 md:mt-10 mt-10">
          <img className="object-scale-down w-auto h-auto justify-center items-center rounded-xl" src="/graficos/image01.png" alt="1"></img>
          <p className="flex lg:text-center md:text-center text-center md:mt-8 md:mb-10 mt-5 text-gray-400 hover:text-gray-400 font-light italic">Se representa las personas que asisten a las personas de la tercera edad con las nuevas tecnologías en su día a día.</p>
        </div>

        <div className="flex flex-col lg:mt-10 md:mt-10 mt-16">
          <img className="object-scale-down w-auto h-auto justify-center items-center rounded-xl" src="/graficos/image03.png" alt="1"></img>
          <p className="flex lg:text-center md:text-center text-center lg:-mt-4 md:mt-8 md:mb-10 mt-5  text-gray-400 hover:text-gray-400 font-light italic">Se representa las causas mayoritarias por las que este grupo de la sociedad no accede a internet y, por lo tanto, no hace uso de dicha herramienta.</p>
        </div>

        <div className="flex flex-col lg:mt-10 md:mt-10 mb-20 mt-16">
          <img className="object-scale-down w-auto h-auto rounded-xl" src="/graficos/image04.png" alt="1"></img>
          <p className="flex lg:text-center md:text-center text-center md:mt-8 mt-5 text-gray-400 hover:text-gray-400 font-light italic">Se representa la evolución de la brecha digital respecto a personas mayores de 55 años desde 2017 a 2021.</p>
        </div>

      </div>


      <section id="fundamentacion"></section>
      <div className="flex flex-col justify-center items-center w-11/12 h-full rounded-2xl mt-20 mb-20 lg:px-16 md:px-16 px-10 py-10 bg-gradient-to-r from-black via-gray-900 to-black">

        <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20">
          <p className="font-bold text-center lg:text-6xl md:text-6xl text-5xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Fuentes acudidas</span></p>
          <p className='font-semibold text-center mt-4 lg:text-2xl md:text-2xl text-lg leading-snug text-gray-200'>¿De dónde hemos obtenido la <a href='https://educaixa.org/es/landing-thechallenge' className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">información</a> ?</p>
        </div>

        <div className="grid lg:grid-rows-3 md:grid-rows-3 grid-cols-6 grid-rows-3 items-center justify-items-center h-full lg:w-full md:w-full w-screen ">

          <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-1 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-1 md:col-span-6   col-start-1 row-start-1 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 lg:mt-16 md:mt-12 mt-20  border rounded-lg bg-gray-800 border-gray-700">

            <img className="object-cover rounded-l-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/ancianos09.jpg" alt=""></img>
            <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
              <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">Encuesta sobre Equipamiento y Uso de Tecnologías de Información y Comunicación (TIC) en los Hogares</h5>
              <p className="mb-3 font-normal lg:text-xl  text-gray-400 text-justify">El 94,5% de la población de 16 a 74 años ha usado Internet en los tres últimos meses. El 55,3% ha comprado en la red en los tres últimos meses.</p>

              <div className="flex flex-row justify-center items-center mt-8">

                <a href="https://www.ine.es/prensa/tich_2022.pdf" target='_blank'>
                  <img className="object-scale-down h-28 w-28" src="/rrss/net.png" alt="net"></img>
                </a>

              </div>
            </div>
          </div>


          <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 lg:mt-0 md:mt-12 mt-20  border rounded-lg bg-gray-800 border-gray-700">


            <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
              <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">Brecha digital: El 40% de las personas mayores asegura que nunca ha accedido a internet</h5>
              <p className="mb-3 font-normal lg:text-xl  text-gray-400 text-justify">Según el barómetro de la UDP, más personas mayores usan internet, pero aún 3 de cada 10 no pueden hacer gestiones cotidianas. El principal motivo por el que no la utilizan es por falta de conocimiento e interés. </p>

              <div className="flex flex-row justify-center items-center mt-8">

                <a href="https://www.newtral.es/brecha-digital-mayores-internet/20210720/#google_vignette" target='_blank'>
                  <img className="object-scale-down h-28 w-28 roun" src="/rrss/net.png" alt="net"></img>
                </a>

              </div>
            </div>

            <img className="object-cover rounded-r-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/ancianos11.avif" alt=""></img>

          </div>


          <div className="flex lg:flex-row md:flex-row flex-col  lg:col-start-1 lg:row-start-3 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-3 md:col-span-6   col-start-1 row-start-3 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 lg:mt-16 md:mt-12 mt-20 lg:mb-20 md:mb-20 border  rounded-lg bg-gray-800 border-gray-700">

            <img className="object-cover rounded-l-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/ancianos08.avif" alt=""></img>
            <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
              <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">LOS SMARTPHONES TODAVÍA NO SEDUCEN A LOS MAYORES EN ESPAÑA</h5>
              <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">Mientras la tasa de utilización de los teléfonos inteligentes entre las personas de 50 a 60 años es de un 65%, esta proporción desciende hasta el 22,95% en aquellos usuarios de más de 80 años.</p>

              <div className="flex flex-row justify-center items-center mt-8">

                <a href="https://solidaridadintergeneracional.es/wp/los-smartphones-todavia-no-seducen-a-los-mayores-en-espana/" target='_blank'>
                  <img className="object-scale-down h-28 w-28" src="/rrss/net.png" alt="net"></img>
                </a>

              </div>
            </div>
          </div>

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