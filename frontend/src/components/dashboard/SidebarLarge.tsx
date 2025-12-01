// const dashboardDisplay = document.getElementById("dashboardDisplay")

const btn = "block w-full text-gray-800 text-sm text-left p-2 cursor-pointer hover:bg-gray-300 rounded"
const imgStyles = "inline-block w-4 h-4 mr-4"

function SidebarB({ setActiveTab }: any) {
  return (
    <aside className="w-60 bg-gray-100 p-4 space-y-3">
      <button
        onClick={() => setActiveTab("home")}
        className={btn}
      >
      <img src="/home.png" className={imgStyles}/>
        Home
      </button>

      <button
        onClick={() => setActiveTab("applications")}
        className={btn}
      >
        <img src="/briefcase.png" className={imgStyles}/>
        Applications
      </button>
      <button
        onClick={() => setActiveTab("settings")}
        className={btn}
      >
      <img src="/settings.png" className={imgStyles}/>
        Settings
      </button>
      <button
        onClick={() => setActiveTab("profile")}
        className={btn}
      >
        <img src="/user.png" className={imgStyles}/>
        Profile
      </button>
    </aside>
  );
}

export default SidebarB