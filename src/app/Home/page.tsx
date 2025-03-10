

import React from "react";

import Hero from "@/component/hero";

import ProductList from "@/component/productList";
import Footer from "@/component/footer";

import ContactInfo from "@/component/contactInfo";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* <Navbar /> */}
      <Hero/>
      {/* <header className="relative h-[550px] flex items-center justify-center text-center">
        <Image src="/MateBanner.jpeg" alt="Mate" layout="fill" objectFit="cover" className="opacity-50"  priority />
        <div className="relative z-10">
        <h2 className="text-5xl font-extrabold">Descubre tu nuevo mate favorito</h2>
        <p className="mt-4 text-lg">Variedad, calidad y estilo en cada mate.</p>
        </div>
      </header>
      <section className="bg-[rgba(255,247,247,0.63)] py-8 text-center text-white">
        <h3 className="text-3xl font-bold">¡Envíos a todo el país!</h3>
        <p className="mt-2 text-lg">Realizamos envíos rápidos y seguros a cualquier lugar de Argentina.</p>
      </section> */}
      <ContactInfo/>
<ProductList/>
    {/* <NavbarSecundario/> */}
         <Footer />
    </div>
  );
}





// Mi codigo por si deja de funcionar todo de vuelta//
/*import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
    
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Mates Estéticos</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">Inicio</a>
          <a href="#" className="hover:text-gray-400">Tienda</a>
          <a href="#" className="hover:text-gray-400">Contacto</a>
        </div>
      </nav>

  
      <header className="relative h-[500px] flex items-center justify-center text-center">
        <Image src="/banner.jpg" alt="Mate" layout="fill" objectFit="cover" className="opacity-50" />
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold">El ritual del mate, reinventado</h2>
          <p className="mt-4 text-lg">Encuentra los mates más estéticos y modernos aquí.</p>
        </div>
      </header>


      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-900 p-4 rounded-lg text-center">
            <Image src={`/mate${item}.jpg`} alt="Mate" width={200} height={200} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Mate {item}</h3>
            <p className="text-gray-400 mt-2">${25 + item * 5}.00</p>
          </div>
        ))}
      </section>


      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Mates Estéticos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
*/