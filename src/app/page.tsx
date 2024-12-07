'use client';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="w-full max-w-screen-xl h-full flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-white/30">
			<div className="flex w-full flex-wrap justify-center p-10 mt-2">
				<div className="p-4 max-w-sm ">
					<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
						<div className="flex items-center mb-3">
							<h2 className="text-white dark:text-white text-lg font-medium">Work Team</h2>
						</div>
						<div className="flex flex-col justify-between flex-grow">
							<Image src="/images/work-team.png" alt="img-team" width={1000} height={500} />
							<p className="text-gray-500 dark:text-gray-400 text-lg">
							Nossas equipe é composta por jovens talentosos tanto no desenvolvimento de novas idéias quanto no relacionamento com o cliente.
							Fazemos a diferença.</p>
							<a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="p-4 max-w-sm">
				<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
						<div className="flex items-center mb-3">
							<h2 className="text-white dark:text-white text-lg font-medium">Work Team</h2>
						</div>
						<div className="flex flex-col justify-between flex-grow">
							<Image src="/images/team.png" alt="img-team" width={1000} height={500} />
							<p className="text-gray-500 dark:text-gray-400 text-lg">
							A todo momento estamos discutindo novas tecnologias para estar sempre atualizados fazendo com que nossos clientes estejam sempre na vanguarda a seu favor.</p>
							<a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="p-4 max-w-sm">
					<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
						<div className="flex items-center mb-3">
							<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<h2 className="text-white dark:text-white text-lg font-medium">Feature 3</h2>
						</div>
						<div className="flex flex-col justify-between flex-grow">
							<p className="leading-relaxed text-base text-white dark:text-gray-300">
								Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis
								iure ut laborum inventore et maxime amet.
							</p>
							<a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
