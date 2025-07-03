import Image from "next/image";
import panImg from "public/pan-arabe.jpeg"
import logoImg from "public/minilogo.png.webp"
import phoneImg from "public/phone-icon.png"
import cartImg from "public/cart.png"

export default function Home() {
  return (
    <main className="bg-amber-100 text-gray-800">

      {/* Header */}
      <header className="bg-black flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image 
            src={logoImg}
            alt="pan icon"
            width={28}
            className="md:w-7"
          />
          <h1 className="text-white text-md md:text-md font-semibold">Panadería Moisés</h1>
        </div>

        {/* Navbar for desktop */}
        <nav className="hidden md:flex md:gap-5">
          <div className="flex gap-1 cursor-pointer">
            <Image 
              src={phoneImg}
              alt="phone icon"
              width={23}
            />
            <h2 className="text-white text-md font-semibold">Contáctanos</h2>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <Image
              src={cartImg}
              alt="cart icon"
              width={23}
            />
            <h2 className="text-white text-md font-semibold">Carrito</h2>
          </div>
        </nav>

        {/* Navbar for mobile */}
        <div className="md:hidden cursor-pointer">
          <div className="h-1 w-6 rounded-full bg-zinc-200"></div>
          <div className="h-1 w-6 rounded-full bg-zinc-200 mt-1"></div>
          <div className="h-1 w-6 rounded-full bg-zinc-200 mt-1"></div>
        </div>
        


      </header>




      {/* Hero Section */}
      <section className="text-center py-12 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pan Integral Artesanal</h1>
        <p className="text-xl md:text-2xl mb-6">
          Natural, saludable y <span className="text-yellow-700 font-semibold">sin manteca</span>.
        </p>
        <Image
          src={panImg}
          alt="Pan integral sin manteca"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
        />
        <button className="mt-6 px-6 py-3 bg-yellow-700 text-white rounded-xl hover:bg-yellow-800 active:bg-yellow-800 cursor-pointer">
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
