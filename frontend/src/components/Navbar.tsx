import { Link } from "react-router-dom"

function Navbar() {
  const link = 'cursor-pointer text-base font-bold hover:text-yellow-500'
  const largeScreen = {
    nav: "bg-white flex sticky top-0 justify-between items-center px-4 py-3 shadow-xl mb-5 z-50",
    div: "flex",
    menu: "hidden"
  }
  const smallScreen = {
    nav: "bg-white flex sticky top-0 justify-between items-center px-4 py-3 shadow-xl z-50",
    div: "hidden",
    menu: "flex"
  }

  const screen = document.body.offsetWidth <= 550 ? smallScreen : largeScreen
  const menu = document.body.offsetWidth <= 500 ? "inline" : "hidden"

  return(
    <nav className={screen.nav}>
      <div>
        <h1 className="font-bold text-2xl text-red-800 font-mono cursor-pointer">sakaJobo</h1>
      </div>
      <div className={screen.div}>
        <ul className="flex items-center justify-center gap-5">
          <Link className={link} to="/">Home</Link>
          <Link className={link} to="/about">About</Link>
          <Link className={link} to="/jobs">Listings</Link>
          <Link className="cursor-pointer text-base px-2 py-1 rounded-sm hover:bg-yellow-500 hover:text-white" to="/login">Login</Link>
          <Link to="profile">
            <div className="flex">
              <button type="button" className="cursor-pointer">
                <img className="w-5" src="/user.png" alt="PROFILE" />
              </button> 
            </div>  
          </Link>
        </ul>
      </div>
      <div className={menu}>
        <button type="button" onClick={displayMenu}>
          <img className="w-5" src="/more.png" alt="Menu" />
        </button>
      </div>
      <div className="absolute top-2 right-1 bg-gray-800 rounded-lg w-1/2 py-2 hidden" id="menuOps">
        <div className="rounded-full w-6 text-center bg-red-700 float-right mr-2 font-bold"><button type="button" onClick={removeMenu}>X</button></div>
        <ul className="flex flex-col">
          <Link className="text-white border-b-1 border-gray-300 px-2 mt-5" to="/">Home</Link>
          <Link className="text-white border-b-1 border-gray-300 px-2" to="/jobs">Listings</Link>
          <Link className="text-white px-2" to="/login">Login</Link>
        </ul>
      </div>
    </nav>
  )
}

function displayMenu() {
  document.getElementById('menuOps')?.classList.add("inline")
}

function removeMenu() {
  document.getElementById('menuOps')?.classList.remove("inline")
  document.getElementById('menuOps')?.classList.add("hidden")
}

export default Navbar