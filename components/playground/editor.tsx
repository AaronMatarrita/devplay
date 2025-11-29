"use client"

import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@monaco-editor/react"), {
    ssr: false,
    loading: () => <div className="p-4 text-muted-foreground">Loading editor...</div>
})

export function PlaygroundEditor({ code, onChange, language }: any) {
    return (
        <div className="h-full rounded-md border bg-[#111] overflow-hidden shadow-inner">
            <Editor
                height="100%"
                theme="vs-dark"
                language={language}
                value={code}
                onChange={(value) => onChange(value || "")}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontLigatures: true,
                    smoothScrolling: true,
                    scrollBeyondLastLine: false,
                }}
            />
        </div>
    )
}
