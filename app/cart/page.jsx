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
						<table className={styles.cartItems}>
							<thead>
								<tr>
									<th>Photo</th>
									<th>Title</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{cart?.map((item, index) => (
									<tr
										key={index}
										className={styles.cartItem}>
										<td>
											<Image
												width={1920}
												height={1080}
												src={item.image}
												className={styles.cartItem__image}
												alt="product"
											/>
										</td>
										<td>
											<span className={styles.cartItem__title}>
												{item.title}
											</span>
										</td>
										<td>
											<span className={styles.cartItem__price}>
												{item.price} $
											</span>
										</td>
										<td>
											<span className={styles.cartItem__quantity}>
												{item.quantity}x
											</span>
										</td>
										<td>
											<span className={styles.cartItem__total}>
												{item.price * item.quantity} $
											</span>
										</td>
										<td>
											<div className={styles.cartItem__actions}>
												<span onClick={() => handleQuantity("+", item.id)}>
													+
												</span>
												<span onClick={() => handleQuantity("-", item.id)}>
													-
												</span>
												<span
													onClick={() => handleRemoveItem(item.id)}
													className={styles.cartItem__remove}>
													Kaldır
												</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className={styles.total}>
							<span className={styles.total__text}>Total</span>
							<span className={styles.total__price}>
								{cart?.reduce(
									(acc, item) => acc + item.price * item.quantity,
									0
								)}
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
