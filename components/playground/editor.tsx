"use client"

import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@monaco-editor/react"), {
    ssr: false,
    loading: () => (
        <div className="h-full flex items-center justify-center bg-card rounded-xl border border-border">
            <p className="text-muted-foreground text-sm">Loading editor...</p>
        </div>
    ),
})

export function PlaygroundEditor({ code, onChange, language }: any) {
    return (
        <div className="h-full bg-card rounded-xl overflow-hidden shadow-panel border border-border transition-smooth hover:shadow-panel-lg">
            <Editor
                height="100%"
                theme="vs-dark"
                language={language}
                value={code}
                onChange={(value) => onChange(value || "")}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "var(--font-mono)",
                    fontLigatures: true,
                    smoothScrolling: true,
                    scrollBeyondLastLine: false,
                    padding: { top: 16, bottom: 16 },
                    lineHeight: 22,
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                }}
            />
        </div>
    )
}
