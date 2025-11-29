"use client"

import { useEffect, useRef } from "react"

export function PlaygroundPreview({ html, css, js, device, onConsole }: any) {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const deviceClass =
        device === "mobile"
            ? "max-w-[400px]"
            : device === "tablet"
                ? "max-w-[800px]"
                : "w-full"

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
    }, [])

    return (
        <div className="h-full w-full flex justify-center items-start p-3">
            <iframe
                ref={iframeRef}
                className={`h-full rounded-lg border shadow bg-white ${deviceClass}`}
                sandbox="allow-scripts allow-same-origin"
            />
        </div>
    )
}
