import { deleteUser } from "./dashboardRouter"

function Settings() {

  return (
    <div className="px-2 relative">
      <div className="border-b-1 border-gray-300 pb-2">
        <h1 className="text-sm text-red-400">Settings</h1>
      </div>
        <div className="flex items-center justify-between border-1 border-gray-300 rounded-lg p-3 my-5">
          <div>
            <h2 className="text-gray-900 font-bold text-sm mb-1">Periodic Newsletter</h2>
            <p className="text-gray-500 text-xs">Receive periodic emails on updates and events</p>
          </div>
            <input type="checkbox" name="push" id="push"/>
        </div>
        <div className="flex items-center justify-between border-1 border-red-500 rounded-lg p-3 my-5">
          <div>
            <h2 className="text-red-500 font-bold text-sm mb-1">Delete Account</h2>
            <p className="text-gray-500 text-xs">This is permanent and cannot be undone</p>
          </div>
          <button type="button" className="bg-red-600 text-white text-xs p-2 rounded font-bold cursor-pointer hover:bg-red-700" onClick={toggleDelete}>Delete</button>
        </div>
        <div className="fixed inset-0 bg-black opacity-70 z-50 hidden" id="overlay"></div>
        <div className="absolute inset-x-20 max-w-xl bg-white p-5 rounded-lg shadow-2xl z-50 hidden" id="deleteAcc">
          <h2 className="text-red-500 font-bold text-sm mb-1">Delete Account</h2>
          <p className="text-gray-500 text-xs">This action cannot be undone. This will permanently delete your account and remove all your data from our servers.</p>
          <div className="mt-2">
            <button type="button" className="border-1 border-gray-200 text-xs p-2 rounded-md mr-2 cursor-pointer" onClick={toggleDelete}>Cancel</button>
            <button type="button" className="bg-red-500 text-xs text-white p-2 font-bold rounded cursor-pointer" onClick={deleteUser}>Delete Account</button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold bg-black text-white max-w-xs p-2 -translate-x-96" id="doneEl">
          <img src="accept.png" alt="" className="max-w-5" />
          <p>Account deleted</p>
          </div>
    </div>
  )
}

function toggleDelete() {
  document.getElementById("overlay")?.classList.toggle("hidden")
  document.getElementById("deleteAcc")?.classList.toggle("hidden")
}

export default Settings