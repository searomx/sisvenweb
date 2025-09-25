import Link from 'next/link';
import Image from 'next/image';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { SignOutButton } from './sign-out-button';
import { getServerSession } from 'next-auth';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	// { name: 'Privada', href: '/private', current: false },
	// { name: 'Publica', href: '/', current: false },
	{ name: 'Planos', href: '/public/commons/pricing', current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Header = async () => {
	const session = await getServerSession();
	return (
		<Disclosure as="nav" className="bg-gray-800 shadow-md fixed w-full top-0 z-50">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-14 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Abrir Menu Principal</span>
							<Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
							<XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
						</DisclosureButton>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex shrink-0 items-center relative">
							<img alt="LogoMarca" src="/images/logo_sgv.png" className="h-14 w-auto top-0 left-0 absotule" />
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4 py-5">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? 'page' : undefined}
										className={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'rounded-md px-3 py-2 text-sm font-medium'
										)}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							type="button"
							className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<UserIcon aria-hidden="true" className="size-6" />
						</button>
						<div className="flex items-center justify-end ml-2">
							<Link href="/login">
								<span className="text-lg font-semibold text-zinc-300">Área do cliente</span>
							</Link>
						</div>
						{session && (
							<li>
								<SignOutButton>sair</SignOutButton>
							</li>
						)}
					</div>
				</div>
			</div>

			<DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pb-3 pt-2">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? 'page' : undefined}
							className={classNames(
								item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'block rounded-md px-3 py-2 text-base font-medium'
							)}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
};
export { Header };
