"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Trash2, ChevronRight, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { useMemo } from "react"

export function PlaygroundConsole({ messages, onClear }: any) {
    const groupedMessages = useMemo(() => {
        const grouped: any[] = []
        messages.forEach((msg: any) => {
            const lastGroup = grouped[grouped.length - 1]
            const msgString = msg.args.join(" ")
            if (lastGroup && lastGroup.type === msg.type && lastGroup.message === msgString) {
                lastGroup.count++
            } else {
                grouped.push({
                    ...msg,
                    message: msgString,
                    count: 1,
                })
            }
        })
        return grouped
    }, [messages])

    const getIcon = (type: string) => {
        switch (type) {
            case "error":
                return <AlertCircle size={14} className="shrink-0 mt-0.5" />
            case "warn":
                return <AlertTriangle size={14} className="shrink-0 mt-0.5" />
            default:
                return <ChevronRight size={14} className="shrink-0 mt-0.5" />
        }
    }

    const getColor = (type: string) => {
        switch (type) {
            case "error":
                return "text-red-500 dark:text-red-400"
            case "warn":
                return "text-yellow-600 dark:text-yellow-400"
            default:
                return "text-foreground"
        }
    }

    const getBorderColor = (type: string) => {
        switch (type) {
            case "error":
                return "border-red-500/30"
            case "warn":
                return "border-yellow-500/30"
            default:
                return "border-transparent"
        }
    }

    const formatTime = (timestamp: Date) => {
        return new Date(timestamp).toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            fractionalSecondDigits: 3,
        })
    }

    return (
        <div className="h-full flex flex-col bg-card rounded-xl overflow-hidden shadow-panel border border-border">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-muted-foreground" />
                    <span className="font-semibold text-sm uppercase tracking-wide">Console</span>
                    {messages.length > 0 && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium border border-primary/20">
                            {messages.length}
                        </span>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClear}
                    className="h-7 w-7 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-smooth"
                    title="Clear Console"
                >
                    <Trash2 size={14} />
                </Button>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-3 text-[13px] leading-relaxed space-y-1.5">
                    {messages.length === 0 ? (
                        <div className="flex items-center gap-2 text-muted-foreground p-3 bg-muted/30 rounded-lg border border-border/50">
                            <Info size={14} />
                            <p className="text-xs">Console output will appear here...</p>
                        </div>
                    ) : (
                        groupedMessages.map((msg: any, i: number) => (
                            <div
                                key={i}
                                className={`flex items-start gap-2.5 px-3 py-2 rounded-lg border-l-2 ${getBorderColor(msg.type)} transition-smooth hover:bg-muted/30`}
                            >
                                <span className={getColor(msg.type)}>{getIcon(msg.type)}</span>
                                <div className="flex-1 min-w-0">
                                    <div className={`${getColor(msg.type)} wrap-break-words`}>{msg.message}</div>
                                    <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                                        <span>{formatTime(msg.timestamp)}</span>
                                        {msg.count > 1 && (
                                            <span className="bg-muted px-1.5 py-0.5 rounded text-primary font-medium border border-border/50">
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
