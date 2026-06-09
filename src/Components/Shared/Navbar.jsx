"use client";
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import NavLink from "@/utils/NavLink";
import { ThemeSwitch } from "@/utils/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { LayoutDashboard, LogOut } from "lucide-react";
import Loading from "@/utils/Loading";
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
  const [open, setOpen] = useState(false);

  const { data: session, isPending, error, refetch } = authClient.useSession();
  if (isPending) {
    return <Loading></Loading>;
  }
  const user = session?.user;

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
          <ThemeSwitch />
          {user ? (
            <>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="rounded-full transition-transform duration-200 hover:scale-105"
                >
                  <Avatar className="ring-2 ring-border hover:ring-primary/30 transition-all">
                    <Avatar.Image
                      alt="Profile"
                      src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                    />
                    <Avatar.Fallback>SR</Avatar.Fallback>
                  </Avatar>
                </button>

                {open && (
                  <ul className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl animate-in fade-in zoom-in-95 duration-200">
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                        onClick={() => {
                          setValue("userRole", "job-seeker");
                          setOpen(false);
                        }}
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted text-danger"
                        onClick={() => {
                          setValue("userRole", "recruiter");
                          setOpen(false);
                        }}
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">Sign Up</Link>
            </>
          )}
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
