"use client";

// Import Next
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Import React
import { useCallback, useEffect, useState } from "react";

// Import Styles
import styles from "./styles.module.css";

export default function ProductDetails() {
	// Variables
	const params = useParams();
	const { productId } = params;

	// State
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	// Functions
	const getDetailsByProductId = useCallback(async () => {
		const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
		const data = await res.json();
		setProduct(data);
		setLoading(false);
	}, [productId]);

	// Effects
	useEffect(() => {
		getDetailsByProductId();
	}, [getDetailsByProductId, productId]);

	return (
		<section className={styles.productDetails}>
			<div className="container">
				{/* BAŞLIK */}
				<h1 className={styles.title}>Product Details</h1>

				{/* GERİ DÖN */}
				<div className={styles.backButton}>
					<Link href="/products">← Products</Link>
				</div>

				{loading && <div>Yükleniyor...</div>}

				{product && (
					<div className={styles.detailsWrapper}>
						<div className={styles.left}>
							<Image
								className={styles.productImage}
								src={product?.image}
								alt={product?.title}
								width={1920}
								height={1080}
							/>
						</div>
						<div className={styles.right}>
							<h3 className={styles.productTitle}>{product?.title}</h3>
							<div className={styles.productRating}>
								<span className={styles.rate}>{product?.rating?.rate}</span>
								<span className={styles.count}>({product?.rating?.count})</span>
							</div>
							<div className={styles.productCategory}>
								<span className={styles.category}>
									Category: {product?.category}
								</span>
							</div>

							<p className={styles.productDescription}>
								{product?.description}
							</p>
							<p className={styles.productPrice}>{product?.price} $</p>

							<div className={styles.productButtons}>
								<button className={styles.addToCart}>Add to Cart</button>
								<button className={styles.buyNow}>Buy Now</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
