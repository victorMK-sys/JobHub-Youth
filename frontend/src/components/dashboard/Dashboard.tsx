import { useState } from "react"
import Navbar from "./Navbar"
import SidebarB from "./SidebarLarge"
import SidebarS from "./SidebarSmall"
import Home from "./Home"
import Profile from "./Profile"
import Applications from "./Applications"
import Settings from "./Settings"

function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <>
      <Navbar/>
      <div className="flex h-screen mt-8 -mx-2">
        {window.innerWidth < 640 ? <SidebarS setActiveTab={setActiveTab} /> :
        <SidebarB setActiveTab={setActiveTab} />}

        <main className="flex-1 p-2 overflow-y-auto shadow-md rounded-md ml-4">
          {activeTab === "home" && <Home />}
          {activeTab === "applications" && <Applications />}
          {activeTab === "settings" && <Settings />}
          {activeTab === "profile" && <Profile />}
        </main>
      </div>
    </>
  )
}

export default Dashboard