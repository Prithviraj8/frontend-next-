import { fetchMetrics, summaryMetrics } from "@/lib/data"
import { Header } from "./header"
import { MetricsOverview } from "./metrics-overview"
import { MainCharts } from "./main-charts"
import { SystemStats } from "./system-stats"

export async function DashboardShell() {
    const metrics = await fetchMetrics()

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <Header />
                <MetricsOverview metrics={summaryMetrics} />
                <MainCharts data={metrics} />
                <SystemStats data={metrics} />
            </div>
        </div>
    )
}
