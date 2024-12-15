import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { AuthProvider } from '@/providers/auth-provider';
import NavBarLateral from '../components/NavBarLateral';

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
					<NavBarLateral />

					<div className="flex justify-center items-center">{children}</div>
				</body>
			</html>
		</AuthProvider>
	);
}
