"use client";
import { Link } from "react-scroll";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import {
  HiCog8Tooth,
  HiChartPie,
  HiMiniSwatch,
  HiMiniMegaphone,
} from "react-icons/hi2";

export default function SideBar() {
  return (
    <Menu as="div" className="relative inline-block z-50">
      <MenuButton className="inline-flex cursor-pointer w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
        Navegar
        <Bars4Icon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-2 rounded-b-lg rounded-t-none bg-gray-800 shadow-xs cursor-pointer">
          <MenuItem>
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Link
                to="comofunc"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 text-sm
                   text-gray-300 data-focus:bg-white/5
                    data-focus:text-white 
                    data-focus:outline-hidden`}
              >
                <div className="flex gap-2 text-sm font-medium">
                  <HiCog8Tooth className="size-5 text-amber-600" />
                  <span>Como Funciona</span>
                </div>
              </Link>
            </div>
          </MenuItem>
          <MenuItem>
          <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <Link
              to="gestao"
              smooth={true}
              duration={500}
              className={`block px-4 py-2 text-sm
                 text-gray-300 data-focus:bg-white/5
                  data-focus:text-white 
                  data-focus:outline-hidden`}
            >
              <div className="flex gap-2 text-sm font-medium">
                <HiChartPie className="size-5 text-fuchsia-600" />
                <span>Painéis de Gestão</span>
              </div>
            </Link>
            </div>
          </MenuItem>
          
          <form action="#" method="POST">
            <MenuItem>
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Link
                to="depoimentos"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 text-sm
                 text-gray-300 data-focus:bg-white/5
                  data-focus:text-white 
                  data-focus:outline-hidden`}
              >
                <div className="flex gap-2 text-sm font-medium">
                  <HiMiniMegaphone className="size-5 text-amber-600" />
                  <span>O que dizem os nossos clientes</span>
                </div>
              </Link>
              </div>
            </MenuItem>
            <MenuItem>
          <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <Link
              to="segmentos"
              smooth={true}
              duration={500}
              className={`block px-4 py-2 text-sm
                 text-gray-300 data-focus:bg-white/5
                  data-focus:text-white 
                  data-focus:outline-hidden`}
            >
              <div className="flex gap-2 text-sm font-medium">
                <HiMiniSwatch className="size-5 text-emerald-500" />
                <span>Segmentos</span>
              </div>
            </Link>
            </div>
          </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
