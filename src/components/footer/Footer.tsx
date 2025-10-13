// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-10 text-white py-3 sm:px-1 sm:mt-2 px-4 shadow-2xl shadow-gray-500 fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:space-x-5 md:flex-row space-x-10">
        <p className="text-sm mb-4 md:mb-0">
          © b4tech Softwares e Serviços - 2025
        </p>
        <div className="flex space-x-4 sm:text-center md:ml-auto">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-blue-500 transition" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="hover:text-sky-500 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
