// const dashboardDisplay = document.getElementById("dashboardDisplay")

const container = "flex items-center w-full py-2 pl-3 cursor-pointer hover:bg-gray-300 rounded";
const imgStyles = "inline-block w-4 h-4 mr-4";

function SidebarS({ setActiveTab }: any) {
  return (
    <aside className="w-14 bg-gray-100 p-2 space-y-3 rounded-md">
      <div className={container} onClick={() => setActiveTab("home")}>
        <img src="/home.png" className={imgStyles} />
      </div>
      <div className={container} onClick={() => setActiveTab("applications")}>
        <img src="/briefcase.png" className={imgStyles} />
      </div>
      <div className={container} onClick={() => setActiveTab("settings")}>
        <img src="/settings.png" className={imgStyles} />
      </div>
      <div className={container} onClick={() => setActiveTab("profile")}>
        <img src="/user.png" className={imgStyles} />
      </div>
    </aside>
  );
}

export default SidebarS;
