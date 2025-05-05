"use client";
import React from "react";

export function NewsletterSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="px-5 py-16 text-center bg-stone-50">
      <h3 className="mb-5 text-2xl">Suscríbete a nuestra newsletter</h3>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2.5 mx-auto my-0 max-w-[500px]"
      >
        <input
          type="email"
          placeholder="Tu email"
          className="flex-1 p-4 rounded-md border border-solid border-zinc-300"
          required
        />
        <button className="px-8 py-4 rounded-md cursor-pointer bg-zinc-800 border-[none] text-[white] hover:bg-zinc-700">
          Suscribirse
        </button>
      </form>
    </section>
  );
}
