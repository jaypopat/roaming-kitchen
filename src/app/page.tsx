import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Countdown from "@/components/CountDown";
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
        >
          <source src="/slideshow.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black/70 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <Image
              height={300}
              width={300}
              src="/logo.png"
              alt="Roaming Kitchen Logo"
              className="mx-auto animate-pulse"
            />
            <Link
              href="/menu"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-8 text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-300"
              prefetch={false}
            >
              Menu
            </Link>
            <div className="mt-12 max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
