import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import { AuthProvider } from '@/providers/auth-provider';
import { Header } from '@/components/header';
import NavBarLateral from '@/components/NavBarLateral';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'SGV - Sistema de Gestão de Vendas',
	description: 'App Gestor de Vendas'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" suppressHydrationWarning={true}>
			<body cz-shortcut-listen="true" className={`${geistSans.variable} ${geistMono.variable} font-sans bg-gray-900`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<AuthProvider>
						<Header />
						<NavBarLateral />
						{children}
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
