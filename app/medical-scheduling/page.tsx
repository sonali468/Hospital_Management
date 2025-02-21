"use client"

import { useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

moment.locale("en-GB")
const localizer = momentLocalizer(moment)

export default function MedicalScheduling() {
  const [events, setEvents] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    type: "medicine",
    pattern: "daily",
  })

  const handleSelectSlot = ({ start }) => {
    setShowForm(true)
    setFormData({ ...formData, start: start, end: start })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      title: formData.title,
      start: new Date(formData.start),
      end: new Date(formData.end),
      type: formData.type,
      pattern: formData.pattern,
    }
    setEvents([...events, newEvent])
    setShowForm(false)
    setFormData({ title: "", start: "", end: "", type: "medicine", pattern: "daily" })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Medical Scheduling</h1>
      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          selectable
        />
      </div>
      {showForm && (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="type">Type</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="medicine">Medicine</SelectItem>
                <SelectItem value="appointment">Appointment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="pattern">Pattern</Label>
            <Select value={formData.pattern} onValueChange={(value) => setFormData({ ...formData, pattern: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Add Event</Button>
        </form>
      )}
    </div>
  )
}

