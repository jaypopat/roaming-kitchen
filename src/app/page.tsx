import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import NewsletterSignup from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Roaming Kitchen",
  description: "Serving up delicious, freshly-prepared meals on the go.",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 relative overflow-hidden">
        <video
          className="w-full h-full object-cover absolute inset-0 z-10"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video showcasing Roaming Kitchen"
        >
          <source src="/slideshow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 flex flex-col items-center justify-between min-h-screen px-4 text-center bg-black/60 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <Image
              height={200}
              width={200}
              src="/logo.png"
              alt="Roaming Kitchen Logo"
              className="mx-auto animate-pulse"
            />

            <header>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Delicious Meals on the Go
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-2">
                Experience gourmet street food like never before
              </p>
            </header>
            <section>
              <Link
                href="/menu"
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-red-600 px-6 md:px-10 text-base md:text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                prefetch={false}
              >
                View Our Menu
              </Link>
            </section>
          </div>
          <div className="w-full max-w-md mx-auto mt-8 md:mt-12">
            <div className="bg-black/40 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl border border-white/10">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
