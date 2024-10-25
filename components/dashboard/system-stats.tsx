"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { MetricData } from "@/lib/types"
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export function SystemStats({ data }: { data: MetricData[] }) {
    const recentData = data.slice(-30)

    return (
        <div className="grid grid-cols-3 gap-6">
            <ProcessStats />
            <ThreadCount data={recentData} />
            <SystemLoad data={recentData} />
        </div>
    )
}

function ProcessStats() {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Process Stats</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        { label: "Active Processes", value: "88" },
                        { label: "Blocked", value: "0" },
                        { label: "Sleeping", value: "66" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex justify-between text-sm">
                            <span className="text-gray-400">{stat.label}</span>
                            <span className="text-white">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

function ThreadCount({ data }: { data: MetricData[] }) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white">Thread Count</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <YAxis domain={[0, 200]} stroke="#4B5563" />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                                labelStyle={{ color: "#9CA3AF" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="kw1"
                                stroke="#3B82F6"
                                dot={false}
                                name="Threads"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

function SystemLoad({ data }: { data: MetricData[] }) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white">System Load</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <YAxis domain={[0, 1]} stroke="#4B5563" />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                                labelStyle={{ color: "#9CA3AF" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="kw2"
                                stroke="#10B981"
                                dot={false}
                                name="Load"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}