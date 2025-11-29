"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export function PlaygroundPanels({ editor, preview, console: consolePanel }: any) {
    return (
        <ResizablePanelGroup
            direction="vertical"
            className="h-full p-2 gap-2"
        >
            <ResizablePanel defaultSize={70} minSize={40}>
                <ResizablePanelGroup direction="horizontal" className="gap-2">
                    <ResizablePanel defaultSize={50} minSize={30}>
                        <div className="h-full">{editor}</div>
                    </ResizablePanel>

                    <ResizableHandle
                        withHandle
                        className="w-1 bg-[#3e3e42] hover:bg-[#4fc3f7] transition-colors"
                    />

                    <ResizablePanel defaultSize={50} minSize={30}>
                        <div className="h-full">{preview}</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>

            <ResizableHandle
                withHandle
                className="h-1 bg-[#3e3e42] hover:bg-[#4fc3f7] transition-colors"
            />

            <ResizablePanel defaultSize={30} minSize={15} maxSize={50}>
                <div className="h-full">{consolePanel}</div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
