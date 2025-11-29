import Link from "next/link"
import { Github, Globe, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full h-px bg-border/50 mb-12" />

            <div className="mx-auto max-w-6xl px-6 pb-12">
                <div className="grid gap-12 sm:grid-cols-3 text-center sm:text-left">
                    {/* Brand */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h3 className="text-lg font-semibold text-primary">DevPlay</h3>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            A modern playground for building and experimenting in real-time.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h4 className="font-medium text-foreground">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/playground" className="text-muted-foreground hover:text-primary transition-smooth">
                                    Playground
                                </Link>
                            </li>
                            <li>
                                <Link href="/challenges" className="text-muted-foreground hover:text-primary transition-smooth">
                                    Challenges
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-smooth"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Developed by */}
                    <div className="flex flex-col gap-3 items-center sm:items-start mx-auto sm:mx-0">
                        <h4 className="font-medium text-foreground">
                            <a href="https://portfolio-aaron-matarrita.vercel.app/">
                                Developed by <span className="text-primary font-semibold transition hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200">Aaron Matarrita</span>
                            </a>
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com/AaronMatarrita"
                                    target="_blank"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                                    rel="noreferrer"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/aaron-matarrita-portuguez-859740335/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                                    rel="noreferrer"
                                >
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DevPlay
                </div>
            </div>
        </footer>
    )
}
