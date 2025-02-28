import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="p-2">
      <h1>Hello {session && <strong>{session.user!.name}</strong>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
