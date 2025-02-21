import { CircularGraph } from "@/components/circular-graph"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalSchedule } from "@/components/medical-schedule"

export default function Dashboard() {
  const healthMetrics = [
    { name: "Heart Rate", value: 72, unit: "bpm", max: 200 },
    { name: "Steps", value: 8500, unit: "steps", max: 10000 },
    { name: "Calories", value: 2100, unit: "kcal", max: 3000 },
    { name: "Blood Pressure", value: 120, unit: "mmHg", max: 180 },
    { name: "Distance", value: 5.2, unit: "km", max: 10 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Health Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthMetrics.map((metric) => (
          <Card key={metric.name}>
            <CardHeader>
              <CardTitle>{metric.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CircularGraph value={metric.value} max={metric.max} unit={metric.unit} />
            </CardContent>
          </Card>
        ))}
      </div>
      <MedicalSchedule />
    </div>
  )
}

