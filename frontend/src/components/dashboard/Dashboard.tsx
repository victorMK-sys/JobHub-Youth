import { useState } from "react"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Profile from "./Profile"
import Applications from "./Applications"
import Settings from "./Settings"

function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="flex h-screen">
      <Sidebar setActiveTab={setActiveTab} />

      <main className="flex-1 p-2 overflow-y-auto shadow-md rounded-md ml-4">
        {activeTab === "home" && <Home />}
        {activeTab === "applications" && <Applications />}
        {activeTab === "settings" && <Settings />}
        {activeTab === "profile" && <Profile />}
      </main>
    </div>
  )
}

export default Dashboard