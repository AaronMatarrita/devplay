"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Code } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full sticky top-0 z-50 transition-smooth ${scrolled
                    ? "backdrop-blur-xl bg-background/70 shadow-lg border-b border-border/40"
                    : "bg-transparent shadow-none"
                }`}
        >
            <div className="mx-auto max-w-6xl h-14 px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex gap-2 items-center text-lg font-semibold group transition-smooth"
                >
                    <div className="bg-primary p-1.5 rounded-lg shadow-sm group-hover:shadow-md transition-smooth">
                        <Code size={18} className="text-primary-foreground" />
                    </div>
                    <span
                        className="relative inline-block bg-linear-to-r from-foreground to-primary bg-size-[200%_100%] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-position-[-100%_0]"
                    >
                        DevPlay
                    </span>
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/playground"
                        className="transition hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    >
                        Playground
                    </Link>
                    <Link
                        href="/challenges"
                        className="transition-smooth hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                    >
                        Challenges
                    </Link>
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="transition-smooth hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    )
}
