import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { AuthProvider } from '@/providers/auth-provider';

export const metadata: Metadata = {
	title: '::: SGV - Sistema de Gerenciamento de Vendas :::',
	description: 'Sistema para gerenciamento de vendas'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthProvider>
			<html lang="pt-br" suppressHydrationWarning={true}>
				<body className="items-center justify-center">
					<Header />
					{/* <div className="flex w-full bg-lime-300 h-1/3 ">
						<img src="/images/home.png" alt="imagem home" className="m-auto w-full h-96" />
					</div> */}
					<div className="flex justify-center items-center">{children}</div>
				</body>
			</html>
		</AuthProvider>
	);
}
