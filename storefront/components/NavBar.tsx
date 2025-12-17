import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/cart", label: "Cart" },
];

export function NavBar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
      <Link
        href="/"
        className="font-display text-xl text-coffee-900 hover:text-coffee-800 transition-colors"
      >
        Kanbulo
      </Link>
      <div className="flex flex-wrap items-center gap-3 text-sm text-coffee-800">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-rose-100/70 bg-white/70 px-3 py-1 shadow-velvet hover:border-rose-200 hover:bg-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
