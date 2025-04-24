import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="debug-nav">
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/info">Info</Link>
      </div>
    </>
  );
}
