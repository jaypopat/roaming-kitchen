import Image from "next/image"
import Link from "next/link"
export default function Header(){
    return(
        <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground z-50">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image height={80} width={80} src="/logo.png" alt="" />
          <span className="text-2xl font-bold">Roaming Kitchen</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/menu" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Menu
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/chef" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Chef
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    )
} 