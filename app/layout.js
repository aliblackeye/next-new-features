// Fonts
import { Inter } from "next/font/google";

// Layouts
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// Global styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next Store | Ecommerce Store",
	description: "An ecommerce store built with Next.js.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
				<Footer/>
			</body>
		</html>
	);
}
