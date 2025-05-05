"use client";
import React, { useState } from "react";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex sticky top-0 justify-between items-center px-5 py-5 border-b border-solid border-b-zinc-100 z-[100]">
      <h1 className="text-2xl font-bold">FASHION</h1>
      <nav className="max-sm:hidden">
        <a
          href="#inicio"
          className="mx-5 my-0 text-base font-semibold tracking-wide no-underline transition-all duration-[0.3s] ease-[ease] text-zinc-800"
        >
          Inicio
        </a>
        <a
          href="#hombres"
          className="mx-5 my-0 font-medium no-underline text-zinc-800"
        >
          Hombres
        </a>
        <a
          href="#mujeres"
          className="mx-5 my-0 font-medium no-underline text-zinc-800"
        >
          Mujeres
        </a>
        <a
          href="#accesorios"
          className="mx-5 my-0 font-medium no-underline text-zinc-800"
        >
          Accesorios
        </a>
      </nav>
      <div className="flex gap-5">
        <button
          className="text-xl cursor-pointer border-[none]"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Buscar"
        >
          🔍
        </button>
        <button
          className="text-xl cursor-pointer border-[none]"
          aria-label="Carrito"
        >
          🛒
        </button>
      </div>
    </header>
  );
}
