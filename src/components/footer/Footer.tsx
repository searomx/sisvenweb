// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 bottom-0 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © b4tech Softwares e Serviços - 2025
        </p>
        <p className="text-sm mb-4 md:mb-0">
          Rua Professor Sebastião Paraná, 48, Curitiba, PR - CEP 80320-070
        </p>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-500 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-500 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="X (Twitter)">
            <FaXTwitter className="hover:text-sky-500 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}