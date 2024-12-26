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
        <title>Gancho</title>
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


      <div className="flex flex-col justify-center items-center w-11/12 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-20 mt-32 mb-20">

        <p className="font-bold text-center lg:text-6xl md:text-8xl text-4xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Branding de CRIC</span></p>
        <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>Lo que queremos que <span className="px-2 text-black bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">recuerden</span> de nosotros</p>


        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-32 lg:text-center md:text-center justify-text lg:px-20 md:px-20 px-10">CRIC tiene como objetivo proporcionar y potenciar las herramientas digitales la cuales permitan <span className="text-transparent bg-clip-text bg-gradient-to-r font-medium from-pink-600 to-indigo-700">desarrollar nuestras vidas con solvencia y eficacia</span> disfrutando así, de <span className="px-2 text-gray-100 bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">una vida mejor</span>. Ahora más que nunca debemos integrar los valores, la tecnología y la sociedad.</p>
        <h1 class="mb-4 lg:text-6xl md:text-4xl text-xl font-normal leading-none tracking-tight px-10 text-gray-900 dark:text-white italic lg:mt-5 md:mt-5 mt-16 text-center"><span class="text-white dark:text-white text-3xl font-normal">Valores, Tecnología y Sociedad</span></h1>

      </div>



      <div className="flex flex-col justify-center items-center w-screen bg-transparent py-20 -mb-20">
        <p className="font-bold text-center lg:text-6xl md:text-8xl text-4xl leading-snug text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">Difusión</span></p>
        <p className='font-semibold text-center mt-4 lg:text-2xl md:text-xl text-lg leading-snug text-gray-200'>¿Cómo nos hemos dado a <span className="px-2 text-white bg-gradient-to-r from-pink-600 to-indigo-600 rounded hover:bg-white dark:bg-blue-500">conocer</span> ?</p>
      </div>



      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">De Poeta en Nueva York A 4 Jóvenes Granadinos Que Acaban en la capital del mundo</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">Hace casi 100 años ya, el poeta granadino Federico García Lorca pisaba La Gran Manzana justo cuando una gran crisis azotaba el país y el mundo entero, el Crac del 29. Hoy en día, este grupo de 4 jóvenes estudiantes granadinos cruzan el gran charco para exponer su proyecto delante de algunas de las instituciones más laureadas del planeta entre las que se destacan la ONU, Harvard, Yale y el MIT. <a href="https://en-clase.ideal.es/2024/08/14/de-poeta-en-nueva-york-a-cuatro-jovenes-granadinos-que-acaban-en-la-capital-del-mundo/" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://en-clase.ideal.es/2024/08/14/de-poeta-en-nueva-york-a-cuatro-jovenes-granadinos-que-acaban-en-la-capital-del-mundo/" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/ideal.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/foto04.jpg" alt=""></img>

      </div>



      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">«Hemos vivido doce días de película y ahora nuestra mentalidad es otra»</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">David Morales, Caleb Martín, Javier Rodríguez, Ruiou José Wu, integrantes del equipo CRIC (Club Robótica e Informática Churriana) ya están de vuelta en casa. Los cuatro estudiantes del IES Federico García Lorca de Churriana, junto a su mentora, Irene Alcalde Pinteño, pueden presumir de haber  <a href="https://www.ideal.es/granada/area-metropolitana/vivido-doce-dias-pelicula-mentalidad-20240729234602-nt.html" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://www.ideal.es/granada/area-metropolitana/vivido-doce-dias-pelicula-mentalidad-20240729234602-nt.html" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/colaboradores/ideal2.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/FotoPortada.jpg" alt=""></img>

      </div>



      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">La iniciativa CRIC participa en The Challenge por Educaixa</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">Club Robótica e Informática Churriana (CRIC), un equipo conformado por estudiantes de la localidad granadina de Churriana de la Vega, ha sido uno de los 17 seleccionados de toda la península por EduCaixa para exponer su proyecto ante las Naciones Unidas.  Su misión es llevar las nuevas tecnologías a las personas de la tercera edad con un enfoque intergeneracional, respaldado con MetaLife, una aplicación para este sector de la población desarrollada por ellos mismos. <a href="https://en-clase.ideal.es/2024/05/19/el-club-robotica-e-informatica-churriana-expondra-su-proyecto-en-nueva-york/" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://en-clase.ideal.es/2024/05/19/el-club-robotica-e-informatica-churriana-expondra-su-proyecto-en-nueva-york/" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/ideal.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/cric4.webp" alt=""></img>

      </div>



      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">La iniciativa CRIC participa en The Challenge por Educaixa</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">El equipo CRIC (Club Robótica e Informática Churriana) conformada por cuatro estudiantes del IES Federico García Lorca de este municipio ha pasado la primera fase de selección del concurso The Challenge por Educaixa gracias a lo cual, en el próximo mes de mayo vivirán una experiencia de cuatro días en Barcelona en la que se decidirá su continuidad en este concurso. <a href="https://en-clase.ideal.es/2024/04/21/el-cric-se-cuela-entre-los-cien-mejores-equipos-del-concurso-the-challenge-por-educaixa/" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://en-clase.ideal.es/2024/04/21/el-cric-se-cuela-entre-los-cien-mejores-equipos-del-concurso-the-challenge-por-educaixa/" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/ideal.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/cric3.webp" alt=""></img>

      </div>



      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">La iniciativa CRIC participa en The Challenge por Educaixa</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">En este último medio año han estado elaborando su propuesta basada en los talleres que ya venían impartiendo en el Centro de Participación Activa y el Centro de Cultura de Churriana de la Vega. Estos lugares fueron cedidos por el ayuntamiento municipal y la Junta de Andalucía para desarrollar estas actividades que combinan las nuevas tecnologías y las personas de la tercera edad de la localidad. <a href="https://en-clase.ideal.es/2024/02/22/la-iniciativa-cric-participa-en-the-challenge-by-educaixa/" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://en-clase.ideal.es/2024/02/22/la-iniciativa-cric-participa-en-the-challenge-by-educaixa/" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/ideal.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/img43.jpg" alt=""></img>

      </div>





      <div className="flex lg:flex-row md:flex-row flex-col lg:my-20  lg:col-start-1 lg:row-start-2 lg:col-span-6  shadow-black shadow-lg hover:shadow-2xl hover:shadow-black   md:col-start-1 md:row-start-2 md:col-span-6   col-start-1 row-start-2 col-span-6    h-min w-9/12 md:h-min md:w-11/12 lg:h-min lg:w-10/12 md:mt-12 mt-20    border  rounded-lg bg-gray-800 border-gray-700">

        <div className="flex flex-col justify-between p-4 lg:justify-center lg:items-left lg:p-16 lg:space-y-10 lg:mr-20 md:space-y-2 md:p-6 leading-normal">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-white">CRIC: Una iniciativa que trae consigo un nuevo paradigma de enseñanza respecto a las nuevas tecnologías</h5>
          <p className="mb-3 font-normal lg:text-xl text-gray-400 text-justify">Club Robótica e Informática Churriana es una iniciativa juvenil llevada a cabo por 3 jóvenes de la localidad granadina de Churriana de la Vega. Su objetivo es velar por que todas las personas de nuestra sociedad tengan conocimientos respecto a las nuevas tecnologías las cuales permiten desarrollar sus vidas en esta nueva era digital con solvencia y eficacia. <a href="https://en-clase.ideal.es/2023/12/26/cric-una-asociacion-que-trae-consigo-un-nuevo-paradigma-de-ensenanza-respecto-a-las-nuevas-tecnologias/" target='_blank' className='italic text-blue-500 font-light'>Seguir leyendo...</a></p>

          <div className="flex flex-row justify-center items-center mt-8">

            <a href="https://en-clase.ideal.es/2023/12/26/cric-una-asociacion-que-trae-consigo-un-nuevo-paradigma-de-ensenanza-respecto-a-las-nuevas-tecnologias/" target='_blank'>
              <img className="object-scale-down h-auto w-44 rounded-xl" src="/ideal.png" alt="net"></img>
            </a>

          </div>
        </div>

        <img className="object-cover rounded-b-lg lg:w-2/5 lg:h-auto md:w-2/5 md:h-auto" src="/cric2.webp" alt=""></img>

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