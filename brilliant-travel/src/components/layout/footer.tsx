import Logo from "@/assets/images/brilliant-travel-logo.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import FacebookIcon from "@/assets/icons/Facebook.svg";
import InstagramIcon from "@/assets/icons/Instagram.svg";
import XIcon from "@/assets/icons/X.svg";
import LinkedinIcon from "@/assets/icons/LinkedIn.svg";

export default function Footer() {
  return (
    <footer className="px-24 pt-14 pb-6 flex flex-col gap-[4.5rem] w-full bg-footerBg">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Logo />
          </Link>

          <div className="text-xl text-navigation">
            Live your best memories with us
          </div>
        </div>

        <div className="flex flex-row gap-[4rem]">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-[1.75rem]">Tours</div>

            <div className="flex flex-col gap-2">
              <Link
                href="/destinations/gobustan-absheron"
                className="text-lg text-navigation"
              >
                Gobustan & Absheron trip
              </Link>

              <Link
                href="/destinations/baku-city"
                className="text-lg text-navigation"
              >
                Baku city tour
              </Link>

              <Link
                href="/destinations/guba-shahdag"
                className="text-lg text-navigation"
              >
                Guba & Shahdag tour
              </Link>

              <Link
                href="/destinations/gabala-shamakhi"
                className="text-lg text-navigation"
              >
                Gabala & Shamakhi tour
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold text-[1.75rem]">Company</div>

          <div className="flex flex-col gap-2">
            <Link href="/destinations" className="text-lg text-navigation">
              Destinations
            </Link>

            <Link href="/destinations" className="text-lg text-navigation">
              Gallery
            </Link>

            <Link href="/about" className="text-lg text-navigation">
              About us
            </Link>

            <Link href="/contact" className="text-lg text-navigation">
              Contact us
            </Link>
            
            <Link
              href="/terms-of-service"
              className="text-navigation text-base"
            >
              Terms of Service
            </Link>

            <Link href="/privacy-policy" className="text-navigation text-base">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold text-[1.75rem]">Contact us</div>

          <div className="flex flex-col gap-2">
            <div className="text-lg text-navigation flex flex-row gap-4 items-center">
              <MapPin />

              <p>Tbilisi avenue Baku</p>
            </div>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+994 50 256 15 19"
              className="text-lg text-navigation flex flex-row gap-4 items-center"
            >
              <Phone />

              <span>+994 50 256 15 19</span>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@brilliant.travel.az"
              className="text-lg text-navigation flex flex-row gap-4 items-center"
            >
              <Mail />

              <span>info@brilliant.travel.az</span>
            </Link>

            <div className="flex flex-row gap-4">
              <Link href="">
                <FacebookIcon />
              </Link>

              <Link href="">
                <InstagramIcon />
              </Link>

              <Link href="">
                <XIcon />
              </Link>

              <Link href="">
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="tetx-sm text-footer">
        © 2025 Brilliant Travel. All rights are recivied
      </div>
    </footer>
  );
}
