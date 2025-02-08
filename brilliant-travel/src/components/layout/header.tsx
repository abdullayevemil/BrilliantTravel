import Logo from "@/assets/images/brilliant-travel-logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-24 py-[18] flex flex-row items-center justify-between">
      <Logo />

      <nav>
        <ul className="flex flex-row gap-4">
          <li className="px-2 py-1.5">
            <Link href="/destinations" className="text-navigation">Destinations</Link>
          </li>

          <li className="px-2 py-1.5">
            <Link href="/gallery" className="text-navigation">Gallery</Link>
          </li>

          <li className="px-2 py-1.5">
            <Link href="/about" className="text-navigation">About</Link>
          </li>
        </ul>
      </nav>

      <Link href="/contact" className="px-4 py-2 border-border border rounded-full">Contact us</Link>
    </header>
  );
}
