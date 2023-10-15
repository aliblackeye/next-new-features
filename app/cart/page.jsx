"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";

// Import React
import { useCallback, useEffect, useState } from "react";

// Import Styles
import styles from "./styles.module.css";

export default function Cart() {
	const [cart, setCart] = useState([]);

	const headerColumns = [
		"Photo",
		"Title",
		"Price",
		"Quantity",
		"Total",
		"Actions",
	];

	const bodyColumnItems = [];

	// Functions
	const handleQuantity = useCallback(
		(action, id) => {
			const newCart = [...cart];
			const index = newCart.findIndex((item) => item.id === id);

			if (action === "+") {
				newCart[index].quantity += 1;
			} else if (action === "-") {
				newCart[index].quantity -= 1;
			}

			if (newCart[index].quantity === 0) {
				newCart.splice(index, 1);
			}

			setCart(newCart);
			localStorage.setItem("cart", JSON.stringify(newCart));
		},
		[cart]
	);

	const handleRemoveItem = useCallback(
		(id) => {
			const newCart = [...cart];
			const index = newCart.findIndex((item) => item.id === id);
			newCart.splice(index, 1);
			setCart(newCart);
			localStorage.setItem("cart", JSON.stringify(newCart));
		},
		[cart]
	);

	// Effects
	useEffect(() => {
		const cartStorage = localStorage.getItem("cart") || "[]";
		const cart = JSON.parse(cartStorage);
		setCart(cart);
	}, []);

	return (
		<div className={styles.cart}>
			<div className="container">
				{/* BAŞLIK */}
				<h1 className={styles.title}>Cart</h1>

				{cart.length > 0 ? (
					<div className={styles.cart__container}>
						<div className={styles.cartItems}>
							<div className={styles.tableHead}>
								<div className={styles.tableRow}>
									{headerColumns?.map((item, index) => (
										<div
											key={index}
											className={styles.tableHead__column}>
											{item}
										</div>
									))}
								</div>
							</div>
							<div className={styles.tableBody}>
								{cart?.map((item, index) => (
									<div
										className={styles.cartItem}
										key={index}>
										<div className={styles.tableColumn}>
											<Image
												width={1920}
												height={1080}
												src={item.image}
												className={styles.cartItem__image}
												alt="product"
											/>
										</div>
										<div className={styles.tableColumn}>
											<span className={styles.cartItem__title}>
												{item.title}
											</span>
										</div>
										<div className={styles.tableColumn}>
											<span className={styles.cartItem__price}>
												{item.price} $
											</span>
										</div>
										<div className={styles.tableColumn}>
											<span className={styles.cartItem__quantity}>
												{item.quantity}x
											</span>
										</div>
										<div className={styles.tableColumn}>
											<span className={styles.cartItem__total}>
												{(item.price * item.quantity).toFixed(2)} $
											</span>
										</div>
										<div className={styles.tableColumn}>
											<div className={styles.cartItem__actions}>
												<span className={`${styles.actionButton} ${styles.actionButton__plus}`} onClick={() => handleQuantity("+", item.id)}>
													+
												</span>
												<span className={`${styles.actionButton} ${styles.actionButton__minus}`} onClick={() => handleQuantity("-", item.id)}>
													-
												</span>
												<span
													onClick={() => handleRemoveItem(item.id)}
													className={styles.cartItem__remove}>
													Kaldır
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className={styles.total}>
							<span className={styles.total__text}>Total</span>
							<span className={styles.total__price}>
								{cart?.reduce(
									(acc, item) => acc + item.price * item.quantity,
									0
								).toFixed(2)}
								$
							</span>
						</div>
					</div>
				) : (
					<div className={styles.emptyCart}>
						<span>Your cart is empty</span>
						<Link
							href="/products"
							className={styles.emptyCart__button}>
							Go to products
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
