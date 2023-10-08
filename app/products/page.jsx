"use client";

// Import Next
import Link from "next/link";

// Import React
import { useState, useEffect } from "react";

// Import Partials
import ProductCard from "./ProductCard";

// Import Styles
import styles from "./styles.module.css";

export default function Products() {
	// States
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	// Functions
	const fetchProducts = async () => {
		const res = await fetch("https://fakestoreapi.com/products");
		const data = await res.json(); // Gelen veriyi json formatına çevirir
		setProducts(data); // Ürünleri state'e atar
		setLoading(false); // Yükleniyor durumunu kapatır
	};

	// Effects
	useEffect(() => {
		// Sayfa ilk yüklendiğinde çalışır ve ürünleri çeker
		fetchProducts();
	}, []);

	return (
		<section className={styles.productPage}>
			<div className="container">
				{/* GERİ DÖN */}
				<div className={styles.backButton}>
					<Link href="/">← Home</Link>
				</div>

				{/* BAŞLIK */}
				<h1 className={styles.title}>Products</h1>

				{/* YÜKLENİYOR */}
				{loading && <div className="loading">Loading...</div>}

				{/* ÜRÜNLER LİSTESİ */}
				<div className={styles.productList}>
					{products?.map((p, index) => (
						<Link
							key={index}
							href={`products/${p.id}`}>
							<ProductCard
								key={index}
								product={p}
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
