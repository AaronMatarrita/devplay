"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
    return (
        <header className="w-full border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold">
                    DevPlay
                </Link>

                <nav className="flex items-center gap-6 text-sm">
                    <Link href="/playground">Playground</Link>
                    <Link href="/challenges">Challenges</Link>
                    <a href="https://github.com" target="_blank">GitHub</a>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    )
}
