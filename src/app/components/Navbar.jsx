"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-8 w-full text-lg">
      <Link
        href="#projects"
        className="transition-all duration-300 hover:scale-110 hover:text-green-500"
      >
        Projects
      </Link>
      <Link
        href="https://www.linkedin.com/in/efe-celik/"
        target="_blank"
        className="transition-all duration-300 hover:scale-110 hover:text-green-500"
      >
        Contact
      </Link>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-110 hover:text-green-500"
      >
        Resume
      </Link>
    </nav>
  );
}
