import Link from "next/link";
import { Github, Globe, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border py-12">
            <div className="mx-auto max-w-6xl px-4">

                {/* GRID */}
                <div className="grid gap-12 sm:grid-cols-3 text-center sm:text-left">

                    {/* Brand */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h3 className="text-lg font-semibold">DevPlay</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            A modern playground for building and experimenting in real-time.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h4 className="font-medium">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/playground"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Playground
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/challenges"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Challenges
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Developed by */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h4 className="font-medium">Developed by <span className="text-primary">Aaron Matarrita</span></h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com/AaronMatarrita"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/aaron-matarrita-portuguez-859740335/"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                                >
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://portfolio-aaron-matarrita.vercel.app/"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                                >
                                    <Globe size={16} /> Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DevPlay — All rights reserved.
                </div>

            </div>
        </footer>
    );
}
