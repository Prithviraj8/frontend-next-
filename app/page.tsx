import { DashboardShell } from "@/components/dashboard/shell"
import { Suspense } from "react"
import { DashboardSkeleton } from "@/components/dashboard/skeleton"

export default function DashboardPage() {
    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <DashboardShell />
        </Suspense>
    )
}