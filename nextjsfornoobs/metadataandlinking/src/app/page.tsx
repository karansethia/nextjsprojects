import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/blogs/123?lang=en'>English Blog</Link>
      <Link href='/blogs/679?lang=fr'>French blog</Link>
    </div>
  );
}
