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
      className={`flex min-h-screen flex-col items-center justify-between bg-slate-900  ${inter.className}`}
    >
      <Head>
        <title>En desarrollo...</title>
      </Head>

        <div className="flex items-center justify-center justify-items-center w-screen h-screen">
        <p className=' text-white text-6xl font-bold text-center'>Estamos <span className="px-2 text-yellow-500 rounded-2xl bg-emerald">trabajando</span> en ello...</p>
        </div>

      


    </main>
  )
}