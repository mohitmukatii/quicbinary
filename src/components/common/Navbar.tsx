"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if the link is currently active
  const isActive = (path: string) => pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all bg-black/95 border-b border-white/10 duration-300 ${
      scrolled 
        ? 'bg-black/95 border-b border-white/10 py-2 md:py-4' 
        : 'bg-transparent py-3 md:py-5'
    }`}>
        <div className="w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO SECTION - IMAGE ONLY */}
          <Link href="/" className="flex items-center z-50">
            <div className="relative w-[180px] h-[60px] md:w-[250px] md:h-[90px]">
              <Image
                src="/quicbinary logo.png"
                alt="Quicbinary Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-2 md:gap-4">
            <Link 
              href="/about" 
              className={`px-8 md:px-10 py-1 md:py-2 rounded-full text-lg md:text-[25px] transition-all duration-300 ${
                isActive("/about")
                  ? 'bg-[#99CCFF] text-black font-medium' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              About
            </Link>

            <Link 
              href="/services" 
              className={`px-8 md:px-10 py-1 md:py-2 rounded-full text-lg md:text-[25px] transition-all duration-300 ${
                isActive("/services")
                  ? 'bg-[#99CCFF] text-black font-medium' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Services
            </Link>

            <Link 
              href="/work" 
              className={`px-8 md:px-10 py-1 md:py-2 rounded-full text-lg md:text-[25px] transition-all duration-300 ${
                isActive("/work")
                  ? 'bg-[#99CCFF] text-black font-medium' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Work
            </Link>

            <Link 
              href="/say-hello" 
              className={`px-8 md:px-10 py-1 md:py-2 rounded-full text-lg md:text-[25px] transition-all duration-300 ${
                isActive("/say-hello")
                  ? 'bg-[#99CCFF] text-black font-medium' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Say Hello
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20">
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              <Link 
                href="/about" 
                className={`px-10 py-3 rounded-full text-2xl transition-all duration-300 w-48 text-center ${
                  isActive("/about")
                    ? 'bg-[#99CCFF] text-black font-medium' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link 
                href="/services" 
                className={`px-10 py-3 rounded-full text-2xl transition-all duration-300 w-48 text-center ${
                  isActive("/services")
                    ? 'bg-[#99CCFF] text-black font-medium' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              <Link 
                href="/work" 
                className={`px-10 py-3 rounded-full text-2xl transition-all duration-300 w-48 text-center ${
                  isActive("/work")
                    ? 'bg-[#99CCFF] text-black font-medium' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>

              <Link 
                href="/say-hello" 
                className={`px-10 py-3 rounded-full text-2xl transition-all duration-300 w-48 text-center ${
                  isActive("/say-hello")
                    ? 'bg-[#99CCFF] text-black font-medium' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Say Hello
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}