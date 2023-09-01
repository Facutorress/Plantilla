import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: "Producto 1", imageUrl: "/path/to/image1.jpg" },
    { id: 2, name: "Producto 2", imageUrl: "/path/to/image2.jpg" },
    { id: 3, name: "Producto 3", imageUrl: "/path/to/image3.jpg" },
  ];

  return (
    <div id="shop" className="bg-white p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border border-black p-4 rounded-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <a href={`/product/${product.id}`} className="text-black hover:text-gray-600 transition duration-300">{product.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
