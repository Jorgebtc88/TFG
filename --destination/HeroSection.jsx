import React from "react";

export function HeroSection() {
  return (
    <section className="flex relative items-center px-5 py-0 h-[80vh]">
      <img
        src="https://images.pexels.com/photos/31774563/pexels-photo-31774563.jpeg"
        alt="Hero fashion image"
        className="object-cover overflow-hidden absolute top-0 left-0 aspect-square size-full z-[-1]"
      />
      <div className="max-w-[600px] text-[white]">
        <h2 className="mb-5 text-5xl font-bold">Tu estilo empieza aquí</h2>
        <button className="px-8 py-4 text-lg bg-red-500 transition-transform cursor-pointer border-[none] duration-[0.2s] rounded-[30px] text-[white] hover:transform hover:scale-105">
          Comprar ahora
        </button>
      </div>
    </section>
  );
}
