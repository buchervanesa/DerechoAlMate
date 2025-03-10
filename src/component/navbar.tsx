 

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" flex items-center border-b border-gray-700 p-3">
      {/* Logo en la esquina izquierda */}
      <div className="absolute left-0 p-3"> {/* Asegura que la imagen esté en la esquina */}
        <Image 
          src="/lo2.jpeg" 
          alt="Logo Derecho al Mate" 
          width={80} 
          height={80} 
          className="h-[80px] w-auto"
        />
      </div>

      {/* Logo centrado */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image 
          src="/lo.jpeg" 
          alt="Logo Derecho al Mate" 
          width={100} 
          height={100} 
          className="h-[80px] w-auto"
        />
      </div>
    </nav>
  );
}


