import React from "react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Hombres",
    image:
      "https://images.pexels.com/photos/17243573/pexels-photo-17243573.jpeg",
  },
  {
    title: "Mujeres",
    image:
      "https://images.pexels.com/photos/31769228/pexels-photo-31769228.jpeg",
  },
  {
    title: "Accesorios",
    image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg",
  },
  {
    title: "Ofertas",
    image: "https://images.pexels.com/photos/6068971/pexels-photo-6068971.jpeg",
  },
];

export function CategoriesSection() {
  return (
    <section className="px-5 py-20 text-center">
      <h3 className="mb-10 text-3xl font-semibold">Categorías</h3>
      <div className="flex gap-5 max-md:flex-col">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`w-3/12 ${index > 0 ? "ml-5" : ""} max-md:ml-0 max-md:w-full`}
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
}
