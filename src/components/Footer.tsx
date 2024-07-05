import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col gap-2 sm:flex-row items-center">
        <p className="text-xs">&copy; 2024 Roaming Kitchen. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}