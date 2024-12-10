import { Link, Element } from 'react-scroll';
export default function NavBarLateral() {
	return (
		<div class="flex-col absolute top-0 left-0 max-w-md shadow-md p-2 overflow-hidden md:max-w-2xl mt-16 backdrop-opacity-10 backdrop-invert bg-white/30">
			<nav>
				<ul className="flex flex-col justify-between gap-5">
					<li className="border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="comofunc" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Como Funciona
						</Link>
					</li>
					<li className="border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="section2" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Depoimentos
						</Link>
					</li>
					<li className="border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="section3" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Seção 3
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
