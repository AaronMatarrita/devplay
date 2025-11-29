"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Code } from "lucide-react"

export function Navbar() {
    return (
        <header className="w-full border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
                <Link href="/" className="flex gap-2 items-center text-lg font-semibold">
                    <Code size={20} className="bg-primary border-border p-1"/>
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
