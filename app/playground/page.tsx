"use client"

import { type SetStateAction, useState } from "react"
import { PlaygroundEditor } from "@/components/playground/editor"
import { PlaygroundPreview } from "@/components/playground/preview"
import { PlaygroundPanels } from "@/components/playground/panels"
import { PlaygroundToolbar } from "@/components/playground/toolbar"
import { PlaygroundConsole } from "@/components/playground/console"
import { useIsMobile } from "@/hooks/use-mobile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Globe, Terminal } from "lucide-react"

export default function PlaygroundPage() {
    const [file, setFile] = useState("html")
    const [html, setHtml] = useState("<h1>Hello DevPlay</h1>\n<p>Start coding!</p>")
    const [css, setCss] = useState("h1 { color: orange; }\np { color: #666; }")
    const [js, setJs] = useState("console.log('DevPlay ready!')")
    const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop")
    const [consoleMessages, setConsoleMessages] = useState<any[]>([])
    const [mobileView, setMobileView] = useState<"editor" | "preview" | "console">("editor")

    const isMobile = useIsMobile()

    const handleConsoleMsg = (msg: any) => {
        setConsoleMessages((prev) => [...prev, { ...msg, timestamp: new Date() }])
    }

    const clearConsole = () => setConsoleMessages([])

    const editorContent = (
        <PlaygroundEditor
            code={file === "html" ? html : file === "css" ? css : js}
            language={file === "html" ? "html" : file === "css" ? "css" : "javascript"}
            onChange={(val: SetStateAction<string>) =>
                file === "html" ? setHtml(val) : file === "css" ? setCss(val) : setJs(val)
            }
        />
    )

    const previewContent = (
        <PlaygroundPreview html={html} css={css} js={js} device={device} onConsole={handleConsoleMsg} />
    )

    const consoleContent = <PlaygroundConsole messages={consoleMessages} onClear={clearConsole} />

    return (
        <div className="h-screen flex flex-col bg-playground-bg text-foreground">
            <PlaygroundToolbar
                file={file}
                setFile={setFile}
                device={device}
                setDevice={setDevice}
                html={html}
                css={css}
                js={js}
            />

            <div className="flex-1 min-h-0 overflow-hidden">
                {isMobile ? (
                    <Tabs value={mobileView} onValueChange={(v) => setMobileView(v as any)} className="h-full flex flex-col">
                        <TabsList className="w-full grid grid-cols-3 bg-playground-toolbar border-b border-playground-panel-border rounded-none h-12 shadow-sm">
                            <TabsTrigger
                                value="editor"
                                className="data-[state=active]:bg-playground-panel data-[state=active]:text-playground-accent data-[state=active]:shadow-sm flex items-center gap-2 transition-all"
                            >
                                <Code2 size={16} />
                                <span className="hidden sm:inline">Editor</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="preview"
                                className="data-[state=active]:bg-playground-panel data-[state=active]:text-playground-accent data-[state=active]:shadow-sm flex items-center gap-2 transition-all"
                            >
                                <Globe size={16} />
                                <span className="hidden sm:inline">Preview</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="console"
                                className="data-[state=active]:bg-playground-panel data-[state=active]:text-playground-accent data-[state=active]:shadow-sm flex items-center gap-2 transition-all"
                            >
                                <Terminal size={16} />
                                <span className="hidden sm:inline">Console</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="editor" className="flex-1 m-0 p-2 bg-playground-bg">
                            {editorContent}
                        </TabsContent>
                        <TabsContent value="preview" className="flex-1 m-0 p-2 bg-playground-bg">
                            {previewContent}
                        </TabsContent>
                        <TabsContent value="console" className="flex-1 m-0 p-2 bg-playground-bg">
                            {consoleContent}
                        </TabsContent>
                    </Tabs>
                ) : (
                    <PlaygroundPanels editor={editorContent} preview={previewContent} console={consoleContent} />
                )}
            </div>
        </div>
    )
}
