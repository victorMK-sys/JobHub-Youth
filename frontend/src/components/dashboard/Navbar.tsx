import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="flex items-center justify-center shadow-md fixed top-0 left-0 right-0 bg-white h-12 z-10">
        <div className="w-full px-5 flex font-bold items-center justify-between text-xs">
          <Link to={"/dashboard"}>Home</Link>
          <button className="p-2 rounded cursor-pointer hover:bg-gray-300" onClick={logoutUser}>Logout</button>
        </div>
    </nav>
  )
}

function logoutUser() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  window.location.pathname = '/'
}

export default Navbar