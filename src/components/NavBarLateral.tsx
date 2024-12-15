'use client';
import { Link, Element } from 'react-scroll';
import style from './styles.module.css';
export default function NavBarLateral() {	
	return (
		<div className={style.sidenav} >
			<nav>
				<ul className="flex flex-col justify-between gap-2" id="navbar">
					<li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="comofunc" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Como Funciona
						</Link>
					</li>
					<li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="section2" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Depoimentos
						</Link>
					</li>
					<li className="border-gray-200 dark:border-gray-700 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
						<Link to="section3" smooth={true} duration={500} className="hover:text-gray-900 text-gray-600">
							Seção 3
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
