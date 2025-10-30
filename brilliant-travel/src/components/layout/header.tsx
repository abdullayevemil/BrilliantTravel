import Logo from "@/assets/images/brilliant-travel-logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-[1.125rem] flex flex-row items-center justify-between w-full">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="block">
        <ul className="flex flex-row gap-2 sm:gap-4">
          <li className="px-1 sm:px-2 py-1.5">
            <Link href="/destinations/gobustan-absheron" className="text-navigation text-sm sm:text-base">
              Destinations
            </Link>
          </li>

          <li className="px-1 sm:px-2 py-1.5">
            <Link href="/about" className="text-navigation text-sm sm:text-base">
              About us
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/contact"
        className="bg-white/[0.3] px-3 sm:px-4 py-2 border-border border rounded-full text-sm sm:text-base"
      >
        <span className="hidden sm:inline">Contact Us</span>
        <span className="sm:hidden">Contact</span>
      </Link>
    </header>
  );
}
