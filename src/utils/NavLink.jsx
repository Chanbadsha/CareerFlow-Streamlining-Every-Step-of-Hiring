"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navLink }) => {
  const path = usePathname();
  const isActive = path === navLink?.path;

  return (
    <li>
      <Link
        href={`${navLink?.path}`}
        className={`block py-2 text-inter px-3 hover:bg-primary hover:text-white    rounded-2xl ${isActive ? "bg-primary text-white" : ""}`}
      >
        {navLink?.label}
      </Link>
    </li>
  );
};

export default NavLink;
