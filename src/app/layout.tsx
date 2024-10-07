import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

const CourierPrime = localFont({
	src: './fonts/CourierPrime-Regular.ttf',
	variable: '--font-courier-prime',
	weight: '100 400',
});

const Typewriter = localFont({
	src: './fonts/Typewriter.ttf',
	variable: '--font-typewriter',
	weight: '100 400',
});

export const metadata: Metadata = {
	title: 'World\'s Book',
	description: 'Written by the World for the World',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${CourierPrime.variable} ${Typewriter.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
