"use client";
import { Link } from "react-scroll";
import style from "./styles.module.css";

export default function NavBarLateral() {
  return (
    <div className={style.sidenav}>
      <nav>
        <ul className="flex flex-col justify-between gap-2" id="navbar">
          <li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <Link
              to="comofunc"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 text-gray-600"
            >
              Como Funciona
            </Link>
          </li>
          <li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <Link
              to="gestao"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 text-gray-600"
            >
              Painéis de Gestão
            </Link>
          </li>
          <li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <Link
              to="segmentos"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 text-gray-600"
            >
              Segmentos
            </Link>
          </li>
          <li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <Link
              to="depoimentos"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 text-gray-600"
            >
              O que dizem os Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
