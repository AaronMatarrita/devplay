"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Trash2, ChevronRight, AlertCircle, AlertTriangle, Info } from 'lucide-react'
import { useMemo } from "react"

export function PlaygroundConsole({ messages, onClear }: any) {
    // <CHANGE> Agrupar mensajes idénticos consecutivos con contador
    const groupedMessages = useMemo(() => {
        const grouped: any[] = []
        messages.forEach((msg: any) => {
            const lastGroup = grouped[grouped.length - 1]
            const msgString = msg.args.join(" ")

            if (lastGroup &&
                lastGroup.type === msg.type &&
                lastGroup.message === msgString) {
                lastGroup.count++
            } else {
                grouped.push({
                    ...msg,
                    message: msgString,
                    count: 1
                })
            }
        })
        return grouped
    }, [messages])

    const getIcon = (type: string) => {
        switch (type) {
            case "error": return <AlertCircle size={14} className="shrink-0 mt-0.5" />
            case "warn": return <AlertTriangle size={14} className="shrink-0 mt-0.5" />
            default: return <ChevronRight size={14} className="shrink-0 mt-0.5" />
        }
    }

    const getColor = (type: string) => {
        switch (type) {
            case "error": return "text-[#f48771]"
            case "warn": return "text-[#cca700]"
            default: return "text-[#cccccc]"
        }
    }

    const formatTime = (timestamp: Date) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3
        })
    }

    return (
        <div className="h-full flex flex-col rounded-md overflow-hidden border border-[#3e3e42] bg-[#1e1e1e] shadow-lg">
            {/* <CHANGE> Header estilo VSCode con mejor UI */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3e3e42]">
                <div className="flex items-center gap-2 text-[#cccccc]">
                    <ChevronRight size={16} />
                    <span className="font-semibold text-sm uppercase tracking-wide">Console</span>
                    {messages.length > 0 && (
                        <span className="text-xs bg-[#3e3e42] px-2 py-0.5 rounded-full">
                            {messages.length}
                        </span>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClear}
                    className="h-7 w-7 hover:bg-[#3e3e42] text-[#cccccc] hover:text-white"
                    title="Clear Console"
                >
                    <Trash2 size={14} />
                </Button>
            </div>

            {/* <CHANGE> Console output con estilo terminal real */}
            <ScrollArea className="flex-1">
                <div className="p-2 font-mono text-[13px] leading-relaxed">
                    {messages.length === 0 ? (
                        <div className="flex items-center gap-2 text-[#858585] p-2">
                            <Info size={14} />
                            <p className="text-xs">Console output will appear here...</p>
                        </div>
                    ) : (
                        groupedMessages.map((msg: any, i: number) => (
                            <div
                                key={i}
                                className={`flex items-start gap-2 px-2 py-1.5 hover:bg-[#2a2a2a] border-l-2 ${msg.type === 'error' ? 'border-[#f48771]' :
                                        msg.type === 'warn' ? 'border-[#cca700]' :
                                            'border-transparent'
                                    }`}
                            >
                                <span className={getColor(msg.type)}>
                                    {getIcon(msg.type)}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className={`${getColor(msg.type)} wrap-break-word-words`}>
                                        {msg.message}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-[10px] text-[#858585]">
                                        <span>{formatTime(msg.timestamp)}</span>
                                        {msg.count > 1 && (
                                            <span className="bg-[#3e3e42] px-1.5 py-0.5 rounded text-[#4fc3f7]">
                                                {msg.count}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </ScrollArea>
        </div>
    )
}
