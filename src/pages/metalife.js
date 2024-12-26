import Image from "next/image";



export default function MetalifeWeb() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-slate-200">
      <section className="{styles.body}">
        <div className="">
          <div className=" md:w-max text-center">
            <img
              src="https://i.imgur.com/em7eT9S.png"
              alt="logometalifemain"
              className="mx-auto w-2/4 sm:w-2/4 md:w-2/4"
            />
            <h1 className="text-xl sm:text-xl md:text-7xl font-black mt-6 drop-shadow-xl bg-gradient-to-t from-[#a3a3a3] to-[#c9c9c9] text-transparent bg-clip-text">
              <span>Meta</span>
              <span>Life</span>
            </h1>
            <h2 className="font-black text-lg sm:text-xl md:text-xl mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-700">
                By CRIC
              </span>
            </h2>
          </div>
        </div>
      </section>


      <section className="w-full h-auto mt-24">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-center font-black text-5xl tracking-tight text-[#1d1d1f]">
            Descubre la sencillez.
          </h2>
          <div className=" w-5/6">
            <h3 className="text-center font-medium text-2xl mt-6 text-slate-800">
              MetaLife es una aplicación dedicada para aquellos usuarios a los cuales le gusta la sencillez, la
              eficacia y el estilo minimalista. Esta herramienta a la que denominamos la navaja suiza digital hace
              honor a dicho apodo ya que desde la misma tendremos acceso a todas las funciones esenciales de nuestro
              dispositivo evitando así confusiones a la hora de ejecutar distintas acciones en el dispositivo. Algunas
              acciones destacadas que nos permite hacer MetaLife pueden ser:
            </h3>
          </div>


          <div className="pt-20 w-full h-auto  flex flex-col items-center justify-center">
            <iframe className="rounded-xl lg:w-2/5 lg:h-96 md:w-11/12 md:h-96 w-11/12 h-96"
              src="https://www.youtube.com/embed/N3SKyEAi08c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>

          <div className="w-3/5 py-20 text-center rounded-3xl shadow sm:p-8 bg-[#0071e3] border-black mt-40 mb-20 p-5">
            <h3 className="mb-2 text-3xl font-bold text-[#f5f5f7]">Pedir cita médica.</h3>
            <p className="mb-5 text-base sm:text-lg text-[#f5f5f7] mt-10">
              Pide cita médica de manera sencilla e intuitiva a través de MetaLife.
            </p>
          </div>
          <div className="w-3/5 py-20 text-center rounded-3xl shadow sm:p-8 bg-[#0071e3] border-black mb-20 p-5">
            <h3 className="mb-2 text-3xl font-bold text-[#f5f5f7]">Poner recordatorios, alarmas y tareas pendientes.</h3>
            <p className="mb-5 text-base sm:text-lg text-[#f5f5f7] mt-10">
              Hay ciertas acciones que suelen complicarse en las aplicaciones por defecto de cada teléfono y los
              recordatorios y alarmas son una de ellas. Por esta razón es que traemos una novedosa, intuitiva y
              adaptada forma de hacer esto de manera sencilla, ahorrando así tiempo al usuario.
            </p>
          </div>
        </div>
      </section>
      
      
      
      <section>
        <div className=" py-20 text-center border rounded-lg shadow sm:p-8 bg-[#1d1d1f] border-black mt-20 mb-20 p-5">
          <h3 className="mb-2 text-3xl font-bold text-white">Fase beta de MetaLife.</h3>
          <p className="mb-5 text-base sm:text-lg text-gray-400 mt-10">
            Actualmente estamos desarrollando las principales funcionalidades de la aplicación multipropósito
            MetaLife. Para más información, póngase en
            <span className="text-white font-bold">
              <a href="https://contacto-definitivo.vercel.app"> contacto </a>
            </span>
            con los desarrolladores.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.cric.metalife_beta"
              className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 font-bold"
            >
              Descargar en Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
