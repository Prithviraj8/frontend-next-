import { MetricData, SummaryMetric } from "./types"

export async function fetchMetrics(duration: number = 288): Promise<MetricData[]> {
    // In a real app, this would be an API call
    return Array.from({ length: duration }, (_, i) => ({
        timestamp: new Date(Date.now() - (duration - i) * 300000).toISOString(),
        kw1: Math.random() * 0.5 + 0.3,
        kw2: Math.random() * 0.5 + 0.2,
        kw3: Math.random() * 0.5 + 0.4,
        kw4: Math.random() * 0.5 + 0.3,
        kw5: Math.random() * 0.5 + 0.25,
    }))
}

export const summaryMetrics: SummaryMetric[] = [
    { id: "uptime", label: "Uptime", value: "2.3 days", trend: 0.1 },
    { id: "processes", label: "Active Processes", value: "88" },
    { id: "threads", label: "Active Threads", value: "154" },
    { id: "memory", label: "Memory Usage", value: "32%" },
    { id: "cpu", label: "CPU Usage", value: "10%" },
]
