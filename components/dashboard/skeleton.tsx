import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function DashboardSkeleton() {
    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="h-16 bg-gray-800 rounded-lg animate-pulse" />
                <div className="grid grid-cols-5 gap-4">
                    {Array(5).fill(0).map((_, i) => (
                        <Card key={i} className="bg-gray-800 border-gray-700">
                            <CardHeader className="pb-2">
                                <div className="h-4 bg-gray-700 rounded animate-pulse" />
                            </CardHeader>
                            <CardContent>
                                <div className="h-8 bg-gray-700 rounded animate-pulse" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="h-96 bg-gray-800 rounded-lg animate-pulse" />
                <div className="h-80 bg-gray-800 rounded-lg animate-pulse" />
                <div className="grid grid-cols-3 gap-6">
                    {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="h-48 bg-gray-800 rounded-lg animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
    )
}
