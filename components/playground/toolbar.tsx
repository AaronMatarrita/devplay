"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, Download } from "lucide-react"
import JSZip from "jszip"
import { saveAs } from "file-saver"

export function PlaygroundToolbar({ file, setFile, device, setDevice, html, css, js }: any) {
    const downloadZip = async () => {
        const zip = new JSZip()
        zip.file("index.html", html)
        zip.file("style.css", css)
        zip.file("script.js", js)
        const blob = await zip.generateAsync({ type: "blob" })
        saveAs(blob, "devplay-project.zip")
    }

    const deviceActive = (deviceType: string) => device === deviceType

    return (
        <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-3 glass-minimal shadow-panel border-b border-border/50">
            <div className="flex items-center gap-3">
                <Tabs value={file} onValueChange={setFile}>
                    <TabsList className="bg-muted/80 rounded-xl p-1 shadow-sm border border-border/50">
                        <TabsTrigger
                            value="html"
                            className="rounded-lg px-4 font-medium text-sm transition-smooth hover:cursor-pointer data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                        >
                            HTML
                        </TabsTrigger>
                        <TabsTrigger
                            value="css"
                            className="rounded-lg px-4 font-medium text-sm transition-smooth hover:cursor-pointer data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                        >
                            CSS
                        </TabsTrigger>
                        <TabsTrigger
                            value="js"
                            className="rounded-lg px-4 font-medium text-sm transition-smooth hover:cursor-pointer data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                        >
                            JS
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 p-1 bg-muted/80 rounded-xl shadow-sm border border-border/50">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("mobile")}
                        className={`h-8 w-8 transition-smooth rounded-lg ${deviceActive("mobile") ? "bg-background text-primary shadow-sm" : "hover:bg-background/50"}`}
                        title="Mobile (375px)"
                    >
                        <Smartphone size={16} />
                    </Button>
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("tablet")}
                        className={`h-8 w-8 transition-smooth rounded-lg ${deviceActive("tablet") ? "bg-background text-primary shadow-sm" : "hover:bg-background/50"}`}
                        title="Tablet (768px)"
                    >
                        <Tablet size={16} />
                    </Button> */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("desktop")}
                        className={`h-8 w-8 transition-smooth rounded-lg ${deviceActive("desktop") ? "bg-background text-primary shadow-sm" : "hover:bg-background/50"}`}
                        title="Desktop (100%)"
                    >
                        <Monitor size={16} />
                    </Button>
                </div>

                <Button
                    onClick={downloadZip}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 rounded-lg shadow-sm hover:bg-primary hover:text-primary-foreground transition-smooth bg-transparent"
                >
                    <Download size={14} />
                    <span className="hidden sm:inline font-medium">Export</span>
                </Button>
            </div>
        </div>
    )
}
