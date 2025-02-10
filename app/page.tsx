import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-2">
      <h1>THIS IS THE MAIN PAGE</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
