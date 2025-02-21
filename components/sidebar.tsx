import Link from "next/link"
import { Home, Calendar, Activity, Users } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-full p-4">
      <nav className="space-y-2">
        <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="/medical-scheduling" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          <Calendar className="h-5 w-5" />
          <span>Medical Scheduling</span>
        </Link>
        <Link href="/lifestyle" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          <Activity className="h-5 w-5" />
          <span>Lifestyle</span>
        </Link>
        <Link href="/community" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
          <Users className="h-5 w-5" />
          <span>Community</span>
        </Link>
      </nav>
    </div>
  )
}

