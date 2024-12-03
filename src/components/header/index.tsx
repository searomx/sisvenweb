'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export function Header() {
	const [top, setTop] = useState(true);
	const scrollHandler = () => {
		window.scrollY > 10 ? setTop(false) : setTop(true);
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, [top]);
	return (
		<header className={`w-full h-24 fixed z-99 border border-b-slate-200 ${!top ? 'fixarTop' : 'fundoScroll'}`}>
			<div className="flex max-w-[1280px] m-auto py-0 px-3.5">
				<div className="flex w-full py-4 px-0 items-center justify-between">
					<div className="hidden justify-center sm:flex">
						<Link href="/">
							<Image src="/images/logo_sgv.png" width={70} height={70} alt="Logo" />
						</Link>
					</div>
					<nav className="nav">
						<Link className="text-slate-950" href="/">
							Home
						</Link>
						<Link href="/#about">About</Link>
						<Link href="/#contact">Contact</Link>
						<Link href="/#products">Products</Link>
						<Link href="/#blog">Blog</Link>
						<Link href="/#faq">FAQ</Link>
						<Link href="/#help">Help</Link>
						<Link href="/#terms">Terms</Link>
						<Link href="/#privacy">Privacy</Link>
						<Link href="/#cookie-policy">Cookie Policy</Link>
					</nav>
				</div>
			</div>

			<div className="flex max-w-[1280px] m-96 py-10 px-3.5 z-50">
				<h1 className="text-4xl font-bold text-center">Welcome to Our Website</h1>
				<p className="text-center text-sm text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sagittis neque.
				</p>
			</div>
		</header>
	);
}
