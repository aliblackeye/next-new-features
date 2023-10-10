// Import Next
import Image from "next/image";

import styles from "./styles.module.css";

export default function Cart() {
	// Variables
	const cart = [
		{
			id: 1,
			name: "Product 1",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			price: 100,
			quantity: 1,
		},
		{
			id: 2,
			name: "Product 2",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			price: 100,
			quantity: 1,
		},
		{
			id: 3,
			name: "Product 3",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			price: 100,
			quantity: 1,
		},
		{
			id: 4,
			name: "Product 4",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			price: 100,
			quantity: 1,
		},
	];

	return (
		<div className={styles.cart}>
			<div className="container">
				
				{/* BAŞLIK */}
				<h1 className={styles.title}>Cart</h1>

				<div className={styles.cart__container}>
					<div className={styles.cartItems}>
						{cart?.map((item, index) => (
							<div
								key={index}
								className={styles.cartItem}>
								<div className={styles.cartItem__left}>
									<Image
										width={1920}
										height={1080}
										src={item.image}
										className={styles.cartItem__image}
										alt="product"
									/>
									<span className={styles.cartItem__name}>{item.name}</span>
								</div>
								<div className={styles.cartItem__right}>
									<span className={styles.cartItem__price}>{item.price} $</span>

									<span className={styles.cartItem__quantity}>
										{item.quantity}x
									</span>
									<div className={styles.cartItem__actions}>
										<span>+</span>
										<span>-</span>
										<span className={styles.cartItem__remove}>Kaldır</span>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className={styles.total}>total</div>
				</div>
			</div>
		</div>
	);
}
