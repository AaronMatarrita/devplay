"use client"

import { useEffect, useRef } from "react"
import { RefreshCcw } from "lucide-react"

export function PlaygroundPreview({ html, css, js, device, onConsole }: any) {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const deviceClass =
        device === "mobile"
            ? "max-w-[380px]"
            : device === "tablet"
                ? "max-w-[768px]"
                : "max-w-[1200px]"

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return

        const code = `
        <style>${css}</style>
        ${html}
        <script>
            const log = console.log;
            console.log = (...args) => {
            window.parent.postMessage({ type: "log", args }, "*");
            log(...args);
            };
            window.onerror = (msg) =>
            window.parent.postMessage({ type: "error", args: [msg] }, "*");
            ${js}
        </script>
        `
        iframe.srcdoc = code
    }, [html, css, js])

    useEffect(() => {
        const handler = (event: any) => {
            if (event.data?.type) onConsole(event.data)
        }
        window.addEventListener("message", handler)
        return () => window.removeEventListener("message", handler)
    }, [onConsole])

    return (
        <div className="h-full w-full flex justify-center items-start p-4">
            <div
                className={`
                    relative w-full h-full rounded-2xl overflow-hidden
                    bg-background/60 backdrop-blur-md border border-border/60 
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    transition-all duration-300 ${deviceClass}
                `}
            >
                {/* Browser top bar */}
                <div className="h-10 flex items-center gap-3 px-4 border-b border-border/60 bg-background/80 backdrop-blur-xl">
                    {/* Traffic buttons */}
                    <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-500/90 shadow-sm" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-sm" />
                        <span className="h-3 w-3 rounded-full bg-green-500/90 shadow-sm" />
                    </div>

                    {/* Address bar */}
                    <div className="flex-1 flex items-center h-7 px-3 rounded-md bg-muted/60 border border-border/50 shadow-inner">
                        <span className="text-xs text-muted-foreground">devplay.preview</span>
                    </div>

                    {/* Refresh button */}
                    <button
                        title="Reload Preview"
                        onClick={() => iframeRef.current?.contentWindow?.location.reload()}
                        className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-muted transition-colors"
                    >
                        <RefreshCcw className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>

                {/* Iframe */}
                <iframe
                    ref={iframeRef}
                    className="w-full h-[calc(100%-40px)] bg-white dark:bg-neutral-900"
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
        </div>
    )
}
