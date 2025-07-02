import Image from "next/image";
import panImg from "public/images.jpeg"
import logoImg from "public/minilogo.png.webp"


export default function Home() {
  return (
    <main className="bg-amber-100 text-gray-800">

      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center pl-3 md:pl-4 py-2 md:py-4 gap-2">
          <Image 
            src={logoImg}
            alt="pan icon"
            width={32}
            className="md:w-10"
          />
          <h1 className="text-white text-lg md:text-xl font-semibold">Panadería Moisés</h1>
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
        <button className="mt-6 px-6 py-3 bg-yellow-700 text-white rounded-xl hover:bg-yellow-800">
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
