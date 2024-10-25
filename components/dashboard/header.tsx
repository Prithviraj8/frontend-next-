"use client"

import { Search, Layout, Star, Settings } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="flex items-center justify-between space-x-4 bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
                <h1 className="text-white font-medium">Fine-tuning Dashboard</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search queries..."
                        className="w-64 pl-10 pr-4 py-1.5 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                </div>
            </div>
            <div className="flex space-x-2">
                {[Layout, Star, Settings].map((Icon, i) => (
                    <button
                        key={i}
                        className="p-2 hover:bg-gray-700 rounded-md text-gray-400"
                    >
                        <Icon className="h-5 w-5" />
                    </button>
                ))}
            </div>
        </div>
    )
}
