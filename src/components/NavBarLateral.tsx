'use client';
import { Link, Element } from 'react-scroll';
export default function NavBarLateral() {
	const scroolfx = () => {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 60) {
				$('#navbar').addClass('navbar-fixed-top', 500);
			} else {
				$('#navbar').removeClass('navbar-fixed-top', 500);
			}
		});
	};
	return (
		<div class="flex flex-col fixed max-w-md z-50 shadow-md p-1 overflow-hidden md:max-w-2xl mt-16 backdrop-opacity-10 backdrop-invert bg-white/30">
			<nav>
				<ul className="flex flex-col justify-between gap-3" id="navbar">
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
