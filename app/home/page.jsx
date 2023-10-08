import Link from "next/link";

export default function Home() {
	return (
		<div className="container">
			<Link href="/products">Products →</Link>
		</div>
	);
}
