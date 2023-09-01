import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <Link 
          className="text-black hover:text-gray-600 px-4 transition duration-300"
          activeClass="text-gray-600 border-b-2 border-black"
          to="bienvenida"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Bienvenida
        </Link>
        <Link 
          className="text-black hover:text-gray-600 px-4 transition duration-300"
          activeClass="text-gray-600 border-b-2 border-black"
          to="sobrenosotros"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Sobre Nosotros
        </Link>
        <Link 
          className="text-black hover:text-gray-600 px-4 transition duration-300"
          activeClass="text-gray-600 border-b-2 border-black"
          to="shop"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Shop
        </Link>
        <Link 
          className="text-black hover:text-gray-600 px-4 transition duration-300"
          activeClass="text-gray-600 border-b-2 border-black"
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
