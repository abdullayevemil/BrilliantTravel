import Logo from "@/assets/images/brilliant-travel-logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-24 py-[18] flex flex-row items-center justify-between w-screen">
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex flex-row gap-4">
          <li className="px-2 py-1.5">
            <Link href="/destinations" className="text-navigation text-base">
              Destinations
            </Link>
          </li>

          <li className="px-2 py-1.5">
            <Link href="/gallery" className="text-navigation text-base">
              Gallery
            </Link>
          </li>

          <li className="px-2 py-1.5">
            <Link href="/about" className="text-navigation text-base">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/contact"
        className="bg-white/[0.3] px-4 py-2 border-border border rounded-full text-base"
      >
        Contact us
      </Link>
    </header>
  );
}
