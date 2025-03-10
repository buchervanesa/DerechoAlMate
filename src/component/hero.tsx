 

import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <header className="header-container">
        <Image 
          src="/MateBanner.jpeg" 
          alt="Mate" 
          layout="fill" 
          objectFit="cover" 
          className="background-image" 
          priority 
        />
         <div className="logo-container">
  <Image 
    src="/logo.png" 
    alt="Logo Derecho al Mate" 
    width={300} 
    height={300} 
    className=" sm:h-[250px] md:h-[300px] lg:h-[350px]"
  />
</div>
        <div className="content-wrapper">
          {/* Mensaje de Envíos */}
          <div className="envios">
            <p>¡Envíos a todo el país! </p>
       
          </div>
 


          {/* Mensaje Principal */}
          <div className="main-message">
            <h2 className="text-5xl font-extrabold text-white">Descubre tu nuevo mate favorito</h2>
            <p className="mt-4 text-lg text-white">Variedad, calidad y estilo en cada mate.</p>
          </div>
        </div>
        
      </header>

      {/* Sección de Grabado al pie */}
      <section className="footer-message">
        <p>¡Graba tu mate como más te guste! Personaliza tu mate con el grabado que prefieras y hazlo único. ¡Hazlo con nosotros!</p>
      </section>
    </div>
  );
}
