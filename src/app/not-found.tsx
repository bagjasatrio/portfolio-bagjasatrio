import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-8xl md:text-9xl font-bold text-accent/20 select-none">
          404
        </h1>
        <p className="mt-4 font-display text-xl md:text-2xl font-semibold text-text-primary">
          Page not found
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
