"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, Download, FileCode2 } from 'lucide-react'
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
        <div className="flex flex-wrap justify-between items-center gap-3 px-4 py-3 bg-[#252526] border-b border-[#3e3e42] shadow-sm">

            <div className="flex items-center gap-3">

                <Tabs value={file} onValueChange={setFile}>
                    <TabsList className="bg-[#1e1e1e] border border-[#3e3e42]">
                        <TabsTrigger
                            value="html"
                            className="data-[state=active]:bg-[#37373d] data-[state=active]:text-[#4fc3f7] hover:cursor-pointer"
                        >
                            HTML
                        </TabsTrigger>
                        <TabsTrigger
                            value="css"
                            className="data-[state=active]:bg-[#37373d] data-[state=active]:text-[#4fc3f7] hover:cursor-pointer"
                        >
                            CSS
                        </TabsTrigger>
                        <TabsTrigger
                            value="js"
                            className="data-[state=active]:bg-[#37373d] data-[state=active]:text-[#4fc3f7] hover:cursor-pointer"
                        >
                            JS
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 p-1 bg-[#1e1e1e] border border-[#3e3e42] rounded-md">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("mobile")}
                        className={`h-8 w-8 transition-all ${deviceActive("mobile")
                                ? "bg-[#37373d] text-white"
                                : "text-[#cccccc] hover:text-white hover:bg-[#2a2a2a]"
                            }`}
                        title="Mobile (375px)"
                    >
                        <Smartphone size={16} />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("tablet")}
                        className={`h-8 w-8 transition-all ${deviceActive("tablet")
                                ? "bg-[#37373d] text-[#4fc3f7]"
                                : "text-[#cccccc] hover:text-white hover:bg-[#2a2a2a]"
                            }`}
                        title="Tablet (768px)"
                    >
                        <Tablet size={16} />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDevice("desktop")}
                        className={`h-8 w-8 transition-all ${deviceActive("desktop")
                                ? "bg-[#37373d] text-[#4fc3f7]"
                                : "text-[-[#cccccc] hover:text-white hover:bg-[#2a2a2a]"
                            }`}
                        title="Desktop (100%)"
                    >
                        <Monitor size={16} />
                    </Button>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadZip}
                    className="flex items-center gap-2 bg-[#1e1e1e] border-[#3e3e42] text-[#cccccc] hover:bg-[#2a2a2a] hover:text-white hover:border-[#4fc3f7]"
                >
                    <Download size={14} />
                    <span className="hidden sm:inline">Export</span>
                </Button>
            </div>
        </div>
    )
}
