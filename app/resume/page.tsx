import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/ResumeWebsite" : "";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Resume</h1>

        <div className="flex gap-3">
          {/* Opens the raw image in a new tab */}
          <a
            href={`${basePath}/resume.jpg`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
          >
            Open full size
          </a>

        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white/90 shadow-sm">
        <Image
          src="/resume.jpg"
          alt="Resume"
          width={1700}
          height={2200}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="mt-8">
        <Link href="/" className="text-sm text-black/70 hover:text-black">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
