// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBarSuperior() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Image src="/logo_sgv_otm.png" alt="Logo" width={50} height={50} />
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-blue-600">MinhaLogo</span>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600">
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="text-gray-700 hover:text-blue-600"
            >
              Serviços
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600">
              Contato
            </Link>
          </div>

          {/* Botão mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <Link
            href="/sobre"
            className="block text-gray-700 hover:text-blue-600"
          >
            Sobre
          </Link>
          <Link
            href="/servicos"
            className="block text-gray-700 hover:text-blue-600"
          >
            Serviços
          </Link>
          <Link
            href="/contato"
            className="block text-gray-700 hover:text-blue-600"
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
