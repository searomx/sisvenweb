'use client';
import Image from 'next/image';
import { Link, Element } from 'react-scroll';
import NavBarLateral from '../components/NavBarLateral';

export default function Home() {
	return (
		<>
			{/* <div className="flex flex-col relative">
				<NavBarLateral/>;
			</div> */}
			<div className="w-full max-w-screen-xl h-full flex flex-col justify-center items-center backdrop-opacity-10 backdrop-invert bg-white/30 relative">
				{/* <div class="max-w-md shadow-md p-2 overflow-hidden md:max-w-2xl mt-16 backdrop-opacity-10 backdrop-invert bg-white/30 relative">
					<nav>
						<ul className="flex justify-between gap-5">
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
				</div> */}
				{/* <ul>
						<li className=" border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
							Home
						</li>
						<li className=" border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
							Sobre
						</li>
						<li className=" border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
							Serviços
						</li>
					</ul> */}

				<div className="flex w-full flex-wrap justify-center p-10 mt-10">
					<div className="flex flex-col w-full items-center mb-3 p-2">
						<p className="text-zinc-300 dark:text-white text-3xl font-medium flex">
							O Que é o Sistema de Gerenciamento de Vendas
						</p>
					</div>
					<div className="p-4 max-w-sm ">
						<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
							<div className="flex items-center mb-3">
								<h2 className="text-white dark:text-white text-lg font-medium">Work Team</h2>
							</div>
							<div className="flex flex-col justify-between flex-grow">
								<Image src="/images/work-team.png" alt="img-team" width={1000} height={500} />
								<p className="text-gray-500 dark:text-gray-400 text-lg">
									Nossas equipe é composta por jovens talentosos tanto no desenvolvimento de novas idéias quanto no
									relacionamento com o cliente. Fazemos a diferença.
								</p>
							</div>
						</div>
					</div>

					<div className="p-4 max-w-sm">
						<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
							<div className="flex items-center mb-3">
								<h2 className="text-white dark:text-white text-lg font-medium">Criando uma cultura de inovação</h2>
							</div>
							<div className="flex flex-col justify-between flex-grow">
								<Image src="/images/team.png" alt="img-team" width={1000} height={500} />
								<p className="text-gray-500 dark:text-gray-400 text-lg">
									A todo momento estamos discutindo novas tecnologias para estar sempre atualizados fazendo com que
									nossos clientes estejam sempre na vanguarda.
								</p>
							</div>
						</div>
					</div>

					<div className="p-4 max-w-sm">
						<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
							<div className="flex items-center mb-3">
								<h2 className="text-white dark:text-white text-lg font-medium">Troca de Experiências</h2>
							</div>
							<div className="flex flex-col justify-between flex-grow">
								<Image
									src="/images/img2.png"
									alt="img-equipe"
									width={1000}
									height={500}
									sizes="100vw"
									style={{
										width: '100%',
										height: 'auto'
									}}
								/>
								<p className="text-gray-500 dark:text-gray-400 text-lg">
									Através de nossas reuniões semanais, trocamos experiências e aprendemos uns com os outros, para que
									possamos sempre melhorar e crescer juntos.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col max-w-screen-xl justify-center mt-1">
						<div className="flex flex-col items-center mb-3">
							<p className="text-white dark:text-white text-2xl font-medium flex flex-col">
								O que nós podemos fazer por você hoje?
							</p>
							<p className="text-white dark:text-white text-3xl font-medium flex flex-col">
								Juntos, vamos conectar seus clientes com suas fábricas.
							</p>
						</div>
						<div className="flex justify-between flex-grow">
							<p className="text-white dark:text-white">
								Nosso sistema foi elaborado para dar agilidade na conversão de negócios em seus clientes, ou seja, o
								necessário, somente o necessário de ações para que você possa focar no que realmente importa: "Atender o
								máximo de clientes possível."<div className="font-sans italic text-xl">e nós fazemos o resto.</div>
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-wrap justify-center p-10 mt-2">
					<div className="flex flex-col w-full items-center mb-3 p-2">
						<div id="comofunc" className="flex p-1 bg-slate-50 w-full">
							<p className="text-zinc-600 dark:text-white text-3xl font-medium flex">Como funciona o SGV</p>
						</div>
						<p className="text-zinc-300 dark:text-white text-3xl font-medium flex mt-4">Dashboard Intuitivo</p>
						<p className="text-zinc-300 dark:text-white text-3xl font-medium flex">
							Você administra de forma visual e em tempo real o desempenho de sua equipe.
						</p>
						<div className="flex flex-col max-w-screen-xl justify-center mt-1">
							<Image src="/images/img-dash-1.png" alt="img-dashboard" width={1000} height={500} />
						</div>
						<a href="#" className="mt-3 text-black dark:text-white hover:text-amber-500 inline-flex items-center">
							Retornar ao topo
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
					
				</div>
				
			</div>
		</>
	);
}
