import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryMetric } from "@/lib/types"

export function MetricsOverview({ metrics }: { metrics: SummaryMetric[] }) {
    return (
        <div className="grid grid-cols-5 gap-4">
            {metrics.map((metric) => (
                <Card key={metric.id} className="bg-gray-800 border-gray-700">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">
                            {metric.label}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        {metric.trend !== undefined && (
                            <div className="text-sm text-green-400">+{metric.trend}%</div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}