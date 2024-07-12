import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roaming Kitchen",
  description: "Serving up delicious, freshly-prepared meals on the go.",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full h-screen relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Roaming Kitchen
              </h1>
              <p className="max-w-[600px] md:text-xl">
                Serving up delicious, freshly-prepared meals on the go.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-7"
              prefetch={false}
            >
              View Menu
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
