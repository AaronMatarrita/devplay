"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export function PlaygroundPanels({ editor, preview, console: consolePanel }: any) {
    return (
        <ResizablePanelGroup direction="vertical" className="h-full p-3 gap-3">
            <ResizablePanel defaultSize={70} minSize={40}>
                <ResizablePanelGroup direction="horizontal" className="gap-3">
                    <ResizablePanel defaultSize={40} minSize={30}>
                        <div className="h-full">{editor}</div>
                    </ResizablePanel>
                    <ResizableHandle withHandle className="w-1 bg-border rounded-full transition-smooth hover:bg-primary" />
                    <ResizablePanel defaultSize={60} minSize={30}>
                        <div className="h-full">{preview}</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle className="h-1 bg-border rounded-full transition-smooth hover:bg-primary" />
            <ResizablePanel defaultSize={30} minSize={15} maxSize={50}>
                <div className="h-full">{consolePanel}</div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
