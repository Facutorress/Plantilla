import React from 'react';
import Sobrenosotros from './Sobrenosotros';
import Shop from './Shop';
import Form from './Form';

const Home = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <section id="welcome" className="py-20 px-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenidos a Nuestra Página</h1>
        <p className="text-lg">Estamos encantados de tenerte aquí. Explora y descubre todo lo que tenemos para ofrecerte.</p>
      </section>
      <Sobrenosotros />
      <Shop />
      <Form />
    </div>
  );
}

export default Home;



