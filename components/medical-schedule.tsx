import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MedicalSchedule() {
  const todaySchedule = [
    { type: "Medicine", name: "Aspirin", time: "08:00 AM" },
    { type: "Medicine", name: "Vitamin D", time: "12:00 PM" },
    { type: "Appointment", name: "Dr. Smith - Checkup", time: "03:00 PM" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Medical Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {todaySchedule.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>
                {item.type}: {item.name}
              </span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

