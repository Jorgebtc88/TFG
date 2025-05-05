import React from "react";

export function CategoryCard({ image, title }) {
  return (
    <article className="overflow-hidden relative rounded-xl transition-transform cursor-pointer duration-[0.3s] hover:transform hover:scale-105">
      <img
        src={image}
        alt={`${title} category`}
        className="object-cover overflow-hidden w-full aspect-square"
      />
      <div className="absolute bottom-0 p-5 w-full text-[white]">
        <h4 className="text-2xl">{title}</h4>
      </div>
    </article>
  );
}
