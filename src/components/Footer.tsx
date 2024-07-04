import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <footer className="bg-gray-900 py-6 text-gray-300 text-sm/relaxed dark:bg-gray-50 dark:text-gray-900">
      <div className="container grid gap-4 px-4 items-center justify-center text-center md:px-6 lg:grid-cols-3 lg:justify-between lg:gap-8">
        <div className="space-y-2">
          <Link className="inline-block font-bold" href="#">
            Food Truck Catering Company
          </Link>
          <p className="text-xs">©2024 NV Hospitality. All rights reserved.</p>
        </div>
        <nav className="flex flex-col gap-2 order-3 text-sm justify-center lg:gap-4 lg:order-2 lg:text-base xl:gap-2">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Our Concepts
          </Link>
          <Link className="hover:underline" href="#">
            Our Fleet
          </Link>
          <Link className="hover:underline" href="#">
            FAQ
          </Link>
          <Link className="hover:underline" href="#">
            Testimonials
          </Link>
          <Link className="hover:underline" href="#">
            Marketing
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}

