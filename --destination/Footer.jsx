import React from "react";

export function Footer() {
  return (
    <footer className="px-5 pt-16 pb-10 text-center bg-zinc-800 text-[white]">
      <div className="flex gap-10 justify-center mb-10 max-sm:flex-col max-sm:gap-5">
        <nav>
          <h4 className="mb-4">Ayuda</h4>
          <ul className="list-none p-0">
            <li className="mb-3">
              <a
                href="#faq"
                className="text-base font-medium tracking-wide text-white no-underline transition-all duration-[0.3s] ease-[ease]"
              >
                FAQ
              </a>
            </li>
            <li className="mb-2.5">
              <a href="#envios" className="text-white no-underline">
                Envíos
              </a>
            </li>
            <li className="mb-2.5">
              <a href="#devoluciones" className="text-white no-underline">
                Devoluciones
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h4 className="mb-5 text-lg font-semibold tracking-wide">
            Redes Sociales
          </h4>
          <div className="flex gap-5 justify-center">
            <a
              href="#social1"
              className="text-2xl text-white"
              aria-label="Mobile"
            >
              📱
            </a>
            <a
              href="#social2"
              className="text-2xl text-white"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="#social3"
              className="text-2xl text-white"
              aria-label="Profile"
            >
              👤
            </a>
          </div>
        </div>
      </div>
      <p className="pt-5 border-t border-solid border-t-neutral-600">
        © 2024 FASHION. Todos los derechos reservados.
      </p>
    </footer>
  );
}
