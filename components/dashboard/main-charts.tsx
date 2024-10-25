"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricData } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export function MainCharts({ data }: { data: MetricData[] }) {
    return (
        <div className="grid grid-cols-1 gap-6">
            <AttentionChart data={data} />
            <MemoryUsageChart data={data} />
        </div>
    )
}

function AttentionChart({ data }: { data: MetricData[] }) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white">Attention Tracking</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis
                                dataKey="timestamp"
                                stroke="#4B5563"
                                tickFormatter={(value) => formatDate(new Date(value))}
                            />
                            <YAxis domain={[0, 1]} stroke="#4B5563" />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                                labelStyle={{ color: "#9CA3AF" }}
                                labelFormatter={(value) => formatDate(new Date(value))}
                            />
                            {["kw1", "kw2", "kw3", "kw4", "kw5"].map((key, i) => (
                                <Line
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    stroke={[
                                        "#3B82F6",
                                        "#EF4444",
                                        "#10B981",
                                        "#8B5CF6",
                                        "#06B6D4",
                                    ][i]}
                                    dot={false}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

function MemoryUsageChart({ data }: { data: MetricData[] }) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white">Memory Usage</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis
                                dataKey="timestamp"
                                stroke="#4B5563"
                                tickFormatter={(value) => formatDate(new Date(value))}
                            />
                            <YAxis domain={[0, 100]} stroke="#4B5563" />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                                labelStyle={{ color: "#9CA3AF" }}
                                labelFormatter={(value) => formatDate(new Date(value))}
                            />
                            <Line
                                type="monotone"
                                dataKey="kw1"
                                stroke="#3B82F6"
                                dot={false}
                                name="Total Memory"
                            />
                            <Line
                                type="monotone"
                                dataKey="kw2"
                                stroke="#EF4444"
                                dot={false}
                                name="Used Memory"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
