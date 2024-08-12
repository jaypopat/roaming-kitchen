import Image from "next/image";
import Link from "next/link";
export default function Header() {
  interface LinkProps {
    name: string;
    href: string;
  }
  const links: LinkProps[] = [
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Live Counter",
      href: "/live-counter",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Chef",
      href: "/chef",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground z-50">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image height={80} width={80} src="/logo.png" alt="" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
