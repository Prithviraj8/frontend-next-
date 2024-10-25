export interface MetricData {
    timestamp: string
    kw1: number
    kw2: number
    kw3: number
    kw4: number
    kw5: number
}

export interface SummaryMetric {
    label: string
    value: string
    trend?: number
    id: string
}

// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
    return new Date(date).toLocaleTimeString()
}