import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <Link href="/" className="text-sm text-black/70 hover:text-black">
        ← Back to Home
      </Link>

      <div className="mt-24 flex flex-col items-center text-center">
        <p className="text-6xl">🚧</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-black/60">
          This page is under construction. Check back soon.
        </p>
      </div>
    </main>
  );
}
