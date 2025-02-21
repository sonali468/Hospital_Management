"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface CircularGraphProps {
  value: number
  max: number
  unit: string
}

export function CircularGraph({ value, max, unit }: CircularGraphProps) {
  const percentage = (value / max) * 100
  const data = [
    { name: "Value", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ]

  return (
    <div className="h-48 w-48 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Cell key="cell-0" fill="#4CAF50" />
            <Cell key="cell-1" fill="#E0E0E0" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm ml-1">{unit}</span>
      </div>
    </div>
  )
}

