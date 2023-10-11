"use client";

// Import Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import Styles
import styles from "./styles.module.css";

export default function Header() {
	// Variables
	const activePage = usePathname();

	const brand = "Next Store";
	const links = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Products",
			href: "/products",
		},
		{
			label: "Cart",
			href: "/cart",
		},
	];

	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<div className={styles.left}>
					<Link
						href={"/"}
						className={styles.brand}>
						{brand}
					</Link>
				</div>
				<div className={styles.right}>
					<nav className={styles.nav}>
						{links.map((link, index) => (
							<Link
								href={link.href}
								key={index}
								className={activePage === link.href ? styles.active : ""}>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
}
