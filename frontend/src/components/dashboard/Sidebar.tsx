// const dashboardDisplay = document.getElementById("dashboardDisplay")
const smallScreen = "w-60 bg-gray-100 p-4 space-y-3 hidden"
const largeScreen = "w-60 bg-gray-100 p-4 space-y-3"

const screenSize = window.innerWidth < 768 ? smallScreen : largeScreen
const btn = "block w-full text-gray-800 text-sm text-left p-2 cursor-pointer hover:bg-gray-300 rounded"

function Sidebar({ setActiveTab }: any) {
  return (
    <aside className={screenSize}>
      <button
        onClick={() => setActiveTab("home")}
        className={btn}
      >
        Home
      </button>

      <button
        onClick={() => setActiveTab("applications")}
        className={btn}
      >
        Applications
      </button>
      <button
        onClick={() => setActiveTab("settings")}
        className={btn}
      >
        Settings
      </button>
      <button
        onClick={() => setActiveTab("profile")}
        className={btn}
      >
        Profile
      </button>
    </aside>
  );
}

export default Sidebar