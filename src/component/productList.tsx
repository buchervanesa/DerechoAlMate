'use client'
import { useState } from "react";
import Image from "next/image";

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);  
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState<string | null>(null);  

  const products = [
    { id: 1, name: "Mate Imperial Algarrobo 1", price: 19000, oldPrice: "En descuento! precio anterior $21.000", image: "/algarrobo2.jpeg", category: "Mates", subcategory: "Algarrobo", subSubcategory: "Imperiales" },
    { id: 2, name: "Mate Camionero Algarrobo", price: 10000, oldPrice: "agotado", image: "/CamioneroAlgarrobo.jpeg", category: "Mates", subcategory: "Algarrobo", subSubcategory: "Camioneros" },
    { id: 3, name: "Mate de Cuero", price: 23000, oldPrice: "", image: "/Cuero3.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Imperiales" },
    // { id: 4, name: "Mate Torpedo Cuero", price: 42000, oldPrice: 47000, image: "/MateNegro.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Torpedos" },
    { id: 5, name: "Bombilla de Acero Inox", price: 5700, oldPrice: "", image: "/BombillaAcero.jpeg", category: "Accesorios", subcategory: "", subSubcategory: "" },
    { id: 6, name: "Matera EcoCuero", price: 10500, oldPrice: "ingresa pronto", image: "/Matera.jpeg", category: "Materas", subcategory: "", subSubcategory: "" },
    { id: 7, name: "yerbero y ayucarero", price:4000, oldPrice: 7000, image: "/yer.jpeg", category: "Accesorios", subcategory: "", subSubcategory: "" },
    { id: 8, name: "Termo Original Termolar", price: 58000, oldPrice: 7000, image: "/Termo.jpeg", category: "Termos", subcategory: "", subSubcategory: "" },
    { id: 9, name: "Mate Imperial Algarrobo 2", price: 23000, oldPrice: "", image: "/ImperialAlrayas.jpeg", category: "Mates", subcategory: "Algarrobo", subSubcategory: "Imperiales" },
    { id: 11, name: "Mate Imperial De Cuero ", price: 23000, oldPrice: "", image: "/MateNegro.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Imperiales" },
    { id: 12, name: "Mate Imperial De Cuero", price: 23000, oldPrice: "", image: "/MateBordo.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Imperiales" },
    { id: 13, name: "Mate Imperial De Cuero ", price: 23000, oldPrice: "", image: "/MateBordo1.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Imperiales" },
    { id: 14, name: "Mate Imperial De Cuero", price: 23000, oldPrice: "", image: "/MatedeCuero1.jpeg", category: "Mates", subcategory: "Cuero", subSubcategory: "Imperiales" },
  ];


  const categories: Record<string, Record<string, string[]>> = {
    "Mates": {
      "Algarrobo": ["Imperiales", "Camioneros", "De Cruz"],
      "Cuero": ["Imperiales", "Imperiales con aplique", "Torpedos"]
    },
    "Termos": {},
    "Materas": {},
    "Accesorios": {}
  };

 
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
    const matchesSubSubcategory = !selectedSubSubcategory || product.subSubcategory === selectedSubSubcategory;
    return matchesCategory && matchesSubcategory && matchesSubSubcategory;
  });
  console.log("renderizando");

  return (
    <section className="p-6 px-6">

      <div className="w-1/4 justify-center items-center text-black">
        <h2 className="text-2xl font-semibold mb-4 text-black">Filtrar por Producto</h2>
        
      
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubcategory(null); 
            setSelectedSubSubcategory(null); 
          }}
          className="w-full px-4 py-2 custom-select"
        >
          <option value="all">Todos los Productos</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

       
        {selectedCategory in categories && Object.keys(categories[selectedCategory]).length > 0 && (
          <select
            onChange={(e) => {
              setSelectedSubcategory(e.target.value);
              setSelectedSubSubcategory(null); 
            }}
            className="w-full mt-2 custom-select"
          >
            <option value="">Todos</option>
            {Object.keys(categories[selectedCategory]).map((subcat) => (
              <option key={subcat} value={subcat}>{subcat}</option>
            ))}
          </select>
        )}


        {selectedSubcategory && categories[selectedCategory]?.[selectedSubcategory]?.length > 0 && (
          <select
            onChange={(e) => setSelectedSubSubcategory(e.target.value)}
            className="w-full mt-2 custom-select"
          >
            <option value="">Todos</option>
            {categories[selectedCategory][selectedSubcategory].map((subSubcat) => (
              <option key={subSubcat} value={subSubcat}>{subSubcat}</option>
            ))}
          </select>
        )}
      </div>

  
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg text-center border-2 border-black transition duration-300 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">{product.name}</h3>
              <p className="text-gray-400 mt-2 line-through text-sm">
                {product.oldPrice ? product.oldPrice.toLocaleString() : ""}
              </p>
              <p className="text-black mt-2 text-xl">${product.price.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-xl col-span-3 text-center mt-10">No hay productos disponibles.</p>
        )}
      </div>
    </section>
  );
}
