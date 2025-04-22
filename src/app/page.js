import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="debug-nav">
        <Link href="/catalogue">Catalogue</Link>
      </div>
    </>
  );
}
