'use client'

import Image from "next/image";
{/* import panImg from "public/pan-arabe.jpeg" */}
import logoImg from "public/minilogo.png.webp"
import phoneImg from "public/phone-icon.png"
import cartImg from "public/cart.png"
import testImg from "public/test-bread.jpeg"
import { quicksand } from "utils/fonts"
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={`${quicksand.className}`}>

      {/* Logo and bakery name */}
      <header className="bg-black flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-zinc-800 active:bg-zinc-800 px-4 py-2">
          <Image 
            src={logoImg}
            alt="pan icon"
            width={28}
            className="object-cover"
          />
          <h1 className="text-white text-md md:text-md font-semibold">Panadería Moisés</h1>
        </div>

        {/* Navbar for desktop */}
        <nav className="hidden md:flex h-11">
          <div className="flex gap-1 cursor-pointer hover:bg-zinc-800 active:bg-zinc-800 px-4 py-2">
            <Image 
              src={phoneImg}
              alt="phone icon"
              width={28}
              className="object-cover"
            />
            <h2 className="text-white text-md font-semibold">Contáctanos</h2>
          </div>
          <div className="flex gap-1 cursor-pointer hover:bg-zinc-800 active:bg-zinc-800 px-4 py-2">
            <Image
              src={cartImg}
              alt="cart icon"
              width={28}
              className="object-cover"
            />
            <h2 className="text-white text-md font-semibold">Carrito</h2>
          </div>
        </nav>

        {/* Mobile navbar icon */}
        <div
          className="md:hidden cursor-pointer pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Línea 1 */}
          <div
            className={` h-1 w-6 bg-zinc-200 rounded-full transition-transform relative
            ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}>
          </div>
          {/* Línea 2 */}
          <div
            className={` mt-1 h-1 w-6 bg-zinc-200 rounded-full transition-all  
            ${isOpen ? 'opacity-0' : ''}`}>
          </div>
          {/* Línea 3 */}
          <div
            className={` mt-1 h-1 w-6 bg-zinc-200 rounded-full transition-transform relative
            ${isOpen ? '-rotate-45 bottom-2' : 'bottom-0'}`}>
          </div>
        </div>
        
        {/* mobile navbar */}
        {isOpen && (
          <ul className="md:hidden absolute top-11 right-0 w-50 bg-black text-white z-10">
            <li className="flex justify-center gap-1 cursor-pointer p-4 font-semibold hover:bg-zinc-800 active:bg-zinc-800">
              <Image 
                src={phoneImg}
                alt="phone icon"
                width={23}
              />
              <h2 className="text-white text-md font-semibold">Contáctanos</h2>
            </li>
            <li className="flex justify-center gap-1 cursor-pointer p-4 font-semibold hover:bg-zinc-800 active:bg-zinc-800">
              <Image
                src={cartImg}
                alt="cart icon"
                width={23}
              />
              <h2 className="text-white text-md font-semibold">Carrito</h2>
            </li>
          </ul>
        )}
      </header>




      {/* Hero Section */}
      <section className="text-center py-12 px-5 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pan Integral Artesanal</h1>
        <p className="text-xl md:text-2xl mb-6 font-semibold">
          Natural, saludable y <span className="text-yellow-200 font-semibold">sin manteca</span>.
        </p>
        <Image
          src={testImg}
          alt="Pan integral sin manteca"
          fill
          className="object-cover -z-10"
        />
        <button className="mt-6 px-6 py-3 bg-yellow-700 text-white rounded-xl hover:bg-yellow-800 active:bg-yellow-800 cursor-pointer font-semibold">
          ¡Quiero probarlo!
        </button>
      </section>

      {/* Beneficios */}
      <section className="min-h-50 bg-white py-12 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
          <p>Hecho con harina integral real, sin aditivos ni conservantes.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Sin Manteca</h3>
          <p>Ideal para quienes buscan una dieta más ligera y saludable.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Horneado Diario</h3>
          <p>Frescura garantizada todos los días, directo del horno a tu mesa.</p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 px-6 bg-amber-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <blockquote className="italic text-lg">“¡Delicioso y liviano! Me encantó el sabor y saber que es más saludable.”</blockquote>
          <blockquote className="italic text-lg">“Finalmente un pan integral que no sabe seco. Y sin manteca, ¡perfecto para mi dieta!”</blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-700 text-white text-center py-6">
        <p>Panadería Moisés &copy; 2025</p>
        <p className="mt-2 text-sm">Contáctanos: 967-274-225</p>
      </footer>
    </main>
  );
}
