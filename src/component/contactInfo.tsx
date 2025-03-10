import Image from "next/image";
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">

      <div>
        <a
          href="https://wa.me/543764127995"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp.png"
            alt="Teléfono"
            width={40}
            height={40}
            className="icon-ubi"
          />
          <h3>Contacto</h3>
          <p>3764 127995</p>
        </a>
      </div>

    
      <div>
        <Image
          src="/marcado.png"
          alt="Ubicación"
          width={40}
          height={40}
          className="icon-ubi"
        />
        <h3>Ubicación</h3>
        <p>Posadas, Misiones</p>
      </div>

      <div>
        <a
          href="https://www.instagram.com/derechoalmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="icon-ubi"
          />
          <h3>Instagram</h3>
          @derechoalmate
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
