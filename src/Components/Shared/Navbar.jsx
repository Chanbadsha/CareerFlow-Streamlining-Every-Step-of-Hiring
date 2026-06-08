"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import NavLink from "@/utils/NavLink";
import { ThemeSwitch } from "@/utils/ThemeSwitch";
const navMenu = [
  { path: "/", label: "Home" },
  { path: "/jobs", label: "Browse Jobs" },
  {
    path: "/companies",
    label: "Companies",
  },
  {
    path: "/pricing",
    label: "Pricing ",
  },
];
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <h1 className="font-bold text-2xl lg:text-3xl ">CAREERFLOW</h1>
          </div>
        </div>
        <ul className="hidden items-center gap-2 md:flex">
          {navMenu.map((navLink, ind) => (
            <NavLink key={ind} navLink={navLink} />
          ))}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#">Login</Link>
          <ThemeSwitch />
          <Button>Sign Up</Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navMenu.map((navLink, ind) => (
              <NavLink key={ind} navLink={navLink} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
