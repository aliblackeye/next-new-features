import Image from "next/image";

import styles from "./styles.module.css";

export default function ProductCard({ product }) {
	return (
		<div className={styles.productCard}>
			<div className={styles.productTop}>
				<Image
					className={styles.productImg}
					src={product.image}
					alt={product.title}
					width={1920}
					height={1080}
				/>
			</div>

			<div className={styles.productBottom}>
				<h3 className={styles.productTitle}>{product.title}</h3>
				<p className={styles.productPrice}>{product.price} $</p>
				<div className={styles.productRating}>
					<span className={styles.rate}>{product.rating.rate}</span>
					<span className={styles.count}>({product.rating.count})</span>
				</div>
			</div>
		</div>
	);
}
