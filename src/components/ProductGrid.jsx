import React from "react";
import { Star } from "lucide-react"; // للأيقونات (لو عندك shadcn/lucide)
import product1 from "../assets/images/1.jpg";
import product2 from "../assets/images/2.jpg";
import product3 from "../assets/images/3.jpg";
import product4 from "../assets/images/4.jpg";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 29.99,
    image: product1,
    rating: 4,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 49.99,
    image: product2,
    rating: 5,
  },
  {
    id: 3,
    name: "Classic Hoodie",
    price: 39.99,
    image: product3,
    rating: 4,
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    image: product4,
    rating: 3,
  },
];

function ProductGrid() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
        Best Products
      </h2>

      {/* ✅ الـ grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* 🖼️ صورة المنتج */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* 🛒 overlay عند hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-full hover:scale-105 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* 💬 تفاصيل المنتج */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 truncate">
                {product.name}
              </h3>
              <p className="text-primary-light dark:text-primary-dark text-xl font-bold mt-1">
                ${product.price.toFixed(2)}
              </p>

              {/* ⭐ تقييم */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
