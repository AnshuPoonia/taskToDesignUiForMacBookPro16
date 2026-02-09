import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard wrapper */}
      <main className="flex-1 overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  )
}
